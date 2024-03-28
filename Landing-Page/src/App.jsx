// import React, { useState } from 'react';
// import './App.css'
// import AppRouter from './components/Router/Router'
// import Navbar from './components/navbar/Navbar'




// function App() {
  
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <div className='app'>

//      {username === 'user' && password === 'password'&&<Navbar/>} 
//   <AppRouter/>
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react';
import './App.css';
import AppRouter from './components/Router/Router';


function App() {
 
  return (
    <>
   
      
      
      <AppRouter />
    </>
  );
}

export default App;
