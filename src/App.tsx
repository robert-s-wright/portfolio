import { useState, useRef, useEffect } from "react";

import "./App.css";
import { Header } from "./components/Header";
import { Body } from "./components/Body";

export const tabNames = ["About", "Experience", "Contact", "Resume"];

function App() {
  const [selectedTab, setSelectedTab] = useState<number | null>(0);

  const headerRef = useRef<HTMLDivElement | null>(null);

  const headerProps = { selectedTab, setSelectedTab };
  const bodyProps = { selectedTab, setSelectedTab, headerRef };

  return (
    <div className="App">
      <Header
        {...headerProps}
        ref={headerRef}
      />
      <Body {...bodyProps} />
    </div>
  );
}

export default App;
