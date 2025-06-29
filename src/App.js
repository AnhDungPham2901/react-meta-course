import logo from './logo.svg';
import './App.css';
import Btn from './components/Btn';
import ModeToggler from './components/ModeToggler';
import { useState } from 'react';

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


function App() {
    const [darkModeOn, setDarkModeOn] = useState(false);
    const darkModeOnText = "Dark Mode On";
    const lightModeText = "Light Mode On";

    const toggleDarkMode = () => {
        // Logic to toggle dark mode
        setDarkModeOn(!darkModeOn);
    };
    return (
        <div className="App">
            <Example
                toggleBoolean={!bool}
                math={(10 + 20) / 3}
                str={str1 + ' another ' + 'string'}
            />
            <Btn />
            <ModeToggler darkModeOn={darkModeOn} darkModeOnText={darkModeOnText} lightModeText={lightModeText} />
            <button onClick={toggleDarkMode}> Change the Mode</button>
        </div>
    );
}

export default App;
