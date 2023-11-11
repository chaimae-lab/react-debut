import React from 'react'
//import { useState } from 'react'

export default function form() {
let Name= "noor"
let last= "elannaoui"
//const [firstName ,setFirstName]= useState();
//const [lasttName ,setlastName]= useState();
//const [email ,setEmail]= useState();
  return (
    <div>
      

<form>    
 <h1> Form</h1>
<label htmlFor="name">first name</label>
<input id="1" type="text" placeholder="first name" name="" value={Name} required/>    
<br/>
<label htmlFor="name">last name</label>
<input id="2" type="text" placeholder="last name" name="" value={last}  required/>   
<br/>
<label htmlFor="name">email</label>
<input id="2" type="email" placeholder="last name" name=""  required/>   
<br/>
<button  type="submit"> enregister   </button>
</form>
<br/>

      
    </div>
  )
}
