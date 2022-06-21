import React from 'react';
import './Button.css';
import {BsDot} from 'react-icons/bs'
import {AiOutlineRight} from 'react-icons/ai';

export const BlueButton = ({children}) => {
  return (
    <button className='blue-button'>{children}</button>
  )
}

export const BlueButtonMedium = ({children}) => {
  return (
    <button className='blue-button mid'><BsDot className='dot'/><span className='blue-btn-child'>{children}</span><AiOutlineRight className='angle' /> </button>
  )
}

export const BlueButtonLarge = ({children}) => {
  return (
    <button className='blue-button large'>{children}</button>
  )
}

export const BlackButton = ({children})=>{
  return(
    <button className='btb-black'>{children}</button>
  )
}

export default BlueButton;
