import css from '@styled-system/css'
import React from 'react'
import styled from 'styled-components'
import Box from '../../atoms/box/Box'
import { TextHeading, TextSpan } from '../../atoms/text/Text'
import CardNFT from '../../molecules/card/CardNFT'

const NewListings = () => {
  return (
    <Box
        paddingX='15px'
        maxWidth={'1262px'}
        mx='auto'
        mt='80px'
    >
        <Box
            textAlign={'center'}
            fontFamily='Orbitron'
            mb='40px'
        >
            <TextSpan
                color={'gray.light'}
                fontWeight={700}
                fontSize={'12px'}
            >
                Place a bid for new items
            </TextSpan>

            <TextHeading
                color={'white'}
                fontSize={['36px', '27px', '27px', '36px', '36px']}
                mt={'4px'}
                fontWeight={700}
            >
                New Listings
            </TextHeading>
        </Box>

        <ListWrap>
            <ListItem>
                <CardNFT
                    imgSrc='/images/nft-1.png'
                    user='pstar7'
                    id={19786}
                    totalEth={0.1947}
                    title='Red Gate Velvet'
                />
            </ListItem>

            <ListItem>
                <CardNFT
                    imgSrc='/images/nft-2.png'
                    user='pstar7'
                    id={19786}
                    totalEth={0.1947}
                    title='Dark Face Bloody'
                />
            </ListItem>

            <ListItem>
                <CardNFT
                    imgSrc='/images/nft-3.png'
                    user='pstar7'
                    id={19786}
                    totalEth={0.1947}
                    title='Sunshine Street Orange'
                />
            </ListItem>
        </ListWrap>
    </Box>
  )
}

const ListWrap = styled('ul')(css({
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
}))

const ListItem = styled('li')(css({
    flex: '0 1 auto',
    width: ['33.33%', '100%', '100%', '100%', '33.33%'],
    px: '15px',
    pb: '15px',
}))

export default NewListings