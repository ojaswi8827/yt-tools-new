import { useState } from "react";

interface ITextInputFieldProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  onClickConvert: () => void;
}

const TextInputField = ({
  text,
  setText,
  onClickConvert,
}: ITextInputFieldProps) => {
  const onClickCopy = () => {
    navigator.clipboard.writeText(text);
    setButtonText("Copied!");
  };
  const [buttonText, setButtonText] = useState("Copy!");
  return (
    <div className="text-input">
      <textarea
        placeholder="Enter Text to Process"
        className="text-input-text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button className="btn-convert" disabled={!text} onClick={onClickConvert}>
        Convert!
      </button>
      <button
        className="btn-copy btn-copy-input"
        disabled={!text}
        onClick={onClickCopy}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default TextInputField;
