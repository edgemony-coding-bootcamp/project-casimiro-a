import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import i18n from 'i18next';
import Footer from "../Footer";
import NavBar from "../NavBar";
import SideMenu from "../SideMenu";
import CookiesModal from '../CookiesModal'; 
import BackToTop from "../BackToTop";

export default function Layout({ children }) {
  
  const [consent, setConsent] = useState(true);
  const lng = useSelector((state) => state.lang);


  useEffect(()=>{
  localStorage.getItem("consent") ? setConsent(JSON.parse(localStorage.getItem("consent")))
  : localStorage.setItem("consent", false) & setConsent(false)
},[])

  function handleConsent(){
   setConsent(true)
   localStorage.setItem("consent", true)
  }

  i18n.changeLanguage(lng);

    return (
      <>
        {!consent && <CookiesModal changeShowModal={handleConsent} />} 
        <NavBar />
        <SideMenu />
        {children}
        <BackToTop/>
        <Footer />
      </>
    )
  }