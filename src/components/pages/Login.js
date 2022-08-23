import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { ADDUSER } from "../../action/action"
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const InitialState = {
    id: "",
    username: ""
  }

  const getData = useSelector((state) => state.stateReducer.states)

  const [userData, setUserData] = useState(InitialState);

  const {userName} = userData

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }


  const handleSubmit = (e) => {
    // if (!userName) {
      e.preventDefault()
      // return toast.warning("enter user name")
    // } else {
      dispatch(ADDUSER({ ...userData, id: uuidv4() }))
      navigate('/question')
    // }
  }

  return (
    <>
      <div className="background">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-lg-6">
              <div className="form-position">
                <h4 className='login-head'>Login Your Account</h4>
                <div className="outLine">
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-floating mb-3 form-size">
                      <input type="text" className="form-control" id="floatingInput" placeholder="User Name" name="username" onChange={(e) => handleChange(e)} />
                      <label>User Name</label>
                    </div>
                    <div className="form-group form-btn">
                      <input type="submit" className='btn btn-block text-white' style={{ backgroundColor: "#2E4053" }} />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
