import React from 'react'
import styled from 'styled-components'
import Icon from './svgBase'

const Svg = styled(Icon)`
  position: relative;

  width: 30px;
  height: 30px;

  animation: rotate 2s linear infinite;

  circle {
    width: 100%;
    height: 100%;
    fill: none;
    stroke-width: 2;
    stroke: ${props => props.theme.colors.secondary};
    stroke-linecap: round;
    transform: translate(5px, 5px);

    stroke-dasharray: 61;
    stroke-dashoffset: 61;

    animation: animate 4s linear infinite;
  }

  @keyframes animate {
    0% {
      stroke-dashoffset: 61;
    }
    50% {
      stroke-dashoffset: 0;
    }
    50.1% {
      stroke-dashoffset: 122;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const LoadingIcon = ({ className }: { className?: string }): JSX.Element => (
  <Svg className={className}>
    <circle cx="10" cy="10" r="10"></circle>
  </Svg>
)
