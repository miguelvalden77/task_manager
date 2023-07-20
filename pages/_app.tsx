import { EntriesProvider } from '@/context/entries'
import { UIContext } from '@/context/ui'
import { UIProvider } from '@/context/ui/UIProvider'
import { darkTheme, lightTheme } from '@/themes'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  return(
    <EntriesProvider>
      <UIProvider>
        <ThemeProvider theme={darkTheme} >
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UIProvider>
    </EntriesProvider>
        
  )
}
