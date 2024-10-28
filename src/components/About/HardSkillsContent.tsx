import html from "../../assets/imgs/logo/html-logo.png";
import js from "../../assets/imgs/logo/js-logo.png";
import css from "../../assets/imgs/logo/css-logo.png";
import ts from "../../assets/imgs/logo/ts-logo.png";
import solidity from "../../assets/imgs/logo/solidity-logo.png";
import react from "../../assets/imgs/logo/react-logo.png";

const skills = [
  { name: "HTML", logo: html, level: 87 },
  { name: "CSS", logo: css, level: 85 },
  { name: "JavaScript", logo: js, level: 80 },
  { name: "TypeScript", logo: ts, level: 75 },
  { name: "React", logo: react, level: 85 },
  { name: "Solidity", logo: solidity, level: 80 },
];

const HardSkillsContent = () => {
  return (
    <div className="bg-[#a5aabf] text-[#1a1f36] p-6 max-w-sm ml-[80px] rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Hard Skills</h2>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col mb-3">
            <div className="flex items-center space-x-3 mb-1">
              <img src={skill.logo} alt={skill.name} className="w-6 h-6" />
              <span className="font-semibold text-md">{skill.name}</span>
            </div>
            <div className="w-full bg-[#4b3f72] rounded-full h-3">
              <div
                className="bg-[#00ff9d] h-3 rounded-full transition-width duration-500"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HardSkillsContent;
