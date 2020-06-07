import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Body from './components/Body/Body';

function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to Softcom Clone</h1> */}
      <Header/>
      <Body/>
      <h1>Hellooooooooooo</h1>  
      
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-right">
            <polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>
        </svg>
                                            
       
    </div>
    
  );
}

export default App;
