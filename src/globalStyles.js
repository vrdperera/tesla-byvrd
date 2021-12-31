import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*, *:before, *:after{
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}

html{
  box-sizing: border-box;

  font-size: 62.5%

  }

body {
  font-family: 'Raleway', sans-serif;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`;

export default GlobalStyle;
