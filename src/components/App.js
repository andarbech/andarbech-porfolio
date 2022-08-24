import React from "react";
import About from "./pages/About/About";
import HeaderComponent from "./organism/Header";
import NavigationComponent from "./pages/Navigation";
import Experience from "./pages/Experience";
// import Services from "./pages/Services";
// import Porfolio from "./pages/Porfolio";
// import Testimonials from "./pages/Testimonials";
import Footer from "./organism/Footer";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
      <div className="container">
        <HeaderComponent />
        <NavigationComponent />
        <About />
        <Experience />
        {/* <Services /> */}
        {/* <Porfolio /> */}
        {/* <Testimonials /> */}
        <Contact />
      </div>
      <Footer />
    </div>
  );
};
export default App;
