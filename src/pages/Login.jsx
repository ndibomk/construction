import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/features/authSlice";
import { toast } from "react-toastify";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading } = useSelector((state) => ({ ...state.auth }));

  const initialState = {
    email: "",
    task: "",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.task !== form.confirmPassword) {
      return toast.error("Password should match");
    }
    dispatch(register({ form, navigate, toast }));
  };
  const [formValue, setUser] = React.useState(initialState);
  const { task } = formValue;
  const handleSubmit1 = (e) => {
    e.preventDefault();
    if (task) {
      dispatch(login({ formValue, navigate, toast }));
    }
  };
  return (
    <div className="input-form">
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
            <form onSubmit={handleSubmit1}>
              {/* <!-- Email input --> */}
              <h3>Sign in to your Account</h3>
              <div class="form-outline mb-4">
                <input onChange={(e)=>setUser({...formValue,email:e.target.value})} type="email" id="form1Example1" class="form-control" />
                <label class="form-label" for="form1Example1">
                  Email address
                </label>
              </div>

              {/* <!-- Password input --> */}
              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example2"
                  class="form-control"
                  onChange={(e)=>setUser({...formValue,task:e.target.value})}
                />
                <label class="form-label" for="form1Example2">
                  Password
                </label>
              </div>

              {/* <!-- 2 column grid layout for inline styling --> */}
              <div class="row mb-4">
                <div class="col d-flex justify-content-center">
                  {/* <!-- Checkbox --> */}
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                      checked
                    />
                    <label class="form-check-label" for="form1Example3">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                </div>

                <div class="col">
                  {/* <!-- Simple link --> */}
                  <a href="#!">Forgot password?</a>
                </div>
              </div>

              {/* <!-- Submit button --> */}
              <button type="submit" class="btn btn-primary btn-block">
                Sign in
              </button>

              {/* </Link> */}
              <Link to="/register">
                <p> New user? Sign up</p>
              </Link>

              {/* <Link to="/forget"> */}
              {/* <button */}
              {/* // className="reg-btns" */}
              {/* // onClick={(e) => setStep(step - 4)} */}
              {/* // > */}
              {/* New user? Sign up */}
              {/* </button> */}
              {/* </Link> */}
            </form>
          </div>
        )}
      </>
    </div>
  );
};

export default Login;
