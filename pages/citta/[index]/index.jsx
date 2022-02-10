import styles from './SingleCity.module.scss';
import Header from '../../../components/Header';
import HeroIntern from "../../../components/HeroIntern";
import Activities from '../../../components/Activities';
import CitiesGrid from '../../../components/CitiesGrid';
import Footer from '../../../components/Footer';
import { useRouter } from "next/router";



export default function City({ city }) {

    const router = useRouter();

    if(router.isFallback){
        return <h1>loading</h1>
      }

    return (
        <>
            <Header />
            <HeroIntern 
                cityName={city.name} 
                cityDescription={city.content} 
                cityImage={city.cover_image_url}/>
            <Activities />
            <CitiesGrid />
            <Footer />

        </>
    )
}
export async function getStaticProps({ params }) {
  
    const res = await fetch(`https://sandbox.musement.com/api/v3/cities/${params.index}`);
    const data = await res.json();
  
    if (!data) {
      return {
        notFound: true,
      }
    }

    //console.log("genero pagina ")
    return {
      props: {
        city: data,
      },
      revalidate: 10,
    };
  }
  
  export async function getStaticPaths(){
    const res = await fetch("https://sandbox.musement.com/api/v3/cities");
    const data = await res.json();
    
  
    
    const paths = data.map(city => {
      return {
        params: {
          index: `${city.id}`
        }
      }
    })
  
    return {
      paths: paths,
      fallback: true,
    }
  } 