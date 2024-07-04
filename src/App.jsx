import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navBar'
import Sec1 from './components/first-sec'
import Sec2 from './components/secon-sec'
import Sec3 from './components/Section-3'
import Sec4 from './components/Section-4'
import Sec5 from './components/Section-5'
import Sec6 from './components/Sectopn-6'
import Sec8 from './components/Section-8'
import Sec7 from './components/Section-7'
import Sec9 from './components/Section-9'
import Sec10 from './components/Section-10'
function App() {

  return (
    <div className='flex flex-col h-full w-full font-sans'>
      <Navbar />
      <Sec1/>
      <Sec2/>
      <Sec3/>
      <Sec4/>
      <Sec5/>
      <Sec6/>
      <Sec7/>
      <Sec8/>
      <Sec9/>
      <Sec10/>
    </div>
  )
}

export default App
