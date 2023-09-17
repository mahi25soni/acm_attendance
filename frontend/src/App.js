import "./App.css";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import QrCode from "./components/QrCode";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar></Navbar>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<QrCode/>} ></Route>
      <Route path="/register" element={<LoginForm/>} ></Route>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
