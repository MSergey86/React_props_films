import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Stars from './components/Stars.tsx'

function App() {
  return (
    <>
      <Stars count = {5} />
    </>
  )
}

export default App
