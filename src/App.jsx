import About from "./components/About";
import Blogs from "./components/Blogs";
import Doctors from "./components/Doctors";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="doctors">
          <Doctors />
        </div>
        <div id="blog">
          <Blogs />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default App;
