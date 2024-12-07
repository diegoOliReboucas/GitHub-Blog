import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./themes/default"
import { GlobalStyle } from "./themes/Global"
import { Router } from "./Router"
import { BrowserRouter } from "react-router-dom"
import { APIProvider } from "./contexts/APIContext"

function App() {

  return (
   <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
      <APIProvider>
        <GlobalStyle />
        <Router />
      </APIProvider>
    </BrowserRouter>
   </ThemeProvider>
  )
}

export default App
