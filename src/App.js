import React from "react";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers";
// eslint-disable-next-line
import { Article, Brand, CTA, Feature, Navbar } from "./components";
import './App.css'
// import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <div className="App">
      
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
