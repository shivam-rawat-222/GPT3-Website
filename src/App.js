import React from 'react'
// import { article, brand, cta, feature, navbar } from "./Components"
import Navbar from "./Components/Navbar/Navbar"
import Header from './Containers/Header/Header'
import Brand from './Components/Brand/Brand'
import Whatgpt3 from './Containers/WhatGPT3/Whatgpt3'
import Feature from './Components/Feature/Feature'
import Possibility from './Containers/Possibility/Possibility'
import Cta from './Components/Cta/Cta'
import Blog from './Containers/Blog/Blog'
import Footer from './Containers/Footer/Footer'
import "./App.css"
// import { blog, footer , header , possibility , whatgpt3 } from "./Containers"
export default function App() {
  return (
    <div className='main'>
      <div className='gradient-bg'>
      <Navbar />
      <Header/>
      </div>
      <Brand/>
      
      <Whatgpt3/>
      <Feature />
      <Possibility />
      <Cta/>
      <Blog />
      <Footer/>
    </div> 

    
  )
}


