import css from '@styled-system/css'
import React from 'react'
import styled from 'styled-components'
import { color, ColorProps, layout, LayoutProps, space, SpaceProps, typography, TypographyProps } from 'styled-system'
import { ICardNFT } from '../../../utils/types'
import Box from '../../atoms/box/Box'
import Button from '../../atoms/controls/Button'
import Image from '../../atoms/image/Image'
import { TextHeading } from '../../atoms/text/Text'

const CardNFT : React.FC<ICardNFT> = ({
    imgSrc,
    user,
    id,
    totalEth,
    title,
    to
}) => {
  return (
    <Box
        backgroundImage={`url("${imgSrc}")`}
        backgroundRepeat='no-repeat'
        backgroundPosition={'center'}
        backgroundSize='cover'
        height={'450px'}
        width={'100%'}
        position='relative'
        fontFamily={'Orbitron'}
    >
        <Box
            background={'rgba(255, 255, 255, 0.08)'}
            style={{
                backdropFilter: 'blur(73px)'
            }}
            position='absolute'
            bottom={20}
            left={15}
            right={15}
            padding='15px'
            color='#FFF'
        >
            <ListDetail>
                {/* user */}
                <ListDetailItem>
                    <Box
                        display={'flex'}
                        flexDirection='row'
                        flexWrap={'nowrap'}
                        alignItems='center'
                    >
                        <span
                            style={{
                                display: 'block',
                                flex: '0 1 auto',
                                paddingRight: '6px'
                            }}
                        >
                            <Image src='/images/icon-user-card.svg'></Image>
                        </span>

                        <span style={{ display: 'block', flex: '0 1 auto' }}>{user}</span>
                    </Box>
                </ListDetailItem>

                {/* id */}
                <ListDetailItem>
                    <Box
                        display={'flex'}
                        flexDirection='row'
                        flexWrap={'nowrap'}
                        alignItems='center'
                    >
                        <span style={{ display: 'block', flex: '0 1 auto' }}>#{id}</span>
                    </Box>
                </ListDetailItem>

                {/* price */}
                <ListDetailItem>
                    <Box
                        display={'flex'}
                        flexDirection='row'
                        flexWrap={'nowrap'}
                        alignItems='center'
                    >
                        <span
                            style={{
                                display: 'block',
                                flex: '0 1 auto',
                                paddingRight: '6px'
                            }}
                        >
                            <Image src='/images/icon-eth-card.svg'></Image>
                        </span>

                        <span style={{ display: 'block', flex: '0 1 auto' }}>{totalEth} eth</span>
                    </Box>
                </ListDetailItem>
            </ListDetail>

            <TitleLink href='#' marginBottom={'15px'}>
                <TextHeading
                    fontSize={[16, 16, 21, 21, 21]}
                >
                    {title}
                </TextHeading>
            </TitleLink>

            <Button variant='primary' style={{ display: 'block', width: '100%' }}>bid now</Button>
        </Box>
    </Box>
  )
}

const ListDetail = styled('ul')<SpaceProps & LayoutProps & TypographyProps>(
    space,
    layout,
    typography,
    css({
        listStyle: 'none',
        color: 'white',
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center'
    })
)

const ListDetailItem = styled('li')(
    space,
    css({
        fontSize: 12,
        padding: '0 20px 8px 0'
    })
)

const TitleLink = styled('a')<SpaceProps & LayoutProps & ColorProps>(
    space,
    layout,
    color,
    css({
        color: 'white',
        textDecoration: 'none',
        display: 'block',
        textTransform: 'capitalize'
    })
)

export default CardNFT