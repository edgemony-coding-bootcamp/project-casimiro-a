import { useRouter } from "next/router";
import { API_URL } from "../../../libs/variables";
import axios from 'axios';
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterActivities } from "../../../store/actions";
import { useSelector } from "react-redux";
import dynamic from 'next/dynamic';
import Layout from "../../../components/Layouts";
import HeroIntern from "../../../components/HeroIntern";
import styles from "./SingleCity.module.scss";
import FilterActivities from '../../../components/FilterActivities';
import SectionTitleSkeleton from "../../../components/SectionTitle";
import ActivitiesSkeleton from "../../../components/ActivitiesSkeleton";
import CitiesSkeleton from "../../../components/CitiesSkeleton";
import LottieLoader from "../../../components/LottieLoader";


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
  city: 0,
  maxPrice: 100,
  category: '',
  pagination: 0,
  up: false
};

export default function City({ city, cities }) 
{
  // Router
  const router = useRouter();
  
  if (router.isFallback) 
  {
    return <LottieLoader />;
  }

  const dispatch = useDispatch();
  const filterActivitiesState = useSelector((state) => {
    if(Object.keys(state.allActivities).length !== 0)
    {
      return state.allActivities;
    }
  }); 


  // State
  const [filterState, setFilterState] = useState({...initialFilterState, city: city.id});
  
  useEffect(() =>
  {
    setFilterState({...filterState, city: city.id});
  }, [city]);

  useEffect(() =>
  {
    dispatch(filterActivities(filterState));
  }, [filterState]);


  // Events
  const handleFilter = (filters) =>
  {
      if(filters &&
        (filterState.maxPrice != filters.maxPrice ||
        filterState.category != filters.category))
      {
          setFilterState({...filterState, ...filters});
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
            description={''}
            showBtn={false}
        />
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
  const city = await axios(`${API_URL}cities/${params.index}`);

  const cities = await axios(`${API_URL}cities?limit=6&without_events=yes`);

  if (!city) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      city: city.data,
      cities: cities.data,
    }
  };
}


export async function getStaticPaths() 
{
  const cities = await axios(`${API_URL}cities`);

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
