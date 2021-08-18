import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  main {
    display: inherit;
    flex-direction: column;

    .toggle-button {
      align-self: flex-end;
    }
  }
`

export const RecentSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
  gap: 1em;
`

export const InputButton = styled.button`
  height: 2em;
  width: 6em;
  outline: none;
  transition: all 0.2s;

  cursor: pointer;

  background: ${props => props.theme.colors.secondary};
  border: 2px solid ${props => props.theme.colors.secondary};
  border-radius: 4px;

  color: white;
  font-weight: bold;
  &:hover {
    background: ${props => props.theme.colors.secondaryLight};
    border: 2px solid ${props => props.theme.colors.secondaryLight};
  }
`

export const InputUrl = styled.input`
  height: 2em;
  width: 32em;
  background: transparent;
  outline: none;
  border: 2px solid ${props => props.theme.colors.secondary};
  border-radius: 4px;
  color: ${props => props.theme.colors.text};
  padding: 0 1em 0 1em;

  &:focus {
    border: 2px solid ${props => props.theme.colors.secondaryLight};
  }
`
export const UrlInputLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
`

export const MainSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;
  position: relative;

  height: 90vh;
  width: 900px;

  border-radius: 50px;
  background: ${props => props.theme.colors.background};
  box-shadow: 20px 20px 60px ${props => props.theme.colors.shadow.primary},
    -20px -20px 60px ${props => props.theme.colors.shadow.secondary};

  .toggle-button {
    position: absolute;
    right: 50px;
    top: 70px;
  }

  canvas {
    margin: 0 1em 0 1em;
  }
`
