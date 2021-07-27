function Child(props){
    // console.log(props);
    function doSomething(){
        alert(props.color());
    }
    return (
        <h1 onClick={doSomething}>Child</h1>
    )
}

export default Child;