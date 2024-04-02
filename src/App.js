import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Summary from './Components/Summary';

function App() {

  return (
    <div>
      Welcome to App.js in REACT
      <ToastContainer />
      <Router>
          <Routes>
            <Route path='/aihubSummary' element={<Summary/>}/> 
          </Routes>
        </Router>
    </div>
  );
}

export default App;
