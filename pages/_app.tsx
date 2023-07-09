import { UIContext } from '@/context/ui'
import { UIProvider } from '@/context/ui/UIProvider'
import { lightTheme } from '@/themes'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  return(
    <UIProvider>
      <ThemeProvider theme={lightTheme} >
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
        
  )
}
