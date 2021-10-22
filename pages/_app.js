import { ChakraProvider, extendTheme } from "@chakra-ui/react"

import "@fontsource/crimson-text/700.css"
import "@fontsource/work-sans/400.css"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "gray.200",
        color: "white",
      },
      // styles for the `a`
      a: {
        color: "teal.500",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
  fonts: {
    body: "Work Sans, sans-serif",
    heading: "Crimson Text, serif"
  },

})




function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp