import React from 'react'
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
    </div>
  )
}

export default HomeTemplate