import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';


function Contactus() {
  return (
    <div className="fimdmain1" style={{marginBottom:"50px",padding:'1rem'}}>
      <h1 style={{textAlign:'center'}}>Contact Us</h1>
     <div className='findmain'>

        <div className="cardfind">
         <div className='findicon'>
         <RoomOutlinedIcon/>
         </div>
         <h1>Address</h1>
         <p>Nairobi,Rongai </p>
         <p>Kenya</p>
         </div>

         <div className="cardfind">
         <div className='findicon'>
         <EmailOutlinedIcon/>
         </div>
         <h1>Email us</h1>
         <p>edyche@gmail.com</p>
         <p>helloyou@gmail.com</p>
         </div>

         <div className="cardfind">
         <div className='findicon'>
         <LocalPhoneOutlinedIcon/>
         </div>
         <h1>Call now</h1>
         <p>+254 716 483268</p>
         <p>+25 716 483268</p>
         </div>

        </div>
        <div>
          <hr />
        <div className='contactheader'>
        <h1>Have any questions</h1>
        <p>Its a long established fact that a reader will be distracted
            content of page when looking
        </p>
        </div>
        <div className='questionform'>
            <div className='inputcontainer'>
            <div className='inputdiv'>
            <input className='inputs' type="text"  placeholder='name'/>
            <input className='inputs' type="text" placeholder='Lastname' />
            </div>

            <div className='inputdiv'>
            <input className='inputs' type="email" placeholder='Email' />
            <input className='inputs' type="text"  placeholder='Service'/>
            </div>
            <div>

          <div className='inputdiv'>
            <textarea className='inputs' id='textarea' type="text" placeholder='Message' />
            
            </div>
            <button style={{marginBottom:'1rem',width:'100%'}} className="btn">Send your message</button>
            </div>

        </div>
        </div>
    </div>
    </div>
  )
}

export default Contactus