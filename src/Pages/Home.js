import React from "react";
import Navbar from "../Components/SharedLayout/Header/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import Contactus from "../Components/Contactus";
import Reviews from "../Components/Reviews";

import Footer from "../Components/SharedLayout/Footer/Footer";
import Featured from "../Components/Featured";
import NewsSection from "../Components/NewsSection";
import Leaders from "../Components/Leaders";

function Home() {
  return (
    <div className="home-section">
      {/* <header>
        <Navbar />
      </header> */}

      <main>
        <Hero />       
        <NewsSection/>      
        <About /> 
        <Leaders />   
        <Featured />
        <Contactus />
           
       

      </main>


    </div>
  );
}

export default Home;
