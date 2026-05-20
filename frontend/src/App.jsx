import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Interview from './pages/Interview'
import Result from './pages/Result'

const App = () => {
  return (
    <div>

      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/interview" element={<Interview/>}/>

        <Route path="/results" element={<Result/>}/>
      </Routes>

      <Footer/>

    </div>
  )
}

export default App
