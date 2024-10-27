import html from "../../assets/imgs/html-logo.png";
import js from "../../assets/imgs/js-logo.png";
import css from "../../assets/imgs/css-logo.png";
import ts from "../../assets/imgs/ts-logo.png";
import solidity from "../../assets/imgs/solidity-logo.png";

const skills = [
  { name: "HTML", logo: html, level: 87 },
  { name: "CSS", logo: css, level: 85 },
  { name: "JavaScript", logo: js, level: 80 },
  { name: "TypeScript", logo: ts, level: 75 },
  { name: "Solidity", logo: solidity, level: 80 },
];

const HardSkillsContent = () => {
  return (
    <div className="bg-[#a5aabf] text-[#1a1f36] p-10 max-w-md ml-[100px] rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-8">Hard Skills</h2>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col mb-4">
            <div className="flex items-center space-x-4 mb-2">
              <img src={skill.logo} alt={skill.name} className="w-8 h-8" />
              <span className="font-semibold text-lg">{skill.name}</span>
            </div>
            <div className="w-full bg-[#4b3f72] rounded-full h-4">
              <div
                className="bg-[#00ff9d] h-4 rounded-full transition-width duration-500"
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
