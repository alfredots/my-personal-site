import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
 /* @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Space+Grotesk:wght@700&display=swap'); */

 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 html {
   font-size: 62.5%;
 }

 html, body, #__next {
   height: 100%;
 }

 body {
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 }

`
