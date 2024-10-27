import ethers from "../../assets/imgs/ethers-logo.png";
import hardhat from "../../assets/imgs/hardhat-logo.png";
import viem from "../../assets/imgs/viem-logo.png";
import vite from "../../assets/imgs/vite-logo.png";
import wagmi from "../../assets/imgs/wagmi-logo.png";

const toolsAndLibraries = [
  { name: "Hardhat", logo: hardhat, level: 75 },
  { name: "Ethers.js", logo: ethers, level: 70 },
  { name: "Wagmi", logo: wagmi, level: 80 },
  { name: "Viem", logo: viem, level: 65 },
  { name: "Vite", logo: vite, level: 90 },
];

const ToolsLibrariesContent = () => {
  return (
    <div className="bg-[#a5aabf] text-[#1a1f36] p-10 max-w-md ml-[100px] rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-8">Tools and Libraries</h2>
      <div className="space-y-6">
        {toolsAndLibraries.map((tool, index) => (
          <div key={index} className="flex flex-col mb-4">
            <div className="flex items-center space-x-4 mb-2">
              <img
                src={tool.logo}
                alt={tool.name}
                className="w-8 h-8 rounded-md"
              />
              <span className="font-semibold text-lg">{tool.name}</span>
            </div>
            <div className="w-full bg-[#4b3f72] rounded-full h-4">
              <div
                className="bg-[#00ff9d] h-4 rounded-full transition-width duration-500"
                style={{ width: `${tool.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsLibrariesContent;