import './App.css'
import { Banner } from './components/Banner'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <main className="app">
        <Banner />
      </main>
    </>
  )
}

export default App
