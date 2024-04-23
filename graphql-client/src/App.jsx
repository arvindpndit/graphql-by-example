import React from "react";
import MainContainer from "./components/MainContainer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <MainContainer />
    </div>
  );
};

export default App;
