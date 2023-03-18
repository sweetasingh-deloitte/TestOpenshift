import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Login from "./Components/Forms/Login";
import PasswordRecovery from "./Components/Forms/PasswordRecovery";
import SignUp from "./Components/Forms/SignUp";
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import Verify from "./Components/Forms/Verify";
import SetPassword from "./Components/Forms/SetPassword";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="Home">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forget" element={<PasswordRecovery />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/setPass" element={<SetPassword/>}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
