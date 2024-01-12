import React, { useState, useEffect } from 'react';
import './style.css'
import { useNavigate } from 'react-router-dom';

 function FormValidation({countries}){
   const [name,setName] = useState('');
   const [age, setAge] = useState('');
   const [country, setCountry] = useState('');
   const navigate = useNavigate();

   function handleSubmit(){
     if(name.trim() === '' || age.trim() === '' || country.trim()=== ''){
       alert("please fill field")
     }
     else{
      navigate('/thank-you',{ state: {name,age,country} } )
     }
   }

  return (
    <div className='form-container'>
      <h1> Form Validation </h1>
   <form onSubmit={handleSubmit}>
    <div className='form-input'>
     <label>
      <strong>Name :</strong>
       <input type='text' placeholder='name' value={name} onChange={(e)=> setName(e.target.value)} required/>
     </label>

     <label>
      <strong>Age :</strong> 
      <input type='number' placeholder='Age' value={age} onChange={(e)=> setAge(e.target.value)} required/>
     </label>

     <label>
     <strong>Country :</strong>
     <select onChange={(e)=> setCountry(e.target.value)} value={country} className='select'>
       <option value="" >Selcet Country</option>
       {
        countries.map((c)=> (
          <option key={c.value} value={c.label}>{c.label}</option>
        ))
       }
     </select>
     </label>
     </div>
     <button type='submit'>Submit</button>
  </form>
    </div>
  );
};
export default FormValidation;