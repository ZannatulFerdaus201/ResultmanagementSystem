import './globals.css'
import AuthContext from './context/AuthContext'
import ToasterContext from './context/TosterContext'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <AuthContext>
          <ToasterContext/>
        {children}
        </AuthContext>
        </body>

    </html>
  )
}
