import { useState } from "react";

interface ITextInputFieldProps {
  text: string;
}

const TextProcessedField = ({ text }: ITextInputFieldProps) => {
  const onClickCopy = () => {
    navigator.clipboard.writeText(text);
    setButtonText("Copied!");
  };
  const [buttonText, setButtonText] = useState("Copy!");
  return (
    <div className="text-processed">
      <textarea className="text-processed-text" value={text} disabled={true} />
      <br />
      <button className="btn-copy" onClick={onClickCopy}>
        {buttonText}
      </button>
    </div>
  );
};

export default TextProcessedField;
