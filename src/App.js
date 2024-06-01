import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';



function App() {
  const [Mode,setMode] = useState("light");//Wther dark mode is enabled or not
  const toggleMode=()=>{
    if (Mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor='black';
      showAlert("Dark Mode is enabled","success");
      btn_clr_mode('dark')
      document.title="TextUtils-Dark Mode"
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("Light Mode is enabled","success");
      btn_clr_mode('light')
      document.title="TextUtils-Light Mode"
    }
  }
  const toggleColorGreen=()=>{
      document.body.style.backgroundColor='#022314';
      showAlert("Dark Green Mode is enabled","success");
      btn_clr_mode('green')
    }
  const toggleColorBlue=()=>{
      document.body.style.backgroundColor='#031838';
      showAlert("Dark Blue Mode is enabled","success");
      btn_clr_mode('blue')
    }
    const toggleColorDark=()=>{
      document.body.style.backgroundColor='black';
      showAlert("Dark Mode is enabled","success");
      btn_clr_mode('dark')
    }  
    

  const text=()=>{
    if(Mode==="dark"){
        return "light"
    }
    else{
        return "dark"
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(()=>{
      setAlert(null)
    },1500);
  }
  const [buttonColor, setbuttonColor] = useState("primary");
  const btn_clr_mode=(color)=>{
    if(color==='dark'){
      setbuttonColor('dark')
    }
    if(color==='blue'){
      setbuttonColor('primary')
    }
    if(color==='light'){
      setbuttonColor('primary')
    }
    if(color==='green'){
      setbuttonColor('success')
    }
  }
  return (
   <>
 
<Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} text={text()} toggleGreen={toggleColorGreen} toggleBlue={toggleColorBlue} toggleDark={toggleColorDark}/>
<Alert alert={alert}/>
<div className={`container text-${text()} my-3`}>

  <TextForm heading="Enter your text to analyse" mode={Mode} showAlert={showAlert} buttonColor={buttonColor}/>
  
</div>

   </>
  );
}

export default App;
