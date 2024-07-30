import React, { useState, useRef } from "react";

function TextForm(props) {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);
  const handleUpCase = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoCase = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };

  const handleTitleCase = () => {
    let text1 = text.toLowerCase().split(" ");
    for (let i = 0; i < text1.length; i++) {
      text1[i] = text1[i].charAt(0).toUpperCase() + text1[i].slice(1);
    }
    setText(text1.join(" "));
  };

  const handlecamelCase = () => {
    let text1= text.toLowerCase().split(" ");
    for (let i = 1; i < text1.length; i++) {
        text1[i] = text1[i].charAt(0).toUpperCase() + text1[i].slice(1);
      }
    setText(text1.join(' '));
  };

  const handleRevCase = () => {
    let text1 = text.split("").reverse().join("");
    setText(text1);
  };

  const handleClearCase = () => {
    setText("");
    textareaRef.current.focus();
  };

  const handleOnChange = (evet) => {
    setText(evet.target.value);
  };
  
  

  return (
    <div>
      <div className="mb-3">
        <h3>Enter Text Below</h3>

        <textarea
          ref={textareaRef}
          className="form-control my-1"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button
          className={`my-1 mx-1 btn btn${props.outline}-success`}
          onClick={handleUpCase}
        >
          Convert to UPPERCASE
        </button>
        <button
          className={`my-1 mx-1 btn btn${props.outline}-primary`}
          onClick={handleLoCase}
        >
          Convert to lowercase
        </button>
        <button
          className={`my-1 mx-1 btn btn${props.outline}-info`}
          onClick={handleTitleCase}
        >
          Convert to TitleCase
        </button>
        <button
          className={`my-1 mx-1 btn btn${props.outline}-secondary`}
          onClick={handlecamelCase}
        >
          Convert to camelCase
        </button>
        <button
          className={`my-1 mx-1 btn btn${props.outline}-warning`}
          onClick={handleRevCase}
        >
          Reverse Text
        </button>
        <button
          className={`my-1 mx-1 btn btn${props.outline}-danger`}
          onClick={handleClearCase}
        >
          Clear Text
        </button>

        <h3>Your Text Summary</h3>
        <p>
        

          {(text.length>0) ?  text.trim().split(/\s+/).filter(word => word.length > 0).length : 0} words and {text.length} charaters
        </p>
        <p>{0.008 * text.trim().split(/\s+/).filter(word => word.length > 0).length} Minutes Read</p>
        <h3>Text Preview</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default TextForm;
