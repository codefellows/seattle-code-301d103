import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // importing the CSS from bootstrap.
import Header from './components/Header'
import Footer from './components/Footer'
import Gallery from './components/Gallery'

function App() {
  return (
    <>
    <Header />
    <Gallery />
      {/* <div>
      </div>
      <h1>Vite + React</h1> */}
      <Footer />
    </>
  )
}

export default App
