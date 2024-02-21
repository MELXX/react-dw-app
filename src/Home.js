import { Link } from 'react-router-dom';
import { getUsers } from './helpers/getData';
import { useState,useEffect } from 'react';

 function Home(){
    const [data,dataChanger] = useState([{name:""}]);

    useEffect(() => {
      getUsers().then(response => {
          dataChanger(response);
        })
        .catch(error => {
          console.error(error);
        });  
    }, []);
    console.log(data)
    return (
        <div>
            <h1>Current Users</h1>
            {data.map((x)=><p key={x.name}>name: {x.name}</p>)}
            <button><Link to="/edit">Edit roster</Link></button>
            <button><Link to="/contact">Contact admin</Link></button>
        </div>
    );
}

export default Home;