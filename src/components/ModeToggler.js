function ModeToggler(props) {
    return (
        <div>
            <h1>{props.darkModeOn ? props.darkModeOnText : props.lightModeText}</h1>
        </div>
    )
}

export default ModeToggler;