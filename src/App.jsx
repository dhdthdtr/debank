import React from "react";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from './Header'
import Footer from './Footer'

import './App.css';
import RandomTest from "./RandomTest";
import RandomQuestion from "./RandomQuestion";
import News from './News'
import Home from "./Home";
import axios from "axios";
import Login from "./Login";

function App(){
  const [success, setSuccess] = useState(false)
  const [name, setName] = useState("");
  let navigate = useNavigate();

  

  const handleSubmit = () => {
    setSuccess(!success)
    // set random name
    axios.get("https://randomuser.me/api/")
    .then(res => res.data.results[0])
    .then(data =>{
      console.log(data.name.first)
      setName(data.name.first)
    })

    // set local storage
    localStorage.setItem('isSuccess', JSON.stringify(success))
    localStorage.setItem("username", JSON.stringify(name))
    navigate("home")
  }

  const logout = () => {
    setSuccess(!success)
    localStorage.setItem('isSuccess', JSON.stringify(success))
    localStorage.removeItem('username')
    navigate("/")
  }

  if(!JSON.parse(localStorage.getItem('isSuccess'))){
    return (
      <Login handleLogin={handleSubmit}/>
    )
  }
  return (
    <div className="homepage">
      <Header handleLogout={logout} data={JSON.parse(localStorage.getItem("username"))}/>
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