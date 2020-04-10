import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList.js/TourList";
import Introduction from "./components/Introduction/Introduction";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <TourList />
      <Footer />
    </div>
  );
}

export default App;
