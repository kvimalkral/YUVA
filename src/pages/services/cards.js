import treeImg from '../../img/1.jpg';
function Cards(props){
    return(
        Array(10)
    .fill("1")
    .map((i) => {
      return(
      <div key={new Date() + i} className="col-md-3 mt-2" id={i}>
        <div className="card " >
          <img src={treeImg} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a  className={props.color}>Go somewhere</a>
          </div>
        </div>
      </div>
      )
    })
    )
}

export default Cards;