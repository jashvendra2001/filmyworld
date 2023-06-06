import React from 'react'
import { useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { moviRef } from '../firebase/fire';
import { addDoc } from 'firebase/firestore';
import swal from 'sweetalert';

function Addmovies() {
  const[loading,setLoading]=useState(false)

    const[Data ,setData]=useState({
        title:"",
        year:"",
        description:"",
        img:""
    })
  
    const addmovi=async()=>{
      setLoading(true);
      await addDoc(moviRef,Data);
      swal({
        title:"successfuly Added",
        icon:"success",
        button:false,
        timer:3000


      })
      setLoading(false);

      setData({
        title:"",
        year:"",
        img:"",
        description:""
      })
    }



   


    const NameChange=(event)=>{
       setData({
        ...Data , year:event.target.value
        
       })
       
      
    }
    


    const description=(e)=>{
        setData({
            ...Data,description:e.target.value
        })

    }

    const Name=(e)=>{
        setData({
            ...Data,title:e.target.value
        })
    }


    const Imagelink=(e)=>{
        setData({
            ...Data,img:e.target.value
        })
    }

console.log(Data);
    

  return (
    <>
    <section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-2">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4   text-white">Add movies</h1>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7  text-white text-lg ">Title</label>
            <input type="text" id="Title"  name="title" value={Data.title} onChange={Name} class="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out  fill-none"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-white text-lg ">Year</label>
            <input type="year" id="Year" name="Year" value={Data.Year} onChange={NameChange} class="w-full   bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="email" class="leading-7 text-white text-lg ">image link</label>
            <input  alt="Submit" id='image' name='image'  value={Data.img}  onChange={Imagelink} class="w-full   rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-white text-lg ">Description</label>
            <textarea id="message" name="message" value={Data.description}  onChange={description} class="w-full bg- bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={addmovi}>{loading?<TailSpin height={24} color='white'/>:'Submit'}</button>
        </div>
       
      </div>
    </div>
  </div>
</section>
    
    </>
  )
}

export default Addmovies