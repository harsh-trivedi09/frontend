function Child(props) {
   const data ="data is send to parent to child"
    return(
        <>
        <h1>Child Comopoent</h1>
        <button onClick={()=>props.result(data)}>Click here to send data child to parent</button>
        </>
    )
}

export default Child;