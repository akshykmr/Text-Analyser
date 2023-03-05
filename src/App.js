
import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';

function App() {
  return (
  <>
      <Navbar title='TEXT ANALYZER' aboutText={"About"} />
      <div className="container my-2 ">
        <Textbox heading="Enter text (copy and paste is fine) here:"/>
        <style>{'body { background-color: black; }'}</style>
        </div>
   </>
  );
}

export default App;
