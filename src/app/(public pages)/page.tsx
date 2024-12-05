import React from 'react'
import HeroSec from './components/HeroSec'
import AdSec from './components/AdSec'
import UsedCars from './components/UsedCars'
import Offers from './components/Offers'
import Managed from './components/Managed'
import OldCars from './components/OldCars'
import NewCars from './components/NewCars'
import Brands from './components/Brands'
import Comparinsion from './components/Comparinsion'
import AutoParts from './components/AutoParts'
import BikeBrands from './components/BikeBrands'
import Bikes from './components/Bikes'
import NewsReviews from './components/NewsReviews'
import Download from './components/Download'


function page() {
  return (
    <div>
      <HeroSec/>
      <AdSec/>
      <UsedCars/>
      <Offers/>
      <Managed/>
      <OldCars/>
      <NewCars/>
      <Brands/>
      <Comparinsion/>
      <AutoParts/>
      <BikeBrands/>
      <Bikes/>
      <NewsReviews/>
      <Download/>
    </div>
  )
}

export default page