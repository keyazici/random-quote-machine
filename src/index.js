import { Box, Container } from "@material-ui/core"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core/styles"
import React from "react"
import ReactDOM from "react-dom"
import RandomQuoteMachine from "./RandomQuoteMachine"
import "./style.css"
import theme from "./theme"

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container maxWidth="sm">
      <Box my={4}>
        <RandomQuoteMachine />
      </Box>
    </Container>
  </ThemeProvider>,
  document.querySelector("#root")
)
