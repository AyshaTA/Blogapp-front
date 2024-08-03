import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const navigate=useNavigate()
const [input,setInput]=useState(
    {"email":"","password":""}
)
const inputHandler=(event)=>{
    setInput({...input,[event.target.name]:event.target.value})
}
const readValue=()=>{
    console.log(input)

    axios.post("http://localhost:3031/signln",input).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="Incorrect Password"){
                alert("Incorrect Password")
            }else if (response.data.status=="Invalid email id"){
                alert("Invalid email id")
            }else{
                let token =response.data.token
                let userId =response.data.userId
                console.log(token)
                console.log(userId)

                sessionStorage.setItem("userId",userId)
                sessionStorage.setItem("token",token)

                navigate("/create")
            }
        }
    ).catch(
        (error)=>{
            console.log(error)
        }
    )
}
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col xxl-12">
                <div className="row g-3 col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Email Id</label>
                <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler}/>
                </div>
                <div className="row g-3 col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Password</label>
                <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler}/>
                </div>
                <div><br></br></div>
                <div className="row g-3 col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={readValue} className="btn btn-success">SignIn</button>
                </div>
                <div><br></br></div>
                <div className="row g-3 col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <a href="/signUp" className="btn btn-secondary">New Users Click Here</a>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn