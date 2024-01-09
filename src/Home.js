import { Link } from 'react-router-dom';

 function Home(){
    
    return (
        <div>
            <h1>Current roster</h1>
            <div>
                <p>Monday: Melusi</p>
                <p>Monday: Melusi</p>
                <p>Monday: Melusi</p>
                <p>Monday: Melusi</p>
                <p>Monday: Melusi</p>
                <p>Monday: Melusi</p>
            </div>
            <button><Link to="/edit">Edit roster</Link></button>
            <button><Link to="/contact">Contact admin</Link></button>
        </div>
    );
}

export default Home;