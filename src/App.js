import logo from './logo.svg';
import './App.css';
import week1 from './data.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Current list for {Date.now()}</h1>
        {
            fetch("./sample.json") 
                .then((res) => { 
                return res.json(); 
            }) 
            .then((data) => <p>{data}</p>)
        
          }
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
