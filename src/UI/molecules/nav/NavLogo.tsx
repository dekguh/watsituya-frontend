import React from 'react'
import { INavLogo } from '../../../utils/types'
import Box from '../../atoms/box/Box'
import { TextHeading } from '../../atoms/text/Text'

const NavLogo : React.FC<INavLogo> = ({ text = 'Watsituya' }) => {
  return (
    <Box
        flex={['0 1 auto', '1 1 auto', '1 1 auto', '1 1 auto', '0 1 auto']}
        paddingRight='20px'
        order={['1', '1', '1', '1', '1']}
    >
        <TextHeading
            color={'red.primary'}
            fontFamily='Orbitron'
            fontSize={'24px'}
            marginTop='0'
            marginBottom='0'
        >
            {text}
        </TextHeading>
    </Box>
  )
}

export default NavLogo