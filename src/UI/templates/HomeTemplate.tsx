import React from 'react'
import FeaturedItem from '../organisms/FeaturedItem'
import Footer from '../organisms/Footer'
import HomeHero from '../organisms/HomeHero'
import Navigation from '../organisms/Navigation'
import NewListings from '../organisms/NewListings'
import TopPicklist from '../organisms/TopPickList'
import TopRate from '../organisms/TopRate'

const HomeTemplate = () => {
  return (
    <div
      style={{
        overflowX: 'hidden'
      }}
    >
        <Navigation />

        <HomeHero />

        <TopPicklist />

        <TopRate />

        <FeaturedItem />

        <NewListings />

        <Footer />
    </div>
  )
}

export default HomeTemplate