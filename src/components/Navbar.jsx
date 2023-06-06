import React from 'react'
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='fixed w-full z-10 bg-black top-0 text-3xl flex justify-between items-center text-red-500  font-bold p-3 border-b-2 border-gray-500'>
<Link to={'/'}>



      
        <span  >  filmy<span className='text-white'>world < MovieFilterIcon fontSize="large"/></span></span>
        </Link>

        <Link to={'/Addmovies'}>
        <h1 className='text-lg cursor-pointer flex items-center '>
            <button className='text-white'>
            <AddIcon className='mr-2' color='inherit'/>
            
               Add New

            </button>
            </h1>
        
        </Link>
       

    </div>
  )
}

export default Navbar