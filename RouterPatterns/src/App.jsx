import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Food from "./Food"
import './App.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Link to={"/"}>Home</Link><br/>
        <Link to={"/food/bagel"}>Bagel</Link><br/>
        <Link to={"/food/sushi"}>Sushi</Link><br/>
        <Routes>
          <Route exact path="/food/:name" element={<Food/>}/>
          <Route exact path="/" />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
