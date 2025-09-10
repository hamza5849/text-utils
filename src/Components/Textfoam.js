
import { getElementError } from '@testing-library/dom';
import { Button } from 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState } from 'react';

export default function Textfoam(props) {
  const [text, setText] = useState("");


  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    setText(text.toUpperCase());
    
  };

  const handleOnChanged = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const handleloClick= ()=> {
    console.log("lowercase was clicked ");
    setText(text.toLowerCase())
  }
  const handletoclick= ()=> {
    let newtext='';
    setText(newtext)
  }
const handleCopy = () => {
  var text = document.getElementById("MyBox");
  navigator.clipboard.writeText(text.value);
  console.log("Copied:", text.value);
   props.showAlert("copied to clipboard","Sucess");
};

const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/).join(" ");
  setText(newText.trim());
  console.log("Removed extra spaces:", newText);
   props.showAlert("extra spaces has been removed ","Sucess");
};



  return (
    <>
   <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#043743' }}>

      <h1>{props.heading}</h1>
      <div className="container my-3">
        <textarea
          className="form-control"
          onChange={handleOnChanged}
          value={text}
          id="MyBox"
          rows="8"
          style={{
                  backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
                  color: props.mode === 'dark' ? 'white' : '#043743'
                }}



        ></textarea>
 

      </div>
      <div className='container mx-2 my-1 text-center mb-3' style={{ color: props.mode === 'dark' ? 'white' : '#043743' }}> 
         <h1>PREVIEW</h1> 
         <textarea
          className="form-control"
          
          value={text}
          id="MyBox"
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
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleloClick}>
        Convert to lowercase
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handletoclick}>
       CLEAR
      </button>
       <button  disabled={text.length===0} className="btn btn-primary mx-2 my-1"  onClick={handleCopy}>
        Copy
        </button>
        <button  disabled={text.length===0} className="btn btn-primary mx-2 my-1"  onClick={handleExtraSpaces}>
              Remove Extra Spaces
        </button>
    </div>
    
    <div className='container my-2 text-center mb-3' style={{ color: props.mode === 'dark' ? 'white' : '#043743' }}>

                <h1>your text summery </h1>
       <p>{text.trim().split(/\s+/).filter((word) => word.length !== 0).length} words, {text.length} characters</p>

          <p>{0.008*text.split(" ").length} minutes read </p>
     


    </div>
    </>
  );
}
