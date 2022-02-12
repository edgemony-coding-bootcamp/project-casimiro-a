
import Footer from "../Footer";
import NavBar from "../Navbar";
import SideMenu from "../SideMenu";
export default function Layout({ children }) {
    return (
      <>
        <NavBar />
        <SideMenu />
        {children}
        <Footer />
      </>
    )
  }