import styles from './SingleExperience.module.scss';
import HeroIntern from "../../../components/HeroIntern";
import Cities from '../../../components/Cities';
import Layout from '../../../components/Layouts';
import { useRouter } from "next/router";
import ActivityDescription from '../../../components/ActivityDescription';


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
                    description={activity.about}
                    price={activity.retail_price.formatted_value}
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