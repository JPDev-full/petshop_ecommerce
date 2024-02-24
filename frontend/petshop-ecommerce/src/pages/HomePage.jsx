// pages/HomePage.js
import React from "react";
import { SiteHeader } from "../components/Global/SiteHeader";
import { HomeHero } from "../components/HomePage/HomeHero";
import { SiteFooter } from "../components/Global/SiteFooter";

function HomePage() {
  return (
    <div>
      <SiteHeader />
      <HomeHero />
      <SiteFooter />
    </div>
  );
}

export default HomePage;
