import React, { HTMLProps } from 'react'
import styled from 'styled-components'
import { background, BackgroundProps, color, ColorProps, display, DisplayProps, layout, LayoutProps, position, PositionProps, space, SpaceProps } from 'styled-system'

const BoxLightBlur = styled('div')<LayoutProps & BackgroundProps & ColorProps & SpaceProps & PositionProps & DisplayProps & HTMLProps<HTMLDivElement>>(
    background,
    color,
    space,
    position,
    display,
    layout
)

export default BoxLightBlur