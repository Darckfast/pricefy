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

export const ToggleLabel = styled.label`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 1em;

  input {
    display: none;
  }

  input:checked + svg {
    fill: #0ec63c;
  }

  svg {
    cursor: pointer;
    margin-left: 1em;
    transition: 0.2s;

    circle {
      transition: 0.2s;
    }
  }
`
