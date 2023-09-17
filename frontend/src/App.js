import "./App.css";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import QrCode from "./components/QrCode";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import UserState from "./context/UserState";
import Registered from "./components/Registered";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertMessage, setAlertMessage] = useState(null)

  return (
    <>
    <UserState>
    <Navbar></Navbar>
    {alertMessage && <Alert message = {alertMessage}/>}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<QrCode/>} ></Route>
      <Route path="/register" element={<LoginForm setAlertMessage={setAlertMessage}/>} ></Route>
      <Route path="/taken" element={<Registered/>} ></Route>
    </Routes>
    </BrowserRouter>
    </UserState>
    </>
  );
}

export default App;
