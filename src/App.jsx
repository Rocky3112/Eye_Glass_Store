import React from "react";
import EyeglassesHomePage from "./components/EyeglassesHomePage";
import Navbar from "./components/Navbar";
import EyeglassesCategories from "./components/EyeglassesCategories";
import FlashSaleSlider from "./components/FlashSaleSlider";
import Footer from "./components/Footer";
import AllProducts from "./components/AllProducts";
import EyewearBanner from "./components/EyewearBanner";
import DiscountOffer from "./components/DiscountOffer";
// import AllProducts from "./components/FlashSaleSlider";


function App() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content lg:w-[1330px]">
      <div className="w-full">

      <Navbar></Navbar>
      {/* <EyeglassesHomePage /> */}
      <EyewearBanner></EyewearBanner>
      <EyeglassesCategories></EyeglassesCategories>
      <FlashSaleSlider></FlashSaleSlider>
      <AllProducts></AllProducts>
      <DiscountOffer></DiscountOffer>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
