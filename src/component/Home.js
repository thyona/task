import React from 'react'
import Contact from './Contact'
// import { Route,BrowserRouter as Router, Routes, Link, BrowserRouter } from 'react-router-dom'

// import Contact from './Contact'
import Navbar1 from './Navbar1'
import Pagination from './Pagination'
import Popup from './Popup'
// import Navbar1 from './Navbar1'
import Sidebar from './Sidebar'
export default function Home() {
  return (
    <div>
        {/* <h1>login successfully</h1> */}
        
        
    {/* <Router>
        <nav>
            <Link to="/">sidebar</Link>
            <Link to="/contact">contact</Link>
        </nav>
        <Routes>
            <Route path='/' component={<Sidebar/>} />
            <Route path='/contact' component={<Contact/>}/>
        </Routes>
    </Router> */}
    <Navbar1/>
    <Sidebar/>
    <Contact/>
    <Popup/>
    <Pagination/>
    
    </div>
  )
}
