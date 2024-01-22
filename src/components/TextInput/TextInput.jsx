import { useState } from 'react';

const TextInput = () => {
  const [text, setText] = useState('');

  const inputText = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          e.preventDefault();
          inputText(e);
        }}
        aria-label="Text Input"
      />
      <p>Input Text: {text}</p>
    </div>
  );
};

export default TextInput;
