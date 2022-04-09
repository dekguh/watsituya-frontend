import React from 'react'
import FeaturedItem from '../organisms/FeaturedItem'
import HomeHero from '../organisms/HomeHero'
import Navigation from '../organisms/Navigation'
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
    </div>
  )
}

export default HomeTemplate