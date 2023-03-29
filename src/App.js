import logo from './logo.svg';
import './App.css';
import Register from './component/Register'
// import Sidebar from './component/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/Contact';




function App() {
  return (
    <div className="App">
      <Register/>
      <BrowserRouter>
        <Routes>
          <Route path='/' component={<Home/>} />
          <Route path='/contact' component={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
