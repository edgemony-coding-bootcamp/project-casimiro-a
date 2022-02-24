import { useRouter } from "next/router";
import { API_URL } from "../../../libs/variables";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addCartItem, getCartItems } from "../../../store/actions";
import axios from 'axios';
import dynamic from "next/dynamic";
import Layout from '../../../components/Layouts';
import HeroIntern from "../../../components/HeroIntern";
import Reviews from '../../../components/Reviews';
import CitiesSkeleton from "../../../components/CitiesSkeleton";
import DescriptionSkeleton from "../../../components/DescriptionSkeleton";
import LottieLoader from "../../../components/LottieLoader";

const ActivityDescription = dynamic(
    () => import('../../../components/ActivityDescription'),
    { ssr: false, loading: () => <DescriptionSkeleton /> }
);

const CityDescription = dynamic(
    () => import('../../../components/CityDescription'),
    { ssr: false, loading: () => <DescriptionSkeleton imageRight={true} /> }
);

const Cities = dynamic(
    () => import('../../../components/Cities'),
    { ssr: false, loading: () => <CitiesSkeleton /> }
);


export default function Activity({ activity, cities }) 
{

    const { data: session } = useSession();
    const dispatch = useDispatch();
    const cartState = useSelector(state => state.cart);
    
    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => 
    {
        if(session)
            dispatch(getCartItems(session.user.email));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [session]);

    useEffect(() => 
    {
        if(session && activity && cartState.length)
        {
            if(cartState.filter((item) => item.id == activity.uuid).length)
                setIsAdded(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activity, cartState]);

    const router = useRouter();

    if(router.isFallback) {
        return <LottieLoader />
    }

    const handleAddToCart = (data) =>
    {
        if(session)
        {
            dispatch(addCartItem(session.user.email, data.uuid, data.title, data.cover_image_url, data.retail_price.value));
        } 
        else
        {
            alert('Devi essere loggato per aggiungere qualcosa al carrello.');
        }
    }

    return (
        <>
            <Layout>
                <HeroIntern 
                    title={activity.title} 
                    description={activity.description} 
                    bgImage={activity.city.cover_image_url}                    
                />
                <ActivityDescription 
                    image={activity.cover_image_url}
                    title={activity.title}
                    description={activity.about}
                    price={activity.retail_price.formatted_value}
                    showService1 = {activity.giftable}
                    showService2 = {activity.special_offer}
                    showService3 = {activity.free_cancellation}
                    showService4 = {activity.is_available_today}
                    btnActive={isAdded}
                    btnAction={() => handleAddToCart(activity)}
                />
                <Reviews />
                <CityDescription 
                    image={activity.city.cover_image_url}
                    title={activity.city.name}
                    description={activity.city.content}
                    more={activity.city.more}
                    id={activity.city.id}
                />
                <Cities data={cities} exceptId={activity.city.id}/>
            </Layout>
        </>
    );
}



export async function getStaticProps({params}) 
{
    const activity = await axios(`${API_URL}activities/${params.name}`);

    const cities = await axios(`${API_URL}cities?limit=6&without_events=yes`);

    if(!activity) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            activity: activity.data,
            cities: cities.data,
        }
    };
}

export async function getStaticPaths() 
{
    const activities = await axios(`${API_URL}activities`); 

    const paths = activities.data.data.map((activity) => {
        return {
            params: {
                name: `${activity.uuid}`,
            },
        };
    });

    return {
        paths: paths,
        fallback: true,
    };
};