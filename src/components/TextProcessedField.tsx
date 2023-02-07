interface ITextInputFieldProps {
  text: string;
}

const TextProcessedField = ({ text }: ITextInputFieldProps) => {
  const onClickCopy = () => {
    navigator.clipboard.writeText(text);
  };
  return (
    <div>
      <textarea value={text} disabled={true} />
      <button onClick={onClickCopy}>Copy</button>
    </div>
  );
};

export default TextProcessedField;
