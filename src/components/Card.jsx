import React, { useEffect, useState } from 'react'
import {BsFillDice5Fill} from 'react-icons/Bs'

const Card = () => {

    const[advice,setAdvice] = useState("");
    const[id, setId] = useState(0);

useEffect(()=>{

    fetch( 'https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => {
        
        setAdvice(data.slip.advice)
        setId(data.slip.id)
    } )
        
    .catch((err)=> console.log(err.message))
    


},[]);

  return (
    <>
    <div className='card'>
    <h6>ADVICE #{id}</h6>
    <p>{advice}</p>
    <hr/>
    <button><BsFillDice5Fill/></button>

    </div>
    </>
  )
}

export default Card