import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialIcons: React.FC = () => {
  return (
    <div className=" w-[250px] flex justify-center space-x-4">
      <a
        href="https://www.linkedin.com/in/andrea-fragnelli/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#00ff9d] text-[70px] transform transition duration-500 ease-in-out hover:text-[#4b3f72] hover:-translate-y-1"
      >
        <FontAwesomeIcon icon={["fab", "linkedin"]} />
      </a>
      <a
        href="https://github.com/stampcodes"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#00ff9d] text-[70px] transform transition duration-500 ease-in-out hover:text-[#4b3f72] hover:-translate-y-1"
      >
        <FontAwesomeIcon icon={["fab", "square-github"]} />
      </a>
    </div>
  );
};

export default SocialIcons;
