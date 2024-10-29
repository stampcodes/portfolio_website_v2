import logo from "../../assets/imgs/logo/logo.png";
import SocialIcons from "./SocialIcons";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center bg-[#1a1f36] md:bg-transparent items-center z-10 p-4 lg:justify-around">
      <a href="https://andreafragnelli.vercel.app/" rel="noopener noreferrer">
        <img className="pointer w-[200px] p-2" src={logo} alt="logo" />
      </a>
      <SocialIcons />
    </nav>
  );
};

export default Navbar;
