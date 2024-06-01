import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick= () =>{
        console.log("uppercase  was clicked  " +  text)
        let newText= text.toUpperCase()
        setText(newText)
        props.showAlert("Converted To Upper Case","success")
    } 
    const handleLowClick= () =>{
        console.log("uppercase  was clicked  " +  text)
        let newText= text.toLowerCase()
        setText(newText)
    } 
    const handleClrClick= () =>{
        console.log("uppercase  was clicked  " +  text)
        setText("")
    } 
    const handleOnChange= (event) =>{
        console.log("handelonchange")
        setText(event.target.value)
    }
    const words =()=>{
        if(text.trim().length===0){
            return 0
        }
        else {
            return text.trim().split(" ").length
        }
    } 
    const[text,setText]= useState("")
  return (
    <>
  
    <div  className={`container`} >
    <h1>{props.heading}</h1>
    <div className="mb-3" >
    <textarea className="form-control"  value={text} style={{backgroundColor:props.mode==="dark"?"gray":"white",
    border:props.mode==="dark"?"1px solid white":"",
    color:props.mode==="dark"?"white":"black"}} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>
    </div>
    <button className={`btn btn-${props.buttonColor} mx-2`} onClick={handleUpClick}>Convert to UPPER CASE</button>
    <button className={`btn btn-${props.buttonColor} mx-2`} onClick={handleLowClick}>Convert to lower case</button>
    <button className={`btn btn-${props.buttonColor} mx-2`} onClick={handleClrClick}>Clear Text</button>
    <div  className='container my-2'>
        <h2>Your text summary</h2>
        <p>{words()} Words and {text.length} Charecters</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Preview your text here"}</p>
    </div>
    </>
  )
}
