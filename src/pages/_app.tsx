import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div className="h-[100vh]" style={{ backgroundColor: "#9CC3D5" }}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
