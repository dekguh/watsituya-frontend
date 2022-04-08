import React from 'react'
import Box from '../../atoms/box/Box'
import BoxLightBlur from '../../molecules/BoxLightBlur'
import CardRate from '../../molecules/card/CardRate'

const TopRate = () => {
  return (
    <Box
        paddingX='15px'
        position={'relative'}
        zIndex={9}
    >
        <BoxLightBlur
            backgroundRGBA='rgba(61, 250, 57, 0.39)'
            filterValue={'180px'}
            width='50%'
            height='200px'
            position={'absolute'}
            top='0'
            left='0'
        />

        <BoxLightBlur
            backgroundRGBA='rgba(251, 245, 106, 0.39)'
            filterValue={'180px'}
            width='50%'
            height='200px'
            position={'absolute'}
            top='0'
            right='0'
        />

        <Box
            style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(202px)'
            }}
            width='100%'
            maxWidth={'1262px'}
            marginX='auto'
            padding={['40px 70px', '30px 30px', '30px', '30px', '40px 50px']}
            fontFamily='Orbitron'
            marginTop={70}
            display='flex'
            flexDirection={['row', 'column', 'row', 'row', 'row']}
            alignItems='center'
            justifyContent={'center'}
        >
            {/* rate */}
            <Box
                flex={['0 1 auto']}
                width={['33.33%', '100%', '100%', 'auto', 'auto']}
                paddingX='10px'
            >
                <CardRate
                    iconSrc={'/images/icon-btc-rate.svg'}
                    textRate='Bitcoin/USD'
                    priceRate={'$12,000.00'}
                    totalChange='-20%'
                    isUp={false}
                />
            </Box>

            {/* rate */}
            <Box
                flex={['0 1 auto']}
                width={['33.33%', '100%', '100%', 'auto', 'auto']}
                paddingX='10px'
            >
                <CardRate
                    iconSrc={'/images/icon-eth-rate.svg'}
                    textRate='ETH/USD'
                    priceRate={'$2,543.00'}
                    totalChange='7%'
                    isUp={true}
                />
            </Box>

            {/* rate */}
            <Box
                flex={['0 1 auto']}
                width={['33.33%', '100%', '100%', 'auto', 'auto']}
                paddingX='10px'
            >
                <CardRate
                    iconSrc={'/images/icon-yearn-rate.svg'}
                    textRate='Yearn/USD'
                    priceRate={'$7,543.00'}
                    totalChange='4%'
                    isUp={true}
                />
            </Box>
        </Box>
    </Box>
  )
}

export default TopRate