import React from 'react'
import Button from '../atoms/controls/Button'
import HomeHero from '../organisms/HomeHero'
import Navigation from '../organisms/Navigation'
import TopPicklist from '../organisms/TopPickList'

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
    </div>
  )
}

export default HomeTemplate