import React, { useState } from 'react'
import { useEffect } from 'react';
export default function Api() {
    //state 
    const[data ,setData]=useState([]);

    console.log(data)
    //useEffect(<function>) ,arrow functions
    
     useEffect( ()=> {

        fetch('	https://dog.ceo/api/breeds/image/random')
        .then((res) =>res.json())
        .then((data) =>console.log(data));
      }    )

    
  return (
    <div>
      
    </div>
  )
}
