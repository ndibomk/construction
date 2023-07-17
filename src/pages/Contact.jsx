import React from 'react'
import Questions from './Questions';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';


function Contactus() {
  return (
    <>
    <div className="fimdmain1" style={{marginBottom:"50px"}}>
     <div className='findmain'>

        <div className="cardfind">
         <div className='findicon'>
         <RoomOutlinedIcon/>
         </div>
         <h1>Address</h1>
         <p>7 green lake street </p>
         <p>crawfield in 47933</p>
         </div>

         <div className="cardfind">
         <div className='findicon'>
         <EmailOutlinedIcon/>
         </div>
         <h1>Email us</h1>
         <p>arkion@gmail.com</p>
         <p>helloyou@gmail.com</p>
         </div>

         <div className="cardfind">
         <div className='findicon'>
         <LocalPhoneOutlinedIcon/>
         </div>
         <h1>Call now</h1>
         <p>+ 1 800 123 456 789</p>
         <p>+ 800 123 456 789</p>
         </div>

        </div>
    </div>
    <Questions/>
    </>
  )
}

export default Contactus