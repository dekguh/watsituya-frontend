import React, { HTMLProps } from 'react'
import styled from 'styled-components'
import {
    background,
    BackgroundProps,
    color,
    ColorProps,
    space,
    SpaceProps,
    typography,
    TypographyProps,
    variant
} from 'styled-system'
import { IButton } from '../../../utils/types'

const Button = styled('button')<IButton & SpaceProps & ColorProps & BackgroundProps & TypographyProps & HTMLProps<HTMLButtonElement>>(
    space,
    color,
    background,
    typography,
    variant(
        {
            scale: 'buttonStyles'
        }
    )
)

export default Button