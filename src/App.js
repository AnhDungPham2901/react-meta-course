import logo from './logo.svg';
import './App.css';
import Btn from './components/Btn';
import ModeToggler from './components/ModeToggler';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function Header() {
  return (
    <h1> Hello World</h1>
  );
}

const bool = false;
const str1 = "just";

function Example(props) {
    return (
        <div>
            <h2>
                The value of the toggleBoolean prop is:{props.toggleBoolean.toString()}
            </h2>
            <p>The value of the math prop is: <em>{props.math}</em></p>
            <p>The value of the str prop is: <em>{props.str}</em></p>
        </div>
    );
};


// function App() {
//     const [darkModeOn, setDarkModeOn] = useState(false);
//     const darkModeOnText = "Dark Mode On";
//     const lightModeText = "Light Mode On";

//     const toggleDarkMode = () => {
//         // Logic to toggle dark mode
//         setDarkModeOn(!darkModeOn);
//     };
//     return (
//         <div className="App">
//             <Example
//                 toggleBoolean={!bool}
//                 math={(10 + 20) / 3}
//                 str={str1 + ' another ' + 'string'}
//             />
//             <Btn />
//             <ModeToggler darkModeOn={darkModeOn} darkModeOnText={darkModeOnText} lightModeText={lightModeText} />
//             <button onClick={toggleDarkMode}> Change the Mode</button>
//         </div>
//     );
// }


// function App() {
//   const [inputText, setInputText] = useState('Hello World');

//   const handleInputChange = (event) => {
//     setInputText(event.target.value);
//   };

//   return (
//     <div className="App">
//       <input value={inputText} onChange={handleInputChange} />
//       <p>You typed: <em>{inputText}</em></p>
//       <button onClick={() => setInputText('Hello World')}>Reset</button>
//     </div>
//   );
// }


function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
