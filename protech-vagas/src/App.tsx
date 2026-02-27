import './App.css'
import { Button } from './components/Button'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <main className="app">
        <section className="app__section">
          <h1>Button System</h1>
          <p>Variantes no estilo shadcn, com tema via variaveis CSS.</p>
        </section>

        <section className="app__row">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </section>

        <section className="app__row">
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon" aria-label="Abrir menu">
            +
          </Button>
        </section>

        <section className="app__row app__row--stack">
          <Button fullWidth>Botao de largura total</Button>
        </section>
      </main>
    </>
  )
}

export default App
