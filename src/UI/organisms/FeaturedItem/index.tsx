import React from 'react'
import Box from '../../atoms/box/Box'
import FeaturedContent from '../../molecules/featured/FeaturedContent'
import FeaturedImage from '../../molecules/featured/FeaturedImage'

const FeaturedItem = () => {
  return (
    <Box
        marginTop={'70px'}
        marginX='auto'
        paddingX={'15px'}
        maxWidth='1262px'
        position={'relative'}
        zIndex={9}
        fontFamily='Orbitron'
    >
        <Box
            display={'flex'}
            flexDirection={['row', 'column', 'column', 'row', 'row']}
        >
            <FeaturedImage />

            <FeaturedContent />
        </Box>
    </Box>
  )
}

export default FeaturedItem