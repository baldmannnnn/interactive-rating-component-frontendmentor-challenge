import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle` 

:root {
  --primary-500: hsl(213, 19%, 18%); 
  --primary-700: hsl(218, 11%, 8%); 
  --accent: hsl(25, 97%, 53%); 
  --neutral-100: hsl(0,0%,100%); 
  --neutral-300: hsl(216, 12%, 63%); 
  --neutral-400: hsl(217, 12%, 54%); 
  --neutral-500: hsl(216, 12%, 63%); 
}

#root, main {
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center; 
  min-height: 100vh;
} 

 *,*::before,*::after {
   padding: 0;
  margin: 0;
  box-sizing: border-box; 
}

body {
  font-family: 'Overpass', sans-serif;
  background-color: var(--primary-700);
  font-size: 16px;
  display: flex;
  place-items: center;
  flex-direction: column;
  min-width: 20rem;
  min-height: 100vh;
}
`
