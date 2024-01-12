import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './style.css'
function Thank() {

 const navigate = useNavigate();
 const {state} = useLocation();
  const {name, age, country} = state || {}

  return (
    <div className='thank-you'>
       <h1>Thank You! {name}</h1>
       <p>Age : {age}</p>
       <p>Country : {country}</p>
       <button onClick={()=> navigate('/')}>Home</button>
    </div>
  )
}

export default Thank
