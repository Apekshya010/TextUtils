import React, { useState } from 'react';



const TextForm = (props) => {
    const [text,setText]=useState("");
    let word=text===""?0:text.trim().split(/\s+/).length;

    const handleOnChange=(e)=>{
        setText(e.target.value);
    }
    const changeToUpper=()=>{
        setText(text.toUpperCase());
        props.show("Converted to Uppercase!")
    }
    const changeToLower=()=>{
        setText(text.toLowerCase());
        props.show("Converted to Lowercase!")
    }
    const removeSpaces=()=>{
        const newText=text.replace(/\s+/g," ")
        setText(newText)
        props.show("Extra space removed!!")
    }
    const clearText=()=>{
        setText("");
        props.show("Successfully cleared all!")
    }
    const myStyle={
        backgroundColor:props.mode==='dark'?'#1d2533':'white',
        color:props.mode==='dark'?'white':'#1d2533'
    }

    return (
        <div style={myStyle}>
            <div className="form-floating container my-5">
                <h2>Enter your text here</h2>
                <textarea value={text} onChange={handleOnChange} className="form-control" id="floatingTextarea" style={{height:300,backgroundColor:props.mode==='dark'?'#dedeef':'white'}}></textarea>
                <button disabled={text.length===0} type="button" className="btn btn-primary m-2" onClick={changeToUpper}>Convert to UpperCase</button>
                <button disabled={text.length===0} type="button" className="btn btn-primary m-2" onClick={changeToLower}>Convert to LowerCase</button>
                <button disabled={text.length===0} type="button" className="btn btn-primary m-2" onClick={removeSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} type="button" className="btn btn-danger m-2" onClick={clearText}>CLear All</button>

            </div>
            <div className="form-floating container my-5" >
              
                <h4>{word} words {text.length} characters</h4>
                <h4>Time to read:{(text.split(/\s+/).length*0.008).toFixed(4)} min</h4>
                <br/>
                <h2>Text Preview</h2>
                <p><b>{text}</b></p>

            </div>
         </div>
  )
}
export default TextForm


