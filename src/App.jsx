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
  const [img, setImg] = useState("");
  let navigate = useNavigate();

  const handleSubmit = () => {
    setSuccess(!success)
    
    fetch("https://284f-2402-800-639a-c0b8-2460-1d2d-62c1-cbfb.ap.ngrok.io/api/Users?USERNAME=bang&PASSWORD=123456",
    {
      mode: 'no-cors'
  })
    .then(res => res.json())
    .then(data => console.log(data))

    // set local storage
    localStorage.setItem('isSuccess', JSON.stringify(success))
    navigate("home")
  }

  const logout = () => {
    setSuccess(!success)
    localStorage.setItem('isSuccess', JSON.stringify(success))
    localStorage.removeItem('username')
    navigate("/")
  }

  const handleRegister = (username, password, fullname, dob, email) => {
    setSuccess(!success);
    axios.post(
      "https://284f-2402-800-639a-c0b8-2460-1d2d-62c1-cbfb.ap.ngrok.io/api/Users", 
      {
        "username": username,
        "password": password,
        "fullname": fullname,
        "dob": dob,
        "email": email
      }
    )
    .then(res => console.log(res.data))
    localStorage.setItem('isSuccess', JSON.stringify(success))
    navigate("home")
  }

  if(!JSON.parse(localStorage.getItem('isSuccess'))){
    return (
      <Login handleLogin={handleSubmit} handleRegister={handleRegister}/>
    )
  }
  return (
    <div className="homepage">
      <Header handleLogout={logout} data={name} img={img}/>
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