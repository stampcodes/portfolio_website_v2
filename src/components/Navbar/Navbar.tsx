import logo from "../../assets/imgs/logo/logo.png";
import SocialIcons from "./SocialIcons";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-around items-center bg-transparent z-10">
      <img className="w-[200px]" src={logo} alt="logo" />
      <SocialIcons />
    </nav>
  );
};

export default Navbar;
