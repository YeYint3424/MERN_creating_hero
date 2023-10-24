import { useState } from 'react'
import './App.css'
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Create from './Create';
import Update from './Update';
import Home from './Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import NavBar from './NavBar';
import AllBio from './AllBio';
function App() {

  return (
    <>
      <div className='body'>
        <NavBar />
        <div className='mt-3'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/update" element={<Update />} />
            <Route path="/all-biography" element={<AllBio />} />
          </Routes>
        </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App
