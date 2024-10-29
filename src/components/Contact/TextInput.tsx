interface TextInputProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  name,
  placeholder,
  value,
  onChange,
}) => (
  <input
    type="text"
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="p-3 bg-[#2e334d] rounded focus:outline-none focus:ring-2 focus:ring-[#00ff9d] placeholder:text-[#7a8299]"
  />
);

export default TextInput;
