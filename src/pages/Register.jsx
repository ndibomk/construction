import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { SlKey } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";
import { login, register } from "../redux/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import FileBase from "react-file-base64";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
function MultiStepForm() {
  const [step, setStep] = useState(1);
  const { user, loading } = useSelector((state) => ({ ...state.auth }));
  console.log("status", loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setErrorMessage("");
  };

  const numberRange = Array.from(
    { length: 78299 - 78201 + 1 },
    (_, index) => index + 78201
  ).filter((number) => number !== 78234 && number !== 78236);

  console.log("range", numberRange);

  const handleNext = (e) => {
    e.preventDefault();

    if (inputValue === "") {
      setErrorMessage("Please enter a number.");
    } else {
      const number = parseInt(inputValue, 10);
      if (numberRange.includes(number)) {
        // Number is within the range, do something
        setStep(step + 1);
        toast.success("Zip code is within the range");
      } else {
        toast.error("Invalid Address .Please register with a valid address.");
      }
    }
  };
  const handlePrev = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setStep(step + 4);
  };
  const EmailNext = () => {
    setStep(step + 1);
  };
  const initialValues = {
    firstname: "",
    lastname: "",
    password: "",
    confirmPassword: "",
    task: "",
    email: "",
    phone: "",
    img: "",
    isSeller: false,
    location: "",
    date: "",
  };
  const [form, setForm] = useState(initialValues);
  console.log(form);

  const handleSeller = (e) => {
    setForm((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.task !== form.confirmPassword) {
      return toast.error("Password should match");
    }
    dispatch(register({ form, navigate, toast }));
  };
  const [formValue, setUser] = useState(initialValues);
  const { task } = formValue;

  const handleSubmit1 = (e) => {
    e.preventDefault();
    if (task) {
      dispatch(login({ formValue, navigate, toast }));
    }
  };
  return (
    <div className="MultiStepForm">
      <>
        {loading ? (
          <Stack spacing={1}>
            {/* For variant="text", adjust the height via font-size */}
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            {/* For other variants, adjust the size with `width` and `height` */}
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="rounded" width={210} height={60} />
          </Stack>
        ) : (
          <div className="register">
                          <h3 style={{ marginTop: "3rem" }}>Sign up </h3>

            <form onSubmit={handleSubmit}>
              <div className="sep">
                <div className="sep-left">
                  <div
                    style={{ marginTop: "0rem" }}
                    className="form-outline mb-4"
                  >
                    <input
                      type="text"
                      required
                      className="form-control"
                      onChange={(e) =>
                        setForm({ ...form, firstname: e.target.value })
                      }
                      placeholder=" First Name"
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      required
                      className="form-control"
                      type="text"
                      onChange={(e) =>
                        setForm({ ...form, lastname: e.target.value })
                      }
                      placeholder=" Last Name"
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <span></span>
                    <input
                      className="form-control"
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      type="email"
                      placeholder=" &nbsp; Your email"
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <span></span>
                    <input
                      className="form-control"
                      onChange={(e) =>
                        setForm({ ...form, location: e.target.value })
                      }
                      type="text"
                      placeholder=" &nbsp; Your Loacation"
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <span></span>
                    <input
                      className="form-control"
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      type="number"
                      placeholder=" &nbsp; Phone Number"
                    />
                  </div>
                </div>
                <div className="sep-left">
                  <div className="form-outline mb-4">
                    <span></span>
                    <input
                      className="form-control"
                      onChange={(e) =>
                        setForm({ ...form, date: e.target.value })
                      }
                      type="date"
                      placeholder=" &nbsp; Date of birth"
                    />
                  </div>
                  <div class="col-auto">
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        onChange={handleSeller}
                        type="checkbox"
                        id="form11Example4"
                      />
                      <label class="form-check-label" for="form11Example4">
                        Activate the seller account
                      </label>
                    </div>
                  </div>
                  {/* <div className="input"> */}
                  <div className="toggle">
                    {/* <label htmlFor="">Activate the seller account</label> */}
                    <label className="switch">
                      {/* <input type="checkbox" onChange={handleSeller} /> */}
                      {/* <span className="slider round"></span> */}
                    </label>
                  </div>
                  {/* </div> */}

                  <div className="form-outline mb-4">
                    <span></span>
                    <input
                      className="form-control"
                      onChange={(e) =>
                        setForm({ ...form, task: e.target.value })
                      }
                      type="password"
                      placeholder=" &nbsp; Password"
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <span></span>
                    <input
                      required
                      className="form-control"
                      type="password"
                      placeholder=" &nbsp; Confirm Password"
                      onChange={(e) =>
                        setForm({ ...form, confirmPassword: e.target.value })
                      }
                    />
                  </div>
                  <p>profile Photo</p>
                  <FileBase
                    type="file"
                    placeholder="mpesa screenshot"
                    multiple={false}
                    onDone={({ base64 }) => setForm({ ...form, img: base64 })}
                  />
                  <div className="next-reg">{/* </div> */}</div>
                </div>
              </div>
              {/* <!-- Submit button --> */}
              <div style={{
  width: "50%",
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  justifyContent:'center'
}}>
              <button
   style={{
     width: "60%",
     display: "flex",
     textAlign: "center",
     alignItems: "center",
   }}
   type="submit"
   class="btn btn-primary btn-block"
 >
   Sign Up
 </button>{" "}
              </div>
             
             
             
             
             
             
             
             
             
             
             
             
            </form>
          </div>
        )}
      </>
    </div>
  );
}

export default MultiStepForm;

// import * as React from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { Button } from "@mui/material";
// import { register } from "../redux/features/authSlice";

// const Register = () => {
//   const [user, setUser] = React.useState({
//     name: "",
//     email: "",
//     password: "",
//     img: "",

//     isSeller: false,
//     location: "",
//     date: "",
//     phone: "",
//   });
//   console.log(user);
//   //   const navigate = useNavigate();
//   const handleChange = (e) => {
//     setUser((prev) => {
//       return { ...prev, [e.target.name]: e.target.value };
//     });
//   };
//   // const { user, loading } = useSelector((state) => ({ ...sta
//   // console.log("status", loading);
//     const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const handleSeller = (e) => {
//     setUser((prev) => {
//       return { ...prev, isSeller: e.target.checked };
//     });
//   };
//     const handleSubmit = async (e) => {
//   e.preventDefault();
//   console.log('user',user);
//   if(user.email){
//     dispatch(register({user, navigate}))

//   }
//     };

//   return (
//     <div className="input-form">
//       <h1>Create a new account</h1>
//       <Box
//         component="form"
//         sx={{
//           "& .MuiTextField-root": { m: 3, width: "40ch" },
//         }}
//         noValidate
//         autoComplete="off"
//         onSubmit={handleSubmit}
//       >
//         <div>
//           <TextField
//             label="Your Name"
//             id="filled-size-small"
//             placeholder="John Doe"
//             variant="filled"
//             size="small"
//             onChange={handleChange}
//             name="name"
//           />

//           <TextField
//             label="Your Location"
//             id="filled-size-small"
//             placeholder="Nairobi"
//             variant="filled"
//             size="small"
//             onChange={handleChange}
//             name="location"
//           />
//         </div>
//         <div>
//           <TextField
//             label="Your Email"
//             id="filled-size-small"
//             placeholder="johndoe@gmail.com"
//             variant="filled"
//             type="email"
//             size="small"
//             onChange={handleChange}
//             name="email"
//           />

//           <TextField
//             placeholder="profile photo"
//             variant="filled"
//             type="file"
//             size="small"
//             onChange={handleChange}
//             name="img"
//           />
//         </div>
//         <div>
//           <TextField
//             label="Your Password"
//             id="filled-size-small"
//             placeholder=""
//             variant="filled"
//             type="password"
//             size="small"
//             onChange={handleChange}
//             name="password"
//           />
//           {/* <div className="toggle"> */}
//           <label style={{ marginLeft: "2rem", marginTop: "3rem" }} htmlFor="">
//             Activate the seller account
//           </label>
//           <label className="switch">
//             <input type="checkbox" onChange={handleSeller} />
//             <span className="slider round"></span>
//           </label>
//           {/* </div> */}
//         </div>
//         <div>
//           <TextField
//             label="Your phone Number"
//             id="filled-size-small"
//             placeholder="0700000000"
//             variant="filled"
//             type="text"
//             size="small"
//             onChange={handleChange}
//             name="phone"
//           />
//           <TextField
//             label="Your date of birth"
//             id="filled-size-small"
//             variant="filled"
//             type="date"
//             size="small"
//             onChange={handleChange}
//             name="date"
//           />
//         </div>
//         <button onSubmit={handleSubmit} style={{ width: "90%" }} variant="contained">
//           Register
//         </button>
//       </Box>
//     </div>
//   );
// };

// export default Register;
