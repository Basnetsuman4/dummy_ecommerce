import './App.css';
import Home from './screens/Home';
import Create from './screens/Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import Delete from './screens/Delete';
import { createContext, useState } from 'react';

export const valOfSearchContext = createContext();


function App() {
  const [data, setData] = useState({})
  return (
    <valOfSearchContext.Provider value={{ data, setData }}>
      <div className='App' >
        <Router>
          <Navbar />
          <div className='mainBox'>
            <SideBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/addProduct" element={<Create />} />
              <Route path="/removeProduct" element={<Delete />} />
            </Routes>
          </div>
        </Router>
      </div>
    </valOfSearchContext.Provider>
  );
}

export default App;