// function Btn() {
//     const clickHandler = () => {
//         console.log("Button clicked!");
//     };

//     return (
//         <button className="btn" onClick={clickHandler}>
//             Click Me
//         </button>
//     );
// }

// onMouseHover event
function Btn() {
   const mouseOverHandler = () => {
       console.log("Mouse is over the button!");
   };

    return (
        <button className="btn" onMouseOver={mouseOverHandler}>
            Click Me
        </button>
    );
}


export default Btn;