import { Call, Email, LocationCity } from '@mui/icons-material'
import React from 'react'

const Topbar = () => {
  return (
    <div className='top-bar'>
      <p><Call/> +254 716 483268</p> 
      <p><Email/> edyche@gmail.com</p> 
      <p><LocationCity/> 580 Rongai </p> 
    </div>
  )
}

export default Topbar