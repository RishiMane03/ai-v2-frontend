import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Pages
import LandingPage from './Components/Landingpage/LandingPage';
import SignInOut from './Components/SignInOut/SignInOut';
import Summary from './Components/Summary/Summary';
import Code from './Components/Code/Code';
import Chat from './Components/Chat/Chat';
import Pdf from './Components/Pdf/Pdf';

function App() {

  return (
    <div>
      <ToastContainer />
      <Router>
          <Routes>
            <Route path='/' element={<LandingPage/>}/> 
            <Route path='/aihubAuth' element={<SignInOut/>}/> 
            <Route path='/summaryHub' element={<Summary/>}/> 
            <Route path='/codeHub' element={<Code/>}/> 
            <Route path='/chatHub' element={<Chat/>}/> 
            <Route path='/pdfHub' element={<Pdf/>}/> 
          </Routes>
        </Router>
    </div>
  );
}

export default App;
