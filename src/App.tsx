import React from 'react'
import Process from './components'
import './App.css'

interface IProcess {
    id: string
    description: string
    name: string
}

// const Process: IProcess = {}

function App() {
  return (
    <div className="App">
      <Process />
    </div>
  )
}

export default App
