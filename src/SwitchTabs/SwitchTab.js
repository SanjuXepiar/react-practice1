import React from "react";
import "./SwitchTab.css";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import { useState } from "react";
const SwitchTab = () => {
  const [tab, setTab] = useState("Tab1");
  const handleTab = (type) => {
    setTab(type);
  };
  return (
    <div className="tabsContainer">
      <h1>Switch-Tabs</h1>
      <div className="tabs">
        <button
          style={{ background: tab === "tab1" && "red", cursor: "pointer" }}
          onClick={() => handleTab("tab1")}
        >
          Tab1
        </button>
        <button
          style={{ background: tab === "tab2" && "green", cursor: "pointer" }}
          onClick={() => handleTab("tab2")}
        >
          Tab2
        </button>
        <button
          style={{ background: tab === "tab3" && "blue", cursor: "pointer" }}
          onClick={() => handleTab("tab3")}
        >
          Tab3
        </button>
      </div>
      <div className="twitterToast">
        {tab === "tab1" && <Tab1 />}
        {tab === "tab2" && <Tab2 />}
        {tab === "tab3" && <Tab3 />}
      </div>
    </div>
  );
};

export default SwitchTab;
