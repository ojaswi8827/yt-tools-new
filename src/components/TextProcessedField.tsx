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
      <div className="btn-copy-length-wrapper">
        <div className="btn-copy-wrapper">
          <button className="btn-copy" onClick={onClickCopy}>
            {buttonText}
          </button>
        </div>
        <div className="char-length-wrapper">
          <p className="char-length">Length: {text.length}</p>
        </div>
      </div>
    </div>
  );
};

export default TextProcessedField;
