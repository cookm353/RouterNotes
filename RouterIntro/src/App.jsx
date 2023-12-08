import React from "react"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Home from "./Home"
import Eat from "./Eat"
import Drink from "./Drink"
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/eat">Eat</Link>
        <Link to="/drink">Drink</Link>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/eat' element={<Eat/>} />
          <Route exact path='/drink' element={<Drink/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
