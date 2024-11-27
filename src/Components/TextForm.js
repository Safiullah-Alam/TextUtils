import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here..");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success")
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success")
  }
  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared Text", "success")
  }
  const handleCopyClick = () => {
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been copied to clipboard", "success")
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  return (
    <>
      <div className='container my-3'>
        <h1>{props.heading}</h1>
        <textarea className='form-control mb-3' id='mybox' rows="8" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'black', cursor: props.mode === 'dark'?`url('/white-cursor.svg'), text`:'text'}}></textarea>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleClear}>Clear Text</button>
        <button className='btn btn-primary mx-2' onClick={handleCopyClick}>Copy Text</button>
      </div>
      <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.016 * text.split(" ").length} minutes to read this text</p>
      </div>
    </>
  )
}
