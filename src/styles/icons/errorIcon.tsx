import React from 'react'
import styled from 'styled-components'
import Icon from './svgBase'

const Svg = styled(Icon)`
  position: relative;

  width: 19px;
  height: 19px;

  fill: none;
  transition: 0.2s;

  path {
    stroke: ${props => props.theme.colors.error};
    stroke-width: 2;

    stroke-dasharray: 26;

    animation: animate 0.3s linear backwards;
  }

  @keyframes animate {
    0% {
      stroke-dashoffset: 26;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }
`

export const ErrorIcon = ({
  className
}: {
  className?: string
}): JSX.Element => (
  <Svg className={className}>
    <path d="M1 1L18 18" stroke="black" strokeWidth="2" />
    <path d="M18 1L1 18" stroke="black" strokeWidth="2" />
  </Svg>
)
