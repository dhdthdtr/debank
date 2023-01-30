import React from "react";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
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

  // useEffect(() => {
  //   localStorage.setItem('isSuccess', JSON.stringify(success))
  // }, [success])

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
              <Route path="/home" element={<Home />}></Route>
              <Route path="/randomTest" element={<RandomTest />}></Route>
              <Route path="/randomQuestion" element={<RandomQuestion />}></Route>
              <Route path="/news" element={<News />}></Route>
          </Routes>
      <Footer />
    </div>
  )
}

export default App;