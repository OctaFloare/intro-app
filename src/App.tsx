import './App.css'
import { CountContext } from './components/countContext'
import { Home } from './components/home'
import { Navbar } from './components/navbar'
import { Routes } from './components/routes'
import { useCountValue } from './hooks/useCountValues'

function App() {
  const countValue = useCountValue();

  return (
    <>
      <CountContext.Provider value={countValue}>
        <Routes />
      </CountContext.Provider>
    </>
  )
}

export default App
