import { useState, useEffect } from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import SideMenu from "../SideMenu";
import CookiesModal from '../CookiesModal'; 
import BackToTop from "../BackToTop";

export default function Layout({ children }) {

  const [isOpen, setIsOpen] = useState(true);

  useEffect(()=>{
    const isRead = localStorage.getItem("value");
    if (isRead){
  setIsOpen(false)
    }
  },[])
  
    return (
      <>
        {isOpen && <CookiesModal changeShowModal={()=>{ setIsOpen(false) || localStorage.setItem("value", true)}} />} 
        <NavBar />
        <SideMenu />
        {children}
        <BackToTop/>
        <Footer />
      </>
    )
  }