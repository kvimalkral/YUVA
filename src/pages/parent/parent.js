import Child from '../child/child';
function add() {
     alert("i am parent");
}
function Parent(){
    return (
        <div>
        <h1>parent component</h1>

       <Child color={add} />
        
        </div>
       
        
        // 
        
    )
}

export default Parent;