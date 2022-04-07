import React from 'react'
import Box from '../../atoms/box/Box'
import BoxLightBlur from '../../molecules/BoxLightBlur'
import HomeHeroContent from '../../molecules/home/HomeHeroContent'

const HomeHero = () => {
  return (
    <Box
        paddingY='64px'
    >
        <BoxLightBlur
            backgroundRGBA='rgba(139, 17, 150, 0.39)'
            filterValue={'243px'}
            width='50%'
            height='300px'
            position={'absolute'}
            top='0'
            left='0'
        />

        <BoxLightBlur
            backgroundRGBA='rgba(106, 130, 251, 0.39)'
            filterValue={'243px'}
            width='50%'
            height='300px'
            position={'absolute'}
            top='0'
            right='0'
        />

        <HomeHeroContent
            title='Find Best NFT Collection'
        />
    </Box>
  )
}

export default HomeHero