interface ITextInputFieldProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const TextInputField = ({ text, setText }: ITextInputFieldProps) => {
  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
};

export default TextInputField;
