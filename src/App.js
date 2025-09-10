import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from "./Components/Navbar";
import Textfoam from "./Components/Textfoam";  
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Alert from './Components/Alert';
import Footer from './Components/Footer';

function App() {
  const[ Mode,setMode] = useState('dark')
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout( ()=>{
      setAlert(null); 
    },1500)
  }
  const toggleMode=()=>{
    if (Mode === 'dark'){
      setMode ('light')
      document.body.style.backgroundColor = 'WHITE';
     showAlert("light mode has been enabled ","sucess");

    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = '#043743 ';
        showAlert("dark mode has been enabled ","sucess");

    }
  }
  return (
    <Router>
      <Navbar tittle="TEXTUTILS" mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert} /> 

      <div className="container my-3">
        <Routes>
          <Route exact path="/" element={<Textfoam showAlert={showAlert} heading="TRY TEXTUTILS- Your Text Assistant  " mode={Mode} />} />   
          <Route exact path="/about" element={<About mode={Mode} />} />                                
        </Routes>
      </div>
      <Footer />
      

    </Router>

  );



}

export default App;
