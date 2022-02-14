import styles from './SingleExperience.module.scss';
import HeroIntern from "../../../components/HeroIntern";
import Cities from '../../../components/Cities';
import Layout from '../../../components/Layouts';
import { useRouter } from "next/router";
import ActivityDescription from '../../../components/ActivityDescription';
import CityDescription from '../../../components/CityDescription';
import Reviews from '../../../components/Reviews';


export default function Activity({activity}) {
    const router = useRouter();

    if(router.isFallback) {
        return <h1>loading</h1>;
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
                />
                <Reviews />
                <CityDescription 
                    image={activity.city.cover_image_url}
                    title={activity.city.name}
                    description={activity.city.content}
                    more={activity.city.more}
                    id={activity.city.id}
                />
                <Cities />
            </Layout>
        </>
    );
}

export async function getStaticProps({params}) {
    const res = await fetch(
        `https://sandbox.musement.com/api/v3/activities/${params.name}`,
        {
            headers: {
              Accept: "application/json",
              "X-Musement-Version": "3.4.0",
              "Accept-Language": "it-IT",
            },
        }
    );
    const data = await res.json();

    if(!data) {
        return {
            notFound: true,
        };
    }

    return {
        props:{
            activity: data,
        },
        revalidate: 10,
    };
}

export async function getStaticPaths() {
    const res = await fetch("https://sandbox.musement.com/api/v3/activities");
    const data = await res.json();

    const paths = data.data.map((activity) => {
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