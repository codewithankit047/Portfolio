import React from 'react'
import Header from './components/Header/Header'
import './App.css'
import { Home } from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'


const App = () => {
  return (
    <>
    <Header/>
   
    <main className="main">
    <Home/>
    <About/>
    <Skills/>
    </main>
    </>
  )
}

export default App

