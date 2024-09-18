import Nav from "../components/Nav";
import About from "../components/About";
import Specials from "../components/Specials";
import Footer from "../components/Footer";


function HomePage(){
    return(
        <>
          <Nav/>
          <main>
            <About/>
            <Specials/>
          </main>
          <Footer/>
        </>
    );
}

export default HomePage;