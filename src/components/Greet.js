export const Greet = (props) => {
    return (
    <article>
        <h1>Hello {props.name} {props.lastName}!</h1>
        {props.children}
    </article>
    )
}

// export default Greet