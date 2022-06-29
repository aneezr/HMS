import React,{useState} from "react"

import Login from "./components/Login"
import Home from "./components/Home"
import Reset from "./components/Reset"

import './App.css';


function App() {
  
const [isLoggedIn,setIsLoggedIn] = useState(0);
const [resetPass,setResetPass] = useState(0);
const [at,setAt] = useState("");

return ( isLoggedIn ? <Home at={at} user={isLoggedIn} setAt={setAt} setIsLoggedIn={setIsLoggedIn} /> 
  : resetPass ? <Reset setResetPass={setResetPass} /> 
  : <Login setAt={setAt} setResetPass={setResetPass} setIsLoggedIn={setIsLoggedIn} />)
}

export default App;
