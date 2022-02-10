import styles from "./SingleCity.module.scss";
import HeroIntern from "../../../components/HeroIntern";
import Activities from "../../../components/Activities";
import CitiesGrid from "../../../components/CitiesGrid";
import { useRouter } from "next/router";
import Layout from "../../../components/Layouts";

export default function City({ city }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>loading</h1>;
  }

  return (
    <>
      <Layout>
        <HeroIntern
          title={city.name}
          description={city.content}
          bgImage={city.cover_image_url}
        />
        <Activities />
        <CitiesGrid />
      </Layout>
    </>
  );
}
export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://sandbox.musement.com/api/v3/cities/${params.index}`,
    {
      headers: {
        Accept: "application/json",
        "X-Musement-Version": "3.4.0",
        "Accept-Language": "it-IT",
      },
    }
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  //console.log("genero pagina ")
  return {
    props: {
      city: data,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://sandbox.musement.com/api/v3/cities");
  const data = await res.json();

  const paths = data.map((city) => {
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
