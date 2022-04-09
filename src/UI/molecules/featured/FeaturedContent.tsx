import React from 'react'
import Box from '../../atoms/box/Box'
import Button from '../../atoms/controls/Button'
import CountdownCustom from '../../atoms/controls/CountdownCustom'
import Image from '../../atoms/image/Image'
import { TextHeading, TextSpan } from '../../atoms/text/Text'

const FeaturedContent = () => {
  return (
    <Box
        flex={'1 1 auto'}
        paddingLeft={['0', '0', '0', '80px', '80px']}
        paddingTop={['0', '50px', '50px', '0', '0']}
    >
        {/* heading title */}
        <Box
            marginBottom={'25px'}
        >
            <TextSpan
                color={'gray.light'}
                fontWeight={700}
                fontSize={'12px'}
            >
                Featured items for you
            </TextSpan>

            <TextHeading
                color={'white'}
                fontSize={['36px', '21px', '27px', '36px', '36px']}
                mt={'4px'}
                fontWeight={700}
            >
                Red Violet Velvet
            </TextHeading>
        </Box>

        {/* creator detail */}
        <Box
            display={'flex'}
            flexDirection={'row'}
            flexWrap='nowrap'
            alignItems={'center'}
            mb={'25px'}
        >
            <Box
                flex={'0 1 auto'}
                paddingRight={'12px'}
            >
                <Image
                    src='/images/creator-photo-1.png'
                    width={'58px'}
                />
            </Box>

            <Box
                flex={'1 1 auto'}
            >
                <TextSpan
                    color={'gray.light'}
                    fontWeight={700}
                    fontSize={'12px'}
                >
                    creator
                </TextSpan>

                <TextHeading
                    color={'white'}
                    fontSize={'16px'}
                    fontWeight={700}
                    mt={'4px'}
                >
                    pstar7_kun
                </TextHeading>
            </Box>
        </Box>

        {/* bid detail */}
        <Box
            display={'flex'}
            flexDirection='row'
            flexWrap={'wrap'}
            mb='25px'
        >
            <Box
                flex={'0 1 auto'}
                padding='0 30px 12px 0'
            >
                <TextSpan
                    color={'gray.light'}
                    fontWeight={700}
                    fontSize={'12px'}
                >
                    current bid
                </TextSpan>

                <TextHeading
                    color={'white'}
                    fontSize={['27px', '16px', '18px', '18px', '27px']}
                    fontWeight={400}
                    mt={'4px'}
                >
                    0.948 eth
                </TextHeading>
            </Box>

            <Box>
                <TextSpan
                    color={'gray.light'}
                    fontWeight={700}
                    fontSize={'12px'}
                    mb='8px'
                    style={{ display: 'block' }}
                >
                    Auction end in
                </TextSpan>

                <CountdownCustom />
            </Box>
        </Box>

        {/* button detail */}
        <Box
            display={'flex'}
            flexDirection='row'
            flexWrap={'wrap'}
        >
            <Box
                padding={'0 12px 8px 0'}
                flex='0 1 auto'
            >
                <Button variant='primary'>bid now</Button>
            </Box>

            <Box
                padding={'0 12px 8px 0'}
                flex='0 1 auto'
            >
                <Button variant='secondary'>
                    <span className='text'>
                        <span className='text-gradient'>detail item</span>
                    </span>
                </Button>
            </Box>
        </Box>
    </Box>
  )
}

export default FeaturedContent