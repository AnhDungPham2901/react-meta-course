function Input(props) {
    return (
        <>
            <input type="text" value={props.value} onChange={props.onChange} />
            <p>You typed: <em>{props.value}</em></p>
        </>
    );
}