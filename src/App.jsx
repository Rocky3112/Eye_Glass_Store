import React from "react";
import EyeglassesHomePage from "./components/EyeglassesHomePage";
import Navbar from "./components/Navbar";
import EyeglassesCategories from "./components/EyeglassesCategories";
import FlashSaleSlider from "./components/FlashSaleSlider";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content w-[1330px]">
      <div className="w-full">

      <Navbar></Navbar>
      <EyeglassesHomePage />
      <EyeglassesCategories></EyeglassesCategories>
      <FlashSaleSlider></FlashSaleSlider>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
