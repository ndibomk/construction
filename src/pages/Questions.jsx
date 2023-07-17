import React from 'react'

function Questions() {
  return (
    <div>
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
            <div className='inputdiv'>
            <button id='btnquestion' className='inputs'>Submit</button>
            </div>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Questions