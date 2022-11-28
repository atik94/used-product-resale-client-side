import React from "react";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Gallery from "../Gallery/Gallery";

const Home = () => {
  return (
    <div className="mx-5 mt-5">
      <Banner></Banner>
      <Categories></Categories>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
