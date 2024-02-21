// import logo from './logo.svg';
//import './App.css';
// import List from './List'
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import EditList from './EditList';
import Home from './Home';
import Contact from './Contact';


function App() {

  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/edit" element={<EditList/>} />
      <Route path="/contact" element={<Contact/>} />
     </Routes>

    </BrowserRouter>
  </div>
  );
}


export default App;

// fetch("https://random-data-api.com/api/v2/users") 
// .then((res) => { 
// return res.json(); 
// }) 
// .then((data) => {
// console.log(data);
// });