import React from 'react'
import Box from '../../atoms/box/Box'
import Image from '../../atoms/image/Image'
import CardNFT from '../../molecules/card/CardNFT'

const TopPicklist = () => {
  return (
    <Box
        paddingX='15px'
        display={'flex'}
        flexDirection='row'
        flexWrap={'nowrap'}
        paddingY='30px'
    >
        {/* item */}
        <Box
            maxWidth='23%'
            width='100%'
            flex={'0 1 auto'}
            display={['block', 'none', 'none', 'none', 'block']}
        >
            <CardNFT
                imgSrc='/images/nft-1.png'
                user='pstar7'
                id={19786}
                totalEth={0.1947}
                title='Red Gate Velvet'
            />
        </Box>

        {/* item */}
        <Box
            maxWidth='23%'
            width='100%'
            flex={'0 1 auto'}
            margin={['40px 0 0 -100px']}
            position='relative'
            zIndex={4}
            display={['block', 'none', 'none', 'none', 'block']}
        >
            <CardNFT
                imgSrc='/images/nft-2.png'
                user='pstar7'
                id={19786}
                totalEth={0.1947}
                title='Dark Face Bloody'
            />
        </Box>

        {/* arrow */}
        <Box
            flex={'1 1 auto'}
            textAlign='center'
            paddingTop={'40px'}
        >
            <Image src='/images/arrow-top-pick.svg'></Image>
        </Box>

        {/* item */}
        <Box
            maxWidth='23%'
            width='100%'
            flex={'0 1 auto'}
            margin={['40px -100px 0 0']}
            position='relative'
            zIndex={4}
            display={['block', 'none', 'none', 'none', 'block']}
        >
            <CardNFT
                imgSrc='/images/nft-3.png'
                user='pstar7'
                id={19786}
                totalEth={0.1947}
                title='Sunshine Street Orange'
            />
        </Box>

        {/* item */}
        <Box
            maxWidth='23%'
            width='100%'
            flex={'0 1 auto'}
            display={['block', 'none', 'none', 'none', 'block']}
        >
            <CardNFT
                imgSrc='/images/nft-4.png'
                user='pstar7'
                id={19786}
                totalEth={0.1947}
                title='The Chinese Street'
            />
        </Box>
    </Box>
  )
}

export default TopPicklist