import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

p,
  h1,
  h2,
  h3,
  ul,
  li,
  a{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none

  }

  
  ul,
  section{
    display: flex;
  }

`