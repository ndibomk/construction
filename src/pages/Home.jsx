import React from 'react'
import ProjectsCard from './products/ProjectsCard'

const Home = () => {
  return (
    <div className="home-main-comp">
    <div className='main-home-component'>
<div className="left-home-component">
<h1> <span style={{color:'blueviolet'}} >Edyche Builders Ltd</span > ,<br /> 
The  Best Buildings & Construction Company  In Kenya</h1>
<h2>Creating Your Dream House with Affection</h2>
<button className="btn"> <p 
 style={{marginBottom:'0rem'}}>Discover Projects</p> </button>
</div>
<div className="left-home-component">
  <img src="https://arkio-react.wpocean.com/static/media/p2.2b3319864ab05fdaa9bd.jpg" alt="" />
</div>
</div>
{/* Cards */}
<div style={{textAlign:'center',marginTop:'4rem'}} >
<h2 style={{textAlign:'center',marginTop:'1rem'}}>Our Constructions</h2>
<ProjectsCard/>
</div>

    
    </div>
  )
}

export default Home