
import './App.css';
import Navbar from './Component/Navbar';
import Login from './Component/Login';
import Home from './Component/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nonavbar from './Component/Nonavbar';
import Yesnavbar from './Component/Yesnavbar';

import LoadingScreen from 'react-loading-screen';
import { useState } from 'react';
;


function App() {
  const [loadpage, setloading] = useState(true)
  setTimeout(function () { setloading(false) }, 0)

  // document.body.style.backgroundColor = "grey"
  return (<>
  
  {/* { */}

{/* // loadpage===false?( */}
  <Router>

        <Routes>
          <Route element={<Nonavbar />} />
          <Route exact path="/Login" element={<Login />} />

          <Route element={<Yesnavbar />} />
          <Route exact path="/" element={<Home />} />




        </Routes>
      </Router>
    
   {/* ):(  */}

    {/* <LoadingScreen
      loading={loadpage}
      bgColor='#f1f1f1'

      textColor='#676767'
      logoSrc='https://i.pinimg.com/originals/30/1f/3b/301f3bc4d534302a51899cbc831c7389.gif'
      text='Setting up your journey...'
    >

      <div>Loadable content</div>
    </LoadingScreen>
    )
   

    
   }
     */}
  </>

  );
}

export default App;
