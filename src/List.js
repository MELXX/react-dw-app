
import jsonData from "./data.json";

function List(props){
    
 return (
    <>
    <p>List for {props.name} works</p>
    <ul>
        <li>{jsonData.last_name}</li>
        <li>{jsonData.first_name}</li>

    </ul>
    </>
 );
}

export default List;