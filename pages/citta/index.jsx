import Layout from "../../components/Layouts";
import style from "./CitiesArchive.module.scss";
import SimpleCard from "../../components/SimpleCard";
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch("https://sandbox.musement.com/api/v3/cities");
  const data = await res.json();

  return {
    props: {
      cities: data,
    },
  };
}

export default function CitiesArchive({ cities }) {
  console.log(cities);
  return (
    <Layout>
      <div className={style.container}>
        <main>
          {cities.map((city, id) => (
            <Link href={`/citta/${city.id}`} key={id}>
              <a>
                <SimpleCard big={false} text={city.name} image={city.cover_image_url} />
              </a>
            </Link>
          ))}
        </main>
      </div>
    </Layout>
  );
}
