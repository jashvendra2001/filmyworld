import Navbar from './components/Navbar';
import Cards from './components/Cards';
import {Route,Routes}  from "react-router-dom"
import Addmovies from './components/Addmovies';


function App() {
  return (
    
      <div className='relative'>

      <Navbar  />

<Routes>

  
  <Route path="/" element={<Cards/>}/> 
  <Route path="/addmovies" element={<Addmovies/>}/>

</Routes>

      </div>
      
    
    
  );
}

export default App;
