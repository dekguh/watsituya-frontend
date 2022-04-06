import { useWindowWidth } from '@react-hook/window-size'
import React, { HTMLProps } from 'react'
import styled, { css } from 'styled-components'
import { background, BackgroundProps, border, BorderProps, color, ColorProps, display, DisplayProps, flexbox, FlexboxProps, layout, LayoutProps, position, PositionProps, space, SpaceProps, typography, TypographyProps } from 'styled-system'
import { INavList } from '../../../utils/types'
import Box from '../../atoms/box/Box'
import { TextSpan } from '../../atoms/text/Text'

const NavList : React.FC<INavList> = ({ listMenu, isOpen }) => {
    const windowWidth = useWindowWidth()

    return (
        <Box
            flex={['1 1 auto']}
            order={['3', '3', '3', '2', '2']}
            width={['auto', '100%', '100%', 'auto', 'auto']}
            position='relative'
        >
            <Nav
                display={windowWidth >= 992 ? 'flex' : isOpen ? 'flex' : 'none'}
                justifyContent='center'
                alignItems={['center', 'start', 'start', 'center', 'center']}
                flexDirection={['row', 'column', 'column', 'row', 'row']}
                background={['none', 'rgba(255, 255, 255, 0.15)', 'rgba(255, 255, 255, 0.15)', 'none', 'none']}
                borderRadius={[0, 6, 6, 0, 0]}
                paddingTop={[0, '25px', '25px', 0, 0]}
                position={['relative', 'absolute', 'absolute', 'relative', 'relative']}
                zIndex={999}
                top={0}
                left={0}
                right={0}
                
            >
                {listMenu.length >= 1 && listMenu.map((data, i) => (
                    <NavItem
                        paddingRight={['0', '0', '0', '30px', '30px']}
                        paddingBottom={['0', '20px', '20px', '0', '0']}
                    >
                        <NavLink href={data.to}>
                            <TextSpan>{data.title}</TextSpan>
                        </NavLink>
                    </NavItem>
                ))}
            </Nav>
        </Box>
    )
}

/**
 * Navigation list wrapper
 */
const Nav = styled('ul')<LayoutProps & FlexboxProps & DisplayProps & BackgroundProps & ColorProps & BorderProps & SpaceProps & PositionProps>(
    layout,
    flexbox,
    display,
    background,
    color,
    border,
    space,
    position
)

/**
 * Nav Item of navigation
 */
const NavItem = styled('li')<LayoutProps & FlexboxProps & DisplayProps & TypographyProps & SpaceProps>(
    layout,
    flexbox,
    display,
    typography,
    space,
    css({
        listStyle: 'none',
        fontFamily: 'Orbitron',
        color: 'white',
        fontSize: '14px',
        '&:last-child': {
            paddingRight: '0'
        }
    })
)

/**
 * Nav Link of navigation
 */
const NavLink = styled('a')<TypographyProps & ColorProps & HTMLProps<HTMLAnchorElement>>(
    {
        textDecoration: 'none',
        color: 'white',
        transition: '0.5s'
    },
    color,
    typography
)

export default NavList