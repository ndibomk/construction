import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminDashboard = () => {
    function compare(a, b) {
        if (a._id < b._id) {
          return 1;
        }
        if (a._id > b._id) {
          return -1;
        }
        return 0;
      }
    const[users,setUsers]=useState([])
    const[products,setProducts]=useState([])
    useEffect(() => {
        async function fetchData() {
          try {
            const res = await axios.get(
              `https://hustle-kenya-7azi.onrender.com/products`
            );
            res.data.sort(compare);
            // const result = res.data.filter((_, index) => index
            setProducts(res.data);
          } catch (error) {
            console.log(error);
          }
        }
        fetchData();
      }, []);
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
    <div className="admin-main">
      <div className="admin-left">
        <p>
          {" "}
          <Link to="/users">Users</Link>
        </p>
        <p>
          {" "}
          <Link to="/all-products">Products</Link>
        </p>
        <p>
          {" "}
          <Link to="/orders">Orders</Link>
        </p>
        <p>
          {" "}
          <Link to="/all-transactions">Mpesa Activation</Link>
        </p>
      </div>
      <div className="admin-right">
        <h2>Statistics</h2>
        <div className="stats-top">
          <div className="stats-users">
            <h4>Users</h4>
            <p>{users.length -1}</p>
          </div>
          <div className="stats-users">
            <h4>Products</h4>
            <p>{products.length}</p>
          </div>
        </div>
        <div className="stats-top">
          <div className="stats-users">
            <h4>Total Amount</h4>
            <p> ksh {  products.length * 50 *(users.length -1) }</p>
          </div>
          <div className="stats-users">
            <h4>Prediction</h4>
            ksh 10000
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
