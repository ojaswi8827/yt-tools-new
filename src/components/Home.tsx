import { useState } from "react";
import { addCommas, addHashtags } from "../methods/methods";
import TextInputField from "./TextInputField";
import TextProcessedField from "./TextProcessedField";

const Home = () => {
  const [text, setText] = useState("");
  const [converted, setConverted] = useState(false);
  const [hashtagText, setHashtagText] = useState("");
  const [commaText, setCommaText] = useState("");

  const features = [
    {
      id: 0,
      name: "add_hashtags",
      text: hashtagText,
    },
    {
      id: 1,
      name: "add_commas",
      text: commaText,
    },
  ];

  const onClickConvert = () => {
    setHashtagText(addHashtags(text));
    setCommaText(addCommas(text));
    setConverted(true);
  };
  return (
    <div>
      <TextInputField text={text} setText={setText} />
      <button disabled={!text} onClick={onClickConvert}>
        Convert!
      </button>
      {converted &&
        features.map((feature) => <TextProcessedField text={feature.text} />)}
    </div>
  );
};

export default Home;
