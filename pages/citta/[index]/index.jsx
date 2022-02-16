
import { useRouter } from "next/router";
import { API_URL, FETCH_HEADERS } from "../../../libs/variables";
import axios from 'axios';
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import Layout from "../../../components/Layouts";
import HeroIntern from "../../../components/HeroIntern";
import styles from "./SingleCity.module.scss";
import FilterActivities from '../../../components/FilterActivities';
import SectionTitleSkeleton from "../../../components/SectionTitle";
import ActivitiesSkeleton from "../../../components/ActivitiesSkeleton";
import CitiesSkeleton from "../../../components/CitiesSkeleton";

const SectionTitle = dynamic(
  import("../../../components/SectionTitle"),
  { ssr: false, loading: () => <SectionTitleSkeleton skeleton />}
);

const Activities = dynamic(
  () => import('../../../components/Activities'), 
  { ssr: false, loading: () => <ActivitiesSkeleton />}
);

const Cities = dynamic(
  () => import('../../../components/Cities'), 
  { ssr: false, loading: () => <CitiesSkeleton />}
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
        <div className={styles.wrapper_title}>
          <SectionTitle 
            title={`Scopri cosa puoi fare a ${city.name}`} 
            description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
            showBtn={false}
        />
        </div>
        <FilterActivities callback={handleFilter} />
        <Activities data={filterActivitiesState} showTitle={false}>
        </Activities>
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
    `${API_URL}cities/${params.index}/activities?sort_by=rating&limit=20`,
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
