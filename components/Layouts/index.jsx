import { useState, useEffect } from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import SideMenu from "../SideMenu";
import CookiesModal from '../CookiesModal'; 


export default function Layout({ children }) {

    const [cookies, setCookies] = useState(true);

    useEffect(() => {
      window.addEventListener("load", () => setCookies(false));
    }, []);

    return (
      <>
        {cookies ? null :  <CookiesModal changeShowModal={() => setCookies(true)}/>} 
        <NavBar />
        <SideMenu />
        {children}
        <Footer />
      </>
    )
  }