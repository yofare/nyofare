import Header from '../components/Header'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <div className="bg-white p-0 h-screen">
      <Header />
        <Component {...pageProps} />
      <Footer />
    </div>
    </>
  )
}

export default MyApp
