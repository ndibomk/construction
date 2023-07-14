import React from 'react'
import ProjectsCard from './products/ProjectsCard'

const Home = () => {
  return (
    <div className="home-main-comp">
    <div className='main-home-component'>
<div className="left-home-component">
<h1>The Best Buildings In Kenya</h1>
<h2>Creating Your Dream House with Affection</h2>
<p>The most important distinguishing feature of thethe construction of our buildings is the absence of stereotypes</p>
<button className="btn">Discover Projects</button>
</div>
<div className="left-home-component">
  <img src="https://arkio-react.wpocean.com/static/media/p2.2b3319864ab05fdaa9bd.jpg" alt="" />
</div>
</div>
{/* Cards */}
<h2 style={{textAlign:'center'}}>Our Constructions</h2>
<ProjectsCard/>
    
    </div>
  )
}

export default Home