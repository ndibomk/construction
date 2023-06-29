import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const SocialPlace = () => {
    const[users,setUsers]=useState([])

    function compare(a, b) {
        if (a._id < b._id) {
          return 1;
        }
        if (a._id > b._id) {
          return -1;
        }
        return 0;
      }
    useEffect(() => {
        async function fetchData() {
          try {
            const res = await axios.get(
              `https://hustle-kenya-7azi.onrender.com/users`
            );
            res.data.sort(compare);
            // const result = res.data.filter((_, index) => index
            setUsers(res.data);
          } catch (error) {
            console.log(error);
          }
        }
        fetchData();
      }, []);
  return (
    <>
    <h2 style={{textAlign:'center'}}> Social Place</h2>
    

    <div class="row p-5 row-cols-1 row-cols-md-3 g-4">
        {users.map((user)=>{
return(
    
    <div class="col ">
    <div class="card h-50">
    <Link to={`/social-profile/${user._id}`}>
      <img src={user.img} class="card-img-top" alt="Skyscrapers"/>
 
      <div class="card-body">
        <h5 class="card-title">{user.name}</h5>
        <p class="card-text">
            {user.location}
        </p>
        <p class="card-text">
            {user.phone}
</p>
      </div>
      </Link>
      <div class="card-footer d-flex " style={{display:'flex',
    justifyContent:"space-around"}}>
      <button type="button" class="btn btn-success">Message</button>
      <button type="button" class="btn btn-danger">Follow</button>
      </div>
    </div>
  </div>
 
)
        })}
 
 

 
 
 
 
 
 
 
 
 
 
 
  {/* <div class="col"> */}
    {/* <div class="card h-100"> */}
      {/* <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" class="card-img-top" alt="Los Angeles Skyscrapers"/> */}
      {/* <div class="card-body"> */}
        {/* <h5 class="card-title">Card title</h5> */}
        {/* <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p> */}
      {/* </div> */}
      {/* <div class="card-footer"> */}
        {/* <small class="text-muted">Last updated 3 mins ago</small> */}
      {/* </div> */}
    {/* </div> */}
  {/* </div> */}
  {/* <div class="col"> */}
    {/* <div class="card h-100"> */}
      {/* <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" class="card-img-top" alt="Palm Springs Road"/> */}
      {/* <div class="card-body"> */}
        {/* <h5 class="card-title">Card title</h5> */}
        {/* <p class="card-text"> */}
          {/* This is a wider card with supporting text below as a natural lead-in to */}
          {/* additional content. This card has even longer content than the first to show */}
          {/* that equal height action. */}
        {/* </p> */}
      {/* </div> */}
      {/* <div class="card-footer"> */}
        {/* <small class="text-muted">Last updated 3 mins ago</small> */}
      {/* </div> */}
    {/* </div> */}
  {/* </div> */}
</div>

</>
  )
}

export default SocialPlace