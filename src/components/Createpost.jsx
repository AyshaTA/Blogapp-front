import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Createpost = () => {
const [token,setToken]=useState(sessionStorage.getItem("token"))
const [input,setInput]=useState(
    {"Message":"","userId": sessionStorage.getItem("userId")}
)
const inputHandler=(event)=>{
    setInput({...input,[event.target.name]:event.target.value})
}

const readValue=()=>{
    console.log(input)
    console.log(token)
    axios.post("http://localhost:3031/create",input,{
        headers:{"token":token,"Content-Type":"application/json"}
    }).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="Success"){
                alert("Post Successfully")
            }else{
                alert("Something went worng")
            }
        }
    ).catch(
        (error)=>{console.log(error)}
    )
}

  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            
                            <label htmlFor="" className="form-label">Post A Message</label>
                            <textarea name="Message" id="" className="form-control" value={input.Message} onChange={inputHandler}></textarea>
                        </div>
                        <div><br></br></div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button onClick={readValue} className="btn btn-success">POST</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Createpost