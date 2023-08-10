import { useState, useEffect } from "react";

import "./App.css";
import { Header } from "./components/Header";
import { Body } from "./components/Body";

export const tabNames = ["About", "Experience", "Contact", "Resume"];

function App() {
  const [selectedTab, setSelectedTab] = useState<number | null>(0);

  const headerProps = { selectedTab, setSelectedTab };
  const bodyProps = { selectedTab, setSelectedTab };

  return (
    <div className="App">
      <Header {...headerProps} />
      <Body {...bodyProps} />
    </div>
  );
}

export default App;
