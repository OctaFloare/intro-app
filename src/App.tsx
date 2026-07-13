import './App.css'
import { ReactQueryProvider } from './common/reactQuery'
import { CountContext } from './components/countContext'
import { Routes } from './components/routes'
import { useCountValue } from './hooks/useCountValues'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
  const countValue = useCountValue();

  return (
    <ReactQueryProvider>
      <CountContext.Provider value={countValue}>
        <Routes />
        <ReactQueryDevtools initialIsOpen={true} />
      </CountContext.Provider>
    </ReactQueryProvider>
  )
}

export default App
