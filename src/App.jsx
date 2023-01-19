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


function App(){
  const [success, setSuccess] = useState(false)
  let navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('isSuccess', JSON.stringify(success))
  }, [success])

  const handleSubmit = async () => {
    setSuccess(true)
    navigate("home")
  }

  const logout = () => {
    setSuccess(false)
    navigate("/")
  }

  return (
    <>
      {success ? 
        (<div className="homepage">
            <Header handleLogout={logout}/>
                <Routes>
                    <Route path="/home" element={<h2>Home</h2>}></Route>
                    <Route path="/randomTest" element={<RandomTest />}></Route>
                    <Route path="/randomQuestion" element={<RandomQuestion />}></Route>
                    <Route path="/news" element={<News />}></Route>
                </Routes>
            <Footer />
            
          </div>
        ) : (<Button size="lg" onClick={handleSubmit}>Login</Button>)
      }
    </>
  ) ;
}

export default App;