import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
    
    const {showAlert} = props;
    const[credentials, setCredentials] = useState({name:"",email:"", password:"", cpassword:""})
    let navigate = useNavigate();
    
    const handleonsubmit = async(e)=>{
        e.preventDefault();
        console.log("name: ",credentials.name," email: ",credentials.email, "password: ",credentials.password );
        if(credentials.password !== credentials.cpassword)
        {
            return alert("Password and Confirm Password should be same!");
        }

        // const {name,email,password} = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser",{
        
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password})
        }); 

        const json = await response.json();
        console.log(json);
        console.log("authtoken",json.authtoken);
        console.log("success",json.success);
        if(json.success === true)
        {
            localStorage.setItem('token',json.authtoken);
            console.log("account created, navigating to home!");
            navigate('/');
            showAlert("Account created successfully","success");
        }   
        else
        {
            showAlert("Invalid Credentials","danger");
        }

    }


    const onChange = (e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }

    return (
        <div className='container mt-3'>
            <h2>Signup to continue</h2>
        <form onSubmit={handleonsubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name='name' onChange={onChange} value={credentials.name} required />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name='email' onChange={onChange} value={credentials.email} required aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" value={credentials.password}  onChange={onChange} autoComplete='on' id="password" minLength={5} required name="password"/>
            </div>
            <div className="mb-3">
                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                <input type="password" autoComplete='on' className="form-control" value={credentials.cpassword}  onChange={onChange} id="cpassword" minLength={5} required name="cpassword"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Signup
