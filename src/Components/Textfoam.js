import React, { useState } from 'react';

export default function Textfoam(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleOnChanged = (event) => {
    setText(event.target.value);
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleClear = () => {
    setText('');
    props.showAlert("Text cleared", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ").trim();
    setText(newText);
    props.showAlert("Extra spaces removed", "success");
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#043743' }}>
        <h1>{props.heading}</h1>
        <div className="container my-3">
          <textarea
            className="form-control"
            onChange={handleOnChanged}
            value={text}
            id="InputBox"
            rows="8"
            style={{
              backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
              color: props.mode === 'dark' ? 'white' : '#043743'
            }}
          ></textarea>
        </div>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>
          Clear
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
          Copy
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      
      <div className="container my-2 text-center mb-3" style={{ color: props.mode === 'dark' ? 'white' : '#043743' }}>
        <h1>Preview</h1>
        <div
          className="p-3 border rounded"
          style={{
            backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
            color: props.mode === 'dark' ? 'white' : '#043743',
            minHeight: '150px',
            textAlign: 'left',
            whiteSpace: 'pre-wrap'
          }}
        >
          {text.length > 0 ? text : "Nothing to preview"}
        </div>
      </div>

      <div className="container my-2 text-center mb-3" style={{ color: props.mode === 'dark' ? 'white' : '#043743' }}>
        <h1>Your text summary</h1>
        <p>
          {text.trim().split(/\s+/).filter((word) => word.length > 0).length} words,{" "}
          {text.replace(/\s/g, "").length} characters
        </p>
        <p>
          {0.008 * text.trim().split(/\s+/).filter((word) => word.length > 0).length} minutes read
        </p>
      </div>
    </>
  );
}
