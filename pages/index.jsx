
import axios from 'axios';
import { API_URL } from '../libs/variables';
import Hero from "../components/Hero";
import Activities from '../components/Activities';
import CitiesGrid from '../components/CitiesGrid';
import Layout from '../components/Layouts';


export default function Home({ activities, cities }) 
{

  console.log(`Activity: ${JSON.stringify(activities, null, 4)}`);
  console.log(`Cities: ${JSON.stringify(cities, null, 4)}`);
  
  return (
    <Layout>
      <Hero />     
      <Activities data={activities} />
      <Cities data={cities} />
    </Layout>
  )
}

export const getStaticProps = async () =>
{
    const activitiesRes = await axios(
      `${API_URL}activities?offset=2&limit=5`,
      {
        headers: 
        {
          'Accept': 'application/json',
          'X-Musement-Version': '3.4.0',
          'Accept-Language': 'it-IT'
        }
      }
    );

    const citiesRes = await axios(
      `${API_URL}cities?limit=5`,
      {
        headers: 
        {
          'Accept': 'application/json',
          'X-Musement-Version': '3.4.0',
          'Accept-Language': 'it-IT'
        }
      }
    );

    return {
      props: {
        activities: activitiesRes.data,
        cities: citiesRes.data
      }
    };
};