
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Provider from './components/Providers/Provider';
import Providers from './components/Providers/Providers';
import NewProvider from './components/Providers/NewProvider';
// import ProviderSideBar from './components/Providers/ProviderSideBar';
import NotFound from './components/NotFound';



function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        {/* // Multiple Routes */}
        {/* <aside>
          <Routes location="/providers">
            <Route path="/providers" element={<ProviderSideBar />}></Route>
          </Routes>
        </aside> */}
        {/* // Nested Routes */}
        <Route path="/providers">
          <Route index element={<Providers />} />
          <Route path=":id" element={<Provider />} />
          <Route path="new" element={<NewProvider />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
