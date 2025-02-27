import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

function Home() {
    const navi = useNavigate();
  return (
    <div>
      <h1>Order System Home</h1> 
    </div>
  )
}

export default Home;