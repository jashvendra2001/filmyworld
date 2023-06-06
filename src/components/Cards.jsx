import React, { useState } from 'react'
import ReactStars from 'react-stars'

function Cards() {
    const[data,setData]=useState([
        {
            Name:"Avenger EndGame",
            Rating:"5",
            year:"2014",
            img:"https://th.bing.com/th/id/OIP.dUeFVUHq0iQudVuDkXJ77QHaLH?w=182&h=273&c=7&r=0&o=5&dpr=1.3&pid=1.7"


        },
        {
            Name:"Avenger EndGame",
            Rating:"5",
            year:"2014",
            img:"https://th.bing.com/th/id/OIP.dUeFVUHq0iQudVuDkXJ77QHaLH?w=182&h=273&c=7&r=0&o=5&dpr=1.3&pid=1.7"


        },

        {
            Name:"Avenger EndGame",
            Rating:"2.5",
            year:"2014",
            img:"https://th.bing.com/th/id/OIP.dUeFVUHq0iQudVuDkXJ77QHaLH?w=182&h=273&c=7&r=0&o=5&dpr=1.3&pid=1.7"


        },

        {
            Name:"Avenger EndGame",
            Rating:"5",
            year:"2014",
            img:"https://th.bing.com/th/id/OIP.dUeFVUHq0iQudVuDkXJ77QHaLH?w=182&h=273&c=7&r=0&o=5&dpr=1.3&pid=1.7"


        },

        {
            Name:"Avenger EndGame",
            Rating:"4",
            year:"2014",
            img:"https://th.bing.com/th/id/OIP.dUeFVUHq0iQudVuDkXJ77QHaLH?w=182&h=273&c=7&r=0&o=5&dpr=1.3&pid=1.7"


        },

        {
            Name:"Avenger EndGame",
            Rating:"3",
            year:"2014",
            img:"https://th.bing.com/th/id/OIP.dUeFVUHq0iQudVuDkXJ77QHaLH?w=182&h=273&c=7&r=0&o=5&dpr=1.3&pid=1.7"


        },

        {
            Name:"Avenger EndGame",
            Rating:"5",
            year:"2014",
            img:"https://th.bing.com/th/id/OIP.dUeFVUHq0iQudVuDkXJ77QHaLH?w=182&h=273&c=7&r=0&o=5&dpr=1.3&pid=1.7"


        },


    ])
  return (
    <>
     <div className="flex  justify-between flex-wrap p-2">

    {
       

        data.map((element,index)=>{
            
            
            return(
                
                
          <div key={index} className='card font-medium hover:-translate-y-2  cursor-pointer mt-4  transition-all duration-500'>
          <img className='h-80' src={element.img} alt="movi banner"/>
          <h1>Name:{element.Name}</h1>
          <h1 className='flex items-center'>Rating:
          <ReactStars size={20} half={true} count={5} value={element.Rating} edit={false}/>
          </h1>
          <h1>year:{element.year}</h1>
           </div>
           )




})



    }
</div>
   

    </>
  )
}

export default Cards