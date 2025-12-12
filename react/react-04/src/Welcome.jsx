function Welcome(props) {
    const { name, msg = "Welcome", className } = props;
    return (
        <div className={className}>{msg} {name}!</div>
    )
}

export default Welcome;