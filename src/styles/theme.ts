export const darkTheme = {
  colors: {
    background: '#14121C',
    backgroundLight: '#2C2741',
    backgroundLighter: '#585176',
    text: '#e1e1e6',
    primary: '#2C2741',
    secondary: '#ba68c8',
    secondaryLight: '#e28ff1',
    success: '#17dc90',
    error: '#d21d18',
    shadow: {
      primary: '#110f18',
      secondary: '#171520'
    },
    labelBackground: '#312b3e',
    labelFont: 'white',
    labelHover: '#5b3969',
    labelActive: '#352244'
  }
}

export const lightTheme = {
  colors: {
    ...darkTheme.colors,
    background: 'white',
    backgroundLight: '#f7f7f7',
    backgroundLighter: 'white',
    text: 'black',
    shadow: {
      primary: '#d9d9d9',
      secondary: '#ffffff'
    },
    labelBackground: '#e8e8e8',
    labelFont: '#5f5f5f',
    labelHover: '#d8c3e0',
    labelActive: '#ddbdff'
  }
}
