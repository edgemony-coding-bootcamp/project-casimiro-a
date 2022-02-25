import { useState, useEffect } from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import SideMenu from "../SideMenu";
import CookiesModal from '../CookiesModal'; 
import BackToTop from "../BackToTop";

export default function Layout({ children }) {
  
  const [consent, setConsent] = useState(true);


  useEffect(()=>{
  localStorage.getItem("consent") ? setConsent(JSON.parse(localStorage.getItem("consent")))
  : localStorage.setItem("consent", false) & setConsent(false)
},[])

  function handleConsent(){
   setConsent(true)
   localStorage.setItem("consent", true)
  }
  
  //console.log(isOpen)
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