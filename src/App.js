import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
  
} from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'gray'
      showAlert("Dark mode has been Enabled", "success");
      document.title = 'TextUtils - Dark Mode'
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been Enabled", "success");
      document.title = 'TextUtils - Light Mode'
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Blog" link1="Home" link2="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<TextForm heading="Enter the Text to Analyze Below" mode={mode} showAlert={showAlert} />}>
          </Route>
          <Route path="/about" element={<About/>}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
