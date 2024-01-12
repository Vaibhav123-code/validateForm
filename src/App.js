import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'; 
import FormValidation from './Component/Form';
import Thank from './Component/ThankYou';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(()=> {
    async function fetchCountries(){
      try{
        const response = await axios.get('https://restcountries.com/v2/all');
        const countryList = await response.data;
        console.log(countryList)
        
         const updatedList  = countryList.map((c)=>{
            return {label: c.name, value: c.alpha2Code}
          })
          setCountries(updatedList);
       
      }catch(error){
       console.log("error -", error)
      }
    }
    fetchCountries();
  },[])

  return(
    <div>
      <Router>
          <Routes>
            <Route path='/' element={ <FormValidation countries={countries}/>} />
            <Route path='/thank-you' element={ <Thank />} />
          </Routes>
      </Router>
    </div>
  )
}
  export default App;

 





