import BackToTop from "../BackToTop";
import Footer from "../Footer";
import NavBar from "../NavBar";
import SideMenu from "../SideMenu";
export default function Layout({ children }) {
    return (
      <>
        <NavBar />
        <SideMenu />
        {children}
        <BackToTop />
        <Footer />
      </>
    )
  }