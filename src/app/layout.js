import NavBar from '@/components/NavBar'
import './globals.css'
import Footer from '@/components/Footer'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* className='max-w-screen-xl mx-auto' */}
      <body className='max-w-screen-xl mx-auto'>
        <NavBar />
        {children}
        <Footer />

      </body>
    </html>
  )
}
