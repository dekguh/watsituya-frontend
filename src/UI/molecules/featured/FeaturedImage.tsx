import css from '@styled-system/css'
import React from 'react'
import styled from 'styled-components'
import { position } from 'styled-system'
import Box from '../../atoms/box/Box'
import Image from '../../atoms/image/Image'

const FeaturedImage = () => {
  return (
    <Box
        flex={['0 1 auto', '1 1 auto', '1 1 auto', '0 1 auto', '0 1 auto']}
        maxWidth={['491px', '90%', '90%', '491px', '491px']}
        width='100%'
        position={'relative'}
    >
        <Image
            src='/images/featured-image-border.svg'
            width={'100%'}
            position='absolute'
            zIndex={4}
            top={'-30px'}
            right={'-30px'}
        />

        <Image
            src='/images/nft-featured.png'
            width={'100%'}
            position='relative'
            zIndex={5}
        />

        <BlurBox />
    </Box>
  )
}

const BlurBox = styled.div(
    css({
        position: 'absolute',
        bottom: '-30px',
        left: ['-30px', '-15px', '-15px', '-15px', '-30px'],
        width: '143px',
        height: '144px',
        background: 'rgba(255, 255, 255, 0.04)',
        backdropFilter: 'blur(209px)',
        borderRadius: '21px',
        zIndex: '6',
    }),
)

export default FeaturedImage