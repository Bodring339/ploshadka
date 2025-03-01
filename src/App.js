import React from "react";
import WhyUs from "./components/WhyUs";
import Clients from "./components/Clients";
import Ozer from "./components/Ozer";
import Contacts from "./components/Сontacts";
import Ccw from "./components/Ccw";
import Work from "./components/Work";
import Consult from "./components/Consult";
import Header from "./components/Header"
import Intro from "./components/Intro"


function App() {
  return (
    <div>
      <Header />
      <Intro />
      <Ccw />
      <Consult />
      <Work />
      <WhyUs />
      <Clients />
      <Ozer />
      <Contacts />
    </div>
  );
}

export default App;