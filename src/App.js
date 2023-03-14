
import { useState } from 'react';
import './App.css';
import Emoji from './components/Emoji';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
// import {
//   BrowserRouter as Router,
//   Routes, // instead of "Switch"
//   Route,
// } from "react-router-dom";


function App() {
const [mode, setMode] = useState('light'); // state variable to enable and desable dark mode
const toggleMode = ()=>{
  if ( mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = 'black';
    setInterval(() => {
      document.title = 'Text Analyser -  A React App';
    }, 2000);
    setInterval(() => {
      document.title = 'Text Analyser - An Amazing Website';
    }, 1500);
     

  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    document.title = 'Text Analyser -  Light Mode'
  }
}

  return (
  <>
      {/* <Router> */}
      <Navbar title='TEXT ANALYZER' aboutText={"About"} mode = {mode} toggleMode ={toggleMode}/>
      {/* <div className="container my-2 ">
        
        {/* <style>{'body { background-color: black; }'}</style>
        </div> */}
        <div className="container my-4">
        <Textbox heading="Enter text (copy and paste is fine) here:" mode = {mode} toggleMode ={toggleMode} />
        <Emoji mode = {mode} />
        {/* <Routes>
          <Route exact  path="/"  element={<Textbox heading="Enter text (copy and paste is fine) here:" mode = {mode} toggleMode ={toggleMode} />} />
          <Route exact path="/Emoji" element={ <Emoji mode = {mode} />} /> 
          {/* react use partial matching on given path so we use exact path to give exact location of path */}
    {/* </Routes> */} 
        
        </div>
        {/*  </Router> */}
   </>
  );
}

export default App;
