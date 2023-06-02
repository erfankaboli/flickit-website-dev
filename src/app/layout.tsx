import './globals.css'
import FINav from './components/nav/FINav'


export const metadata = {
  title: 'Flickit',
  description: 'Assessment platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <FINav />
        {children}
      </body>
    </html>
  )
}
