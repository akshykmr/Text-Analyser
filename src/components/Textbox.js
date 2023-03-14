import React, {useState} from 'react' // useState is a hooks: hooks help us to use the features of class without making a class

export default function Textbox(props) {

const [text, setText] = useState(''); 
//text = "new text"; : wrong way to change the state
//setText('new text'); : correct way to change the state
// text is a state variables and setText is function here wchich will help us to 
//updated the text variable , the default value of text is defined here : Enter text here : ( this syntax is a syntax of state here) 

// const [isFocused, setIsFocused] = useState(false);
  
// const handleFocus = () => {
// setIsFocused(true);
//  };

const handleUpClick = ()=>{
// console.log("Uprcase was clicked");
setText("You have clicked on handleupClick")
let newText = text.toUpperCase();
setText(newText)
}

const handleLowClick = ()=>{
// console.log("Lowercase was clicked");
let newText = text.toLowerCase();
setText(newText)
}

const handleOnChange = (event)=> {
// console.log("On Changed")
setText(event.target.value) // listening a event here
    if ( text.split(0) === " "){
setWord('0')
    }
    
        else {
        setWord(text.split(" ").length)
    }
 
}

const handleTitleClick = ()=>{
// console.log("Title case was clicked");
let newText = text[0].toUpperCase() + text.slice(1).toLocaleLowerCase();
text.split(" ").map(word => word.split("").reverse().join(""));
setText(newText)
}
const handleSentenceClick = () => {
    let newText = text;
    newText = newText.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, function(c) {
    return c.toUpperCase();
    });
    setText(newText);
    };


// const handleSentenceClick = ()=>{
// // console.log("Lowercase was clicked");
// let newText = text.toSentence();
// setText(newText)
// }

var oldText = text;
const handleClearClick = ()=>{
console.log(oldText);
let newText = ""
setText(newText)
}



const handlePrintClick = ()=>{
window.print()
}

const handleReversClick = ()=>{
    let reverseWordArr = text.split(" ").map(word => word.split("").reverse().join(""));
let newText = reverseWordArr.join(" ");
setText(newText)
}
const handleImportText = ()=>{
let newText ="React.js is a popular open-source JavaScript library used for building user interfaces. It was created by Facebook and is maintained by a community of developers. React allows developers to create reusable UI components that can be used to build complex and dynamic web applications.One of the key features of React is its ability to efficiently update and render only the necessary components of a web page when changes are made, which makes it highly performant. React also promotes the use of a declarative programming style, which means that developers can describe how a UI should look and behave, rather than imperatively specifying every step.React can be used in conjunction with other libraries or frameworks, such as Redux or Next.js, to build powerful and scalable applications. It has become widely adopted in the web development community and is used by many popular websites and companies.";
setText(newText)
}

const handleFindClick = () => {
    const searchTerm = prompt("Enter search term:");
    const replaceTerm = prompt("Enter replace term:");
    let newText = text.split(searchTerm).join(replaceTerm);
    setText(newText);
  }
  

//   const handleUndoButtonClick =()=>{

//   }

//   const handleRedoButtonClick = ()=>
//     { to be w

//     }
const [word, setWord] = useState(0);
 


return (
<>  
 <div className={`container-fluid text-${props.mode==='dark'?'white':'black'}`}> 
<h4>{props.heading}</h4>
<button id="impbtn" type="button" className={`btn btn-outline-infoo text-${props.mode==='dark'?'white':'black'}`} 
onClick={handleImportText}>Import Text</button>
<button id="impbtn" type="button" className={`btn btn-outline-infooo text-${props.mode==='dark'?'white':'black'}`} 
onClick={handleClearClick}>Clear</button>
<div className="mb-3">
{/* <textarea label="hello" onFocus={handleFocus}  
          className={` ${isFocused ? "focused" : ""}`} placeholder="Input your text...." id="textBox" rows="8" value = {text}    onChange ={handleOnChange}>
</textarea> */}
<textarea className="form-control" placeholder="Input your text...." id="textBox" value={text} rows="8"
 onChange ={handleOnChange} style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white', 
 color:props.mode=== 'dark'?'white': 'black'}} ></textarea>
</div>
<div className="tools">
<button type="button" className="btn btn-outline-success mx-2" onClick={handleUpClick}>UPPERCASE</button>
<button type="button" className="btn btn-outline-warning" onClick={handleLowClick}>lowercase</button>
<button type="button" className="btn btn-outline-secondary mx-2" onClick={handleTitleClick}>Title Case</button>
<button type="button" className="btn btn-outline-primary mx-2" onClick={handleSentenceClick}>Sentence case</button> 
<button type="button" className="btn btn-outline-danger mx-2" onClick={handleClearClick}>Clear</button>
{/* <button type="button" className="btn btn-outline-info mx-2" onClick={handleUndoButtonClick}>Undo</button>
<button type="button" className="btn btn-outline-dark mx-2" onClick={handleRedoButtonClick}>Redo</button> */}
<button type="button" className="btn btn-outline-warning" onClick={handlePrintClick}> Print</button>
<button type="button" className="btn btn-outline-info mx-2" onClick={handleReversClick}>Revers</button>
<button type="button" className="btn btn-outline-secondary mx-2" onClick={handleFindClick}>Find & Replace</button>
</div>

<div className="container my-4">
<h4 className="my-2" >Text Summary</h4>
{/* <p>{text.split(" ").length} words and {text.length} Characters</p> */}
<p className="my-4">{word} words and {text.length} Characters</p>
<p className="my-4"> It will take {0.008*(text.split(" ").length)} Minutes to read the word</p>
<h4 className="my-4"> Preview </h4>
<div className="toolss">
<p
  style={{ backgroundColor:props.mode==='dark'? 'black': 'white', 
 color:props.mode=== 'dark'?'grey': 'black', height:props.text===" "?'auto':'90px'}} >{text} </p>
</div>
</div>
</div>
</>
)
}

