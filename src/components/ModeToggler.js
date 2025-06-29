function ModeToggler() {
    const darkModeOn = true
    const darkModeOnText = "Dark Mode On"
    const lightModeText = "Light Mode On"

    const toggleDarkMode = () => {
        // Logic to toggle dark mode
        console.log("Toggling dark mode");
    }

    return (
        <div>
            <h1>{darkModeOn ? darkModeOnText : lightModeText}</h1>
            <button onClick={toggleDarkMode}>Switch Mode</button>
        </div>
    )
}

export default ModeToggler;