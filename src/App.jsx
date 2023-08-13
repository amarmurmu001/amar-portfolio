import './App.css'
import About from './assets/components/about/About'
import Hero from './assets/components/hero/Hero'
import Nav from './assets/components/navbar/Nav'

function App() {

  return (
    <div className="container">
    <Nav />
    <Hero />
    <About />
    </div>
  )
}

export default App
