import React, { useEffect } from 'react'
import {BsFillDice5Fill} from 'react-icons/Bs'

const Card = () => {

useEffect(()=>{

    fetch('https://api.adviceslip.com/advice')
    .then

},[]);

  return (
    <>
    <div className='card'>
    <h6>ADVICE</h6>
    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptas!"</p>
    <hr/>
    <button><BsFillDice5Fill/></button>

    </div>
    </>
  )
}

export default Card