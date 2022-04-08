import css from '@styled-system/css'
import React from 'react'
import styled from 'styled-components'
import { ICardRate } from '../../../utils/types'
import Box from '../../atoms/box/Box'
import Image from '../../atoms/image/Image'
import { TextHeading, TextSpan } from '../../atoms/text/Text'

const CardRate : React.FC<ICardRate> = ({
    iconSrc,
    textRate,
    priceRate,
    totalChange,
    isUp,
}) => {
  return (
    <Box
        display={'flex'}
        flexDirection={'row'}
        flexWrap={'nowrap'}
        alignItems='center'
        padding={'6px'}
    >
        <Box paddingRight={12} display={['block', 'none', 'none', 'block', 'block']}>
            <Image src={iconSrc} width={'60px'}></Image>
        </Box>

        <Box>
            <TextSpan color={'gray.light'} fontSize={12} fontWeight={700} style={{ display: 'block' }}>
                {textRate}
            </TextSpan>

            <TextHeading
                color={'white'}
                fontSize={['24px', '14px', '16px', '16px', '24px']}
                marginTop={'6px'}
            >
                {priceRate}
            </TextHeading>
        </Box>

        <Box paddingLeft={'15px'}>
            {!isUp && (<RateDown>
                {totalChange}
            </RateDown>)}
            {isUp && (<RateUp>
                {totalChange}
            </RateUp>)}
        </Box>
    </Box>
  )
}

const RateDown = styled('span')(
    css({
        color: 'red.primary',
        padding: '8px 12px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'red.primary',
        borderRadius: '20px',
        fontSize: '12px'
    })
)

const RateUp = styled('span')(
    css({
        color: 'green.primary',
        padding: '8px 12px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'green.primary',
        borderRadius: '20px',
        fontSize: '12px'
    })
)

export default CardRate