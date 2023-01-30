import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from './Header'
import Footer from './Footer'

import './App.css';
import RandomTest from "./RandomTest";
import RandomQuestion from "./RandomQuestion";
import News from './News'
import Home from "./Home";


function App(){
  const [success, setSuccess] = useState(false)
  let navigate = useNavigate();

  const handleSubmit = async () => {
    setSuccess(!success)
    localStorage.setItem('isSuccess', JSON.stringify(success))
    navigate("home")
  }

  const logout = () => {
    setSuccess(!success)
    localStorage.setItem('isSuccess', JSON.stringify(success))
    navigate("/")
  }

  if(!JSON.parse(localStorage.getItem('isSuccess'))){
    return (
      <Button size="lg" onClick={handleSubmit}>Login</Button>
    )
  }
  return (
    <div className="homepage">
      <Header handleLogout={logout}/>
          <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/home" element={<Home />}></Route>
              <Route exact path="/randomTest" element={<RandomTest />}></Route>
              <Route exact path="/randomQuestion" element={<RandomQuestion />}></Route>
              <Route exact path="/news" element={<News />}></Route>
          </Routes>
      <Footer />
    </div>
  )
}

export default App;