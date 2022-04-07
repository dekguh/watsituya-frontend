import React from 'react'
import Button from '../atoms/controls/Button'
import HomeHero from '../organisms/HomeHero'
import Navigation from '../organisms/Navigation'

const HomeTemplate = () => {
  return (
    <div
      style={{
        overflowX: 'hidden'
      }}
    >
        <Navigation />

        <HomeHero />
    </div>
  )
}

export default HomeTemplate