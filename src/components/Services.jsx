import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

const Services = () => {
  const [normal,setnormal] = useState('This is normal data')
  const [large,setlarge] = useState('This is large data')
  useEffect(() => {
    console.log('Services component created')
    return () => console.log('Services component deleted')
  },[large])
  return (
    <div>
      <h1>{normal}</h1>
      <button onClick={()=> setnormal('Normal data has been changed')} className='px-3 py-1 bg-red-400 rounded-md'>Change Normal Data </button>
      <h1>{large}</h1>
      <button onClick={()=> setlarge('Large data has been changed')} className='px-3 py-1 bg-red-400 rounded-md'>Change Large Data </button>
    </div>
    
  )
  
}

export default Services