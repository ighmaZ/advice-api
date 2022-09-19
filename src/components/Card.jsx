import React, { useEffect, useState } from 'react'
import {BsFillDice5Fill} from 'react-icons/Bs'

const Card = () => {

    const[advice,setAdvice] = useState("");
    const[id, setId] = useState(0);

    function showAdvice(){   // will be used in button to change next advice

        fetch( 'https://api.adviceslip.com/advice')
        .then((response) => response.json())
        .then((data) => {
            
            setAdvice(data.slip.advice)   // setAdvice state
            setId(data.slip.id)           // setId state
        } )
            
        .catch((err)=> console.log(err.message))
        
    
        }
useEffect(()=>{  // showAdvice is defined before useEffect so that we can use it for button onclick

    showAdvice()
},[]);

  return (
    <>
    <div className='card'>
    <h6>ADVICE #{id}</h6>
    <p>{advice}</p>
    <hr/>
    <button onClick={showAdvice}><BsFillDice5Fill/></button>


    </div>
    </>
  )
}

export default Card