import HeroIntern from "../../../components/HeroIntern";
import { useRouter } from "next/router";
import Layout from "../../../components/Layouts";
import { API_URL, FETCH_HEADERS } from "../../../libs/variables";
import axios from 'axios';
import stylesTitle from "../../../components/SectionTitle/SectionTitle.module.scss";
import { useState, useEffect } from "react";
import FilterActivities from '../../../components/FilterActivities';
import dynamic from 'next/dynamic';

const Activities = dynamic(
  () => import('../../../components/Activities'), 
  { ssr: false, loading: () => <div>Loading...</div> }
);

const Cities = dynamic(
  () => import('../../../components/Cities'), 
  { ssr: false, loading: () => <div>Loading...</div> }
);


const initialFilterState = {
  maxPrice: 100,
  category: 0
};

export default function City({ city, activities, cities }) 
{
  // State
  const [filterActivitiesState, setFilterActivitiesState] = useState({data: []});
  const [filterState, setFilterState] = useState(initialFilterState);
  
  useEffect(() =>
  {
    setFilterActivitiesState({ data: activities.slice(0, 8) });
  }, [activities]);
  
  // Router
  const router = useRouter();

  if (router.isFallback) 
  {
    return <h1>loading</h1>;
  }

  // Events
  const handleFilter = (filters) =>
  {
      if(filters &&
          (filterState.maxPrice != filters.maxPrice ||
          filterState.category != filters.category))
      {
          setFilterState(filters);

          setFilterActivitiesState({ data: activities.filter((value) =>
          {
              if(filters.category > 0)
              {
                return (
                  value.verticals.length && value.verticals[0].id === filters.category &&
                  value.retail_price.value <= filters.maxPrice
                );
              }
              return (
                value.verticals.length && value.verticals[0].id !== filters.category &&
                value.retail_price.value <= filters.maxPrice 
              );

          }).slice(0, 8)}); 
      }
  }; 
  
  
  return (
    <>
      <Layout>
        <HeroIntern
          title={city.name}
          description={city.content}
          bgImage={city.cover_image_url}
        />
        <div 
          className={stylesTitle.wrapper_title_button}
          style={{ padding: '100px 100px 0' }}
        >
          <div className={stylesTitle.wrapper_title}>
            <h2>Scopri cosa puoi fare a {city.name}</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
        <FilterActivities callback={handleFilter} />
        <Activities data={filterActivitiesState} showTitle={false} />
        <Cities data={cities} exceptId={city.id} />
      </Layout>
    </>
  );
}


export async function getStaticProps({ params }) 
{
  const city = await axios(
    `${API_URL}cities/${params.index}`,
    {
      headers: FETCH_HEADERS
    }
  );

  const activities = await axios(
    `${API_URL}cities/${params.index}/activities?sort_by=city-relevance&limit=100`,
    {
      headers: FETCH_HEADERS
    }
  );

  const cities = await axios(
    `${API_URL}cities?limit=6&without_events=yes`,
    {
      headers: FETCH_HEADERS
    }
  );

  if (!city) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      city: city.data,
      activities: activities.data,
      cities: cities.data,
    }
  };
}


export async function getStaticPaths() 
{
  const cities = await axios(
    `${API_URL}cities`,
    {
      headers: FETCH_HEADERS
    }
  );

  const paths = cities.data.map((city) => {
    return {
      params: {
        index: `${city.id}`,
      },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
}
