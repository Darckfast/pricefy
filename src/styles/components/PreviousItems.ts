import styled from 'styled-components'

export const RecentContainer = styled.div`
  height: 2em;
  width: 12em;
  /* background-color: #312b3e; */
  background-color: ${props => props.theme.colors.labelBackground};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6em;
  position: relative;

  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.05);
    background-color: ${props => props.theme.colors.labelHover};
  }

  &.active {
    background-color: ${props => props.theme.colors.labelActive};
  }
`

export const RecentSpan = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: ${props => props.theme.colors.labelFont};
`
export const RecentStore = styled.span`
  position: absolute;
  left: 4px;
  top: -5px;
  font-size: 10px;
  color: ${props => props.theme.colors.labelFont};
`
