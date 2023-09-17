import "./App.css";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import QrCode from "./components/QrCode";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import UserState from "./context/UserState";
import Registered from "./components/Registered";

function App() {
  return (
    <>
    <UserState>
    <Navbar></Navbar>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<QrCode/>} ></Route>
      <Route path="/register" element={<LoginForm/>} ></Route>
      <Route path="/taken" element={<Registered/>} ></Route>
    </Routes>
    </BrowserRouter>
    </UserState>
    </>
  );
}

export default App;
