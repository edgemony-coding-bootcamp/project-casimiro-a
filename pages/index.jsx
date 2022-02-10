import styles from '../styles/Home.module.css'
import Hero from "../components/Hero";
import Activities from '../components/Activities';
import CitiesGrid from '../components/CitiesGrid';
import Layout from '../components/Layouts';

export default function Home() {
  return (
    <>   
      <Layout>
        <Hero />     
        <Activities />
        <CitiesGrid />
      </Layout>
    </>
  )
}