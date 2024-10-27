import logo from "../../assets/imgs/logo.png";
import SocialIcons from "./SocialIcons";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-around items-center ">
      <img className="w-[200px]" src={logo} alt="logo" />
      <SocialIcons />
    </nav>
  );
};

export default Navbar;
