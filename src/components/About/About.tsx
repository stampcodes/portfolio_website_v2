import { useState } from "react";
import OverviewContent from "./OverviewContent";
import HardSkillsContent from "./HardSkillsContent";
import ToolsLibrariesContent from "./ToolsLibrariesContent";

const About = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="bg-[url('./assets/imgs/bg/bg-mobile.png')] lg:bg-[url('./assets/imgs/bg/bg-about.png')] bg-boiler flex flex-col items-center px-4 sm:px-8 bg-scroll lg:bg-fixed">
      <h2 className="text-4xl sm:text-3xl md:text-5xl lg:text-6xl font-bold pt-[150px]">
        About me
      </h2>
      <div className="flex flex-col sm:flex-col lg:flex-row items-center justify-center lg:space-x-[100px] w-full max-w-[700px] ">
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
      <div className="w-full max-w-[500px] pt-6 sm:p-8 lg:p-12">
        {activeTab === "Overview" && <OverviewContent />}
        {activeTab === "Hard Skills" && <HardSkillsContent />}
        {activeTab === "Tools & Libraries" && <ToolsLibrariesContent />}
      </div>
    </div>
  );
};

export default About;
