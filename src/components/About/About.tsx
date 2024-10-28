import { useState } from "react";
import OverviewContent from "./OverviewContent";
import HardSkillsContent from "./HardSkillsContent";
import ToolsLibrariesContent from "./ToolsLibrariesContent";

const About = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className=" bg-about bg-boiler">
      <h2 className="title">About me</h2>
      <div className="flex items-center justify-around space-x-8 ml-[100px] mt-10 max-w-[700px] ">
        <button
          className={`tab-links ${
            activeTab === "Overview" ? "active-link" : ""
          }`}
          onClick={() => setActiveTab("Overview")}
        >
          Overview
        </button>
        <button
          className={`tab-links ${
            activeTab === "Hard Skills" ? "active-link" : ""
          }`}
          onClick={() => setActiveTab("Hard Skills")}
        >
          Hard Skills
        </button>
        <button
          className={`tab-links ${
            activeTab === "Tools & Libraries" ? "active-link" : ""
          }`}
          onClick={() => setActiveTab("Tools & Libraries")}
        >
          Tools & Libraries
        </button>
      </div>
      <div className="mt-8 ml-[100px]">
        {activeTab === "Overview" && <OverviewContent />}
        {activeTab === "Hard Skills" && <HardSkillsContent />}
        {activeTab === "Tools & Libraries" && <ToolsLibrariesContent />}
      </div>
    </div>
  );
};

export default About;
