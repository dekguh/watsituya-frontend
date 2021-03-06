import React, { HTMLProps } from 'react'
import styled, { css } from 'styled-components'
import {
    background,
    BackgroundProps,
    color,
    ColorProps,
    display,
    DisplayProps,
    space,
    SpaceProps,
    typography,
    TypographyProps,
    variant
} from 'styled-system'
import { IButton } from '../../../utils/types'

const Button = styled('button')<IButton & SpaceProps & DisplayProps & ColorProps & BackgroundProps & TypographyProps & HTMLProps<HTMLButtonElement>>(
    space,
    color,
    background,
    typography,
    display,
    variant(
        {
            scale: 'buttonStyles'
        }
    ),
    css({
        cursor: 'pointer'
    })
)

export default Button