interface TextAreaProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  placeholder,
  value,
  onChange,
}) => (
  <textarea
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="p-3 bg-[#2e334d] rounded h-32 focus:outline-none focus:ring-2 focus:ring-[#00ff9d] placeholder:text-[#7a8299]"
  />
);

export default TextArea;
