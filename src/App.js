import './App.css';
import React, { Suspence } from 'react'
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Landingpage from "./components/landingScreen/Landingpage"
import Rockets from "./components/rockets/Rockets"
import Launches from "./components/launches/Launches"
import History from "./components/history/History"
import RocketsInfo from "./components/rockets/Rocket_info"
import LaunchesInfo from "./components/launches/Launches_info"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Landingpage />} />
        <Route path="/history" element={<History />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/launches" element={<Launches />} />
        <Route path="/rockets/info/:id" element={<RocketsInfo />} />
        <Route path="/launches/info/:id" element={<LaunchesInfo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
