import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { deleteTour } from "../../redux/features/productSlice";
import {toast} from 'react-toastify'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { deleteUser } from "../../redux/features/authSlice";
function ResponsiveExample() {
  const [users, setUsers] = useState([]);
  function compare(a, b) {
    if (a._id < b._id) {
      return 1;
    }
    if (a._id > b._id) {
      return -1;
    }
    return 0;
  }
  const dispatch=useDispatch()
  const { user } = useSelector((state) => ({ ...state.auth }));
const[loading, setLoading]=useState(true)
  console.log(loading);
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this tour ?")) {
      dispatch(deleteUser({ id, toast }));
    }
  };

  const id = user?.result?._id;
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://hustle-kenya-7azi.onrender.com/users`
        );
        res.data.sort(compare);
        // const result = res.data.filter((_, index) => index < 30);
        setUsers(res.data);
        setLoading(false)
        console.log("user", users);
      } catch (error) {
        console.log(error);
        setLoading(false)

      }
    }
    fetchData();
  }, []);

  return (

    <>
       {loading ? (
      <>
     <Stack spacing={1}>
       {/* For variant="text", adjust the height via font-size */}
       <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
       {/* For other variants, adjust the size with `width` and `height` */}
       <Skeleton variant="circular" width={40} height={40} />
       <Skeleton variant="rectangular" width={210} height={60} />
       <Skeleton variant="rounded" width={210} height={60} />
     </Stack>
     </>
   ) : (
    <Table responsive>
      <thead>
        <tr>
          {/* {Array.from({ length: 5 }).map((_, index) => ( */}
          <>
            <th>User name</th>
            <th>User Email</th>
            <th>IsSeller</th>
            <th>Phone Number</th>
            <th>Location</th>
            <th>Image</th>
            
            
          </>

          {/* ))} */}
        </tr>
      </thead>
      <tbody>
        {users.map((item, index) => (
          <tr>

            <>
              <td key={index}>{item.name}</td>
              <td key={index}>{item.email}</td>
              <td key={index}>{item.isSeller?'Seller':'Buyer'}</td>
              <td key={index}>{item.phone}</td>
              <td key={index}>{item.location}</td>
              
              
              <td key={index}>
                <img style={{width:'2rem'}} src={item.img} alt="" />
              </td>
              <td key={index} style={{color:'red',cursor:'pointer'}} onClick={() => handleDelete(item._id)} >Delete</td>
             

             
            </>
          </tr>
        ))}
      </tbody>
    </Table>
   )}
    </>
  );
}

export default ResponsiveExample;
