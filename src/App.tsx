import React from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import RoutesComponent from "./components/RoutesComponent";

function App() {
  return (
    <div className="body">
      <Header />
      <RoutesComponent />
      <Footer />
    </div>
  );
}

export default App;
