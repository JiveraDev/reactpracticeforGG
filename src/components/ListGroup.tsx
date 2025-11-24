import {Fragment, useState} from 'react';


type listGroupProps = {
   
    items: string[];

}

function ListGroup({items}: listGroupProps) {
    
    
 const [selectedindex, setSelectedIndex] = useState(-1);


    return (
     <Fragment>
        <h1>List Group</h1>
        {items.length === 0 ? <p>No items found</p> : null}
        <ul className="list-group">
           {items.map((item, index) => <li className={selectedindex === index ? "list-group-item active" : "list-group-item"} onClick={() => {console.log( "you click the "+ item); setSelectedIndex(index)}}>{item}</li>)}
        </ul>
    </Fragment>);
}

export default ListGroup;
export { ListGroup };