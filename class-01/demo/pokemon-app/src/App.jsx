import './App.css'
import Header from './components/Header';

function App() {

  let name = 'Jacob';

  let upperCaseName = name.toUpperCase();

  return (
    // This is a js comment
    <div>
      <Header subTitle="Look at my Pokemon!!" /> {/* new Header() */}
      {/* <HornedBeast title={} url={} description={} /> */}
      {/* <HornedBeast /> */}
      <p>{upperCaseName}</p>
    </div>
  )
}

export default App
