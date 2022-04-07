import React from 'react'
import { IHomeHeroContent } from '../../../utils/types'
import Box from '../../atoms/box/Box'
import Button from '../../atoms/controls/Button'
import Image from '../../atoms/image/Image'
import { TextHeading } from '../../atoms/text/Text'

const HomeHeroContent : React.FC<IHomeHeroContent> = ({ onClickMinted, title = 'Find Best NFT Collection' }) => {
  return (
    <Box
        maxWidth={'834px'}
        width='100%'
        padding={'0 15px'}
        margin='0 auto'
        style={{
            textAlign: 'center',
        }}
    >
        <Image
            src='/images/circle-home-hero.svg'
            maxWidth={'364px'}
            width='100%'
        />

        <Box
            marginX='auto'
            marginTop={['-200px', '-280px', '-280px', '-300px', '-330px']}
        >
            <TextHeading
                fontFamily={'Orbitron'}
                fontSize={['96px', '45px', '55px', '65px', '96px']}
                lineHeight={1.2}
                textAlign={'center'}
                fontWeight={900}
                background='radial-gradient(81.45% 1124.91% at 10.36% 50%, #FC5C7D 0%, #6A82FB 100%)'
                className='webkit-text-gradient'
                margin='0 0 20px 0'
            >
                {title}
            </TextHeading>

            <Button variant='primary' onClick={onClickMinted}>minted now</Button>
        </Box>
    </Box>
  )
}

export default HomeHeroContent