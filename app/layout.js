import "../app/global.css"
import { Raleway } from 'next/font/google'
import { AppProvider } from '../app/contexts/AppContext'

const raleway = Raleway({subsets:["latin"]})


export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className={raleway.className}>
          <AppProvider>
          {children}

          </AppProvider>
          </body>
      </html>
    )
  }