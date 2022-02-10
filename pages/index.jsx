import styles from '../styles/Home.module.css'
import Hero from "../components/Hero";
import Activities from '../components/Activities';
import Cities from '../components/Cities';
import Layout from '../components/Layouts';

export default function Home() {
  return (
    <>   
      <Layout>
        <Hero />     
        <Activities />
        <Cities />
      </Layout>
    </>
  )
}