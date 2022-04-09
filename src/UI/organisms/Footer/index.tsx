import React from 'react'
import Box from '../../atoms/box/Box'
import { TextSpan } from '../../atoms/text/Text'

const Footer = () => {
  return (
    <Box
        maxWidth={'1262px'}
        width='100%'
        mx={'auto'}
        mt='70px'
        mb='20px'
    >
        <Box
            style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(202px)'
            }}
            padding='20px 30px'
            fontFamily={'Orbitron'}
            textAlign='center'
        >
            <TextSpan
                color={'gray.light'}
                fontSize='12px'
                fontWeight={700}
            >
                copyright 2022 - design by dekguh
            </TextSpan>
        </Box>
    </Box>
  )
}

export default Footer