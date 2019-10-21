import React from 'react';
import Navbar from "./components/Navbar/navbar";
import Header from "./components/Header/header";
import Game from "./components/Gamediv/game";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Game />
      <Footer />
    </div>
  );
}

export default App;
