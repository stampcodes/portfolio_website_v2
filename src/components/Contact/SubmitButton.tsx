import colorLoading from "../../assets/imgs/colorLoading.gif";

interface SubmitButtonProps {
  isLoading: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isLoading }) => (
  <button type="submit" className="customButton" disabled={isLoading}>
    {isLoading ? (
      <img
        src={colorLoading}
        alt="Loading"
        className="w-6 h-6 mx-auto rounded-lg"
      />
    ) : (
      "Submit"
    )}
  </button>
);

export default SubmitButton;
