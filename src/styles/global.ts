import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Inter, sans-serif;
  }
 main {
  max-width: 80%;
  margin: auto;
  section {
    margin-top: 30vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

 }

 .repository {
  margin-bottom: 20px;
  h1 {
    font-size: 24px;
  }
  p {
    font-size: 16px;
  }
 }
`;
