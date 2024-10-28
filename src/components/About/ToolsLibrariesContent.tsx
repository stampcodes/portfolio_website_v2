import ethers from "../../assets/imgs/logo/ethers-logo.png";
import hardhat from "../../assets/imgs/logo/hardhat-logo.png";
import viem from "../../assets/imgs/logo/viem-logo.png";
import vite from "../../assets/imgs/logo/vite-logo.png";
import wagmi from "../../assets/imgs/logo/wagmi-logo.png";
import reown from "../../assets/imgs/logo/reown-logo.png";

const toolsAndLibraries = [
  { name: "Hardhat", logo: hardhat, level: 75 },
  { name: "Ethers.js", logo: ethers, level: 70 },
  { name: "Wagmi", logo: wagmi, level: 80 },
  { name: "Viem", logo: viem, level: 65 },
  { name: "Vite", logo: vite, level: 90 },
  { name: "Reown", logo: reown, level: 80 },
];

const ToolsLibrariesContent = () => {
  return (
    <div className="bg-[#a5aabf] text-[#1a1f36] p-6 max-w-sm ml-[80px] rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Tools and Libraries</h2>
      <div className="space-y-4">
        {toolsAndLibraries.map((tool, index) => (
          <div key={index} className="flex flex-col mb-3">
            <div className="flex items-center space-x-3 mb-1">
              <img
                src={tool.logo}
                alt={tool.name}
                className="w-6 h-6 rounded-md"
              />
              <span className="font-semibold text-md">{tool.name}</span>
            </div>
            <div className="w-full bg-[#4b3f72] rounded-full h-3">
              <div
                className="bg-[#00ff9d] h-3 rounded-full transition-width duration-500"
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
