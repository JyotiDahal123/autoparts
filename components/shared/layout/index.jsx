import Footer from "./footer";
import Navbar from "./navbar";
import Searchbar from "./searchbar";
import Topbar from "./topbar";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Topbar />
        <Searchbar />
        <Navbar />
      </header>
      <section>{children}</section>
      <Footer />
    </>
  );
};

export default Layout;
