import React from "react"
import "../../App.css"
import Hero from "../HomeSection/Hero"
// import HomeAbout from "../HomeSection/HomeAbout"
import MostPopular from "../HomeSection/popular/MostPopular"
// import Header from "../header/Header";
import DestinationHome from "../HomeSection/Destina/DestinationHome"
import Works from "../HomeSection/Works/Works"
// import Gallery from "../HomeSection/gallery/Gallery"


const Home = () => {
  return (
    <>
      <Hero />
      {/* <Header/> */}
      {/* <HomeAbout /> */}
      <MostPopular />
      <DestinationHome />
      <Works />
      {/* <Gallery /> */}
    </>
  )
}

export default Home
