import React, { useState } from 'react';
import Navbar from './component/Navbar';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import About from './component/About';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';



const App = () => {
  const [mode,setMode]=useState('light');

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.background='#1d2533';
      showAlert("Dark mode enabled!")
    }
    else{
        setMode('light');
        document.body.style.background='white' ;
        showAlert("Light mode enabled!")
    }
    
  }
  const [alert,setAlert]=useState(null);
  const showAlert=(message)=>{
    setAlert({message:message})
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  
  return (
    
    <Router>
      <>
    <Navbar title="Text-Utils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Routes>
    <Route exact path='/' element={<TextForm mode={mode} show={showAlert} />}></Route>
    <Route exact path='/about' element={<About mode={mode}/>}></Route>
    </Routes>
    </>
    </Router>
 
  )
}

export default App