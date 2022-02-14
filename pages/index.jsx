
import axios from 'axios';
import { API_URL, FETCH_HEADERS } from '../libs/variables';
import Layout from '../components/Layouts';
import Hero from '../components/Hero';
import dynamic from 'next/dynamic';

const Activities = dynamic(
  () => import('../components/Activities'), 
  { ssr: false, loading: () => <div>Loading...</div> }
);

const Cities = dynamic(
  () => import('../components/Cities'), 
  { ssr: false, loading: () => <div>Loading...</div> }
);


export default function Home({ activities, cities }) 
{
  return (
    <Layout>
      <Hero data={cities} />
      <Activities data={activities} />
      <Cities data={cities.slice(0,5)} />
    </Layout>
  )
}

export const getStaticProps = async () =>
{
    const activitiesRes = await axios(
      `${API_URL}activities?offset=2&limit=5`,
      {
        headers: FETCH_HEADERS
      }
    );

    const citiesRes = await axios(
      `${API_URL}cities?limit=7&without_events=yes`,
      {
        headers: FETCH_HEADERS
      }
    );

    return {
      props: {
        activities: activitiesRes.data,
        cities: citiesRes.data
      }
    };
};