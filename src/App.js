import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to Softcom Clone</h1> */}
      <Header/>
      <Body/>
      <Footer/>                          
    </div>
    
  );
}

export default App;
