import NavBar from '@/components/NavBar'
import './globals.css'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* className='max-w-screen-xl mx-auto' */}
      <body className='max-w-screen-xl mx-auto'>
        <NavBar />
        {children}

      </body>
    </html>
  )
}
