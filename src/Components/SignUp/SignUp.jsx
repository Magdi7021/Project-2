import axios from 'axios';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';


export default function SignUp(props) {
    let [loading, setLoading] = useState(false);



    let [user, setUser] = useState({
        firstName: '', lastName: '',
        email: '', password: ''
    });

    function getUser(e) {

        let myUser = { ...user };//Note
        myUser[e.target.name] = e.target.value;
        setUser(myUser);
        console.log(myUser);
    }
let x = [ {
        firstname: '', lastname: '',
        email: '', pass: ''
    }]

    async function formSubmit(e) {
        e.preventDefault();
        setLoading(true);
        
            let {data}= await axios.post(`https://vast-chamber-06347.herokuapp.com/api/user`, user) 
            console.log(data)
            if (true) {
                console.log("success")
                setLoading(false);
            }
            else {
                setLoading(false);
            }
        
    }
    return (
        <>
                     {/* navbar */}
           <div>
  <nav  className="navbar navbar-expand-md navbar-light bg-light ">
    <div className="container">
      <a style={{fontSize:"30px",color:"brown"}} className="navbar-brand fw-bold  " to="#">juice club</a>
      <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item mx-4 active">
            <NavLink className="nav-link" to="/home"> <i className="fa fa-home fa-2x text-info"></i> <span className="visually-hidden">(current)</span></NavLink>
          </li>
        
        </ul>
            <NavLink className="nav-link text-light fs-5 fw-bold  ms-4 text-dark" to="/login"> Log in <i class="fas fa-user-check text-dark"></i> </NavLink>
            <NavLink className="nav-link text-light fs-5 fw-bold  ms-4 text-dark" to="/register"> sign up <i class="fas fa-user-check text-dark"></i> </NavLink>
            <NavLink className="nav-link text-light fs-5 fw-bold  ms-4 text-dark" to="/profile"> <i class="fas fa-user-alt"></i>  </NavLink>

    </div>
    </div>
</nav>
</div>
            
{/* end nav  */}
        <div>
<h1  className="text-center mt-5">Sign up Now</h1>
            <div className="w-50 mx-auto py-4 ">
                

                <form className="m-auto " onSubmit={formSubmit}>
                        <div style={{  borderRadius:"15px "}} className="content  w-50 m-auto bg-dark text-light p-3 ">

                    <div className='my-2 m-auto'>
                        <label className="my-2 fw-bold fs-5 " htmlFor="firstname">First Name</label>
                        <input onChange={getUser} type="text" className='form-control w-100' name="firstName" />

                    </div>
                    <div className='my-2'>

                        <label className="my-2 fw-bold fs-5 "htmlFor="lastname">Last Name</label>
                        <input onChange={getUser} type="text" className='form-control w-100' name="lastName" />
                    </div>

                    <div className='my-2'>

                        <label className="my-2 fw-bold fs-5 "htmlFor="email">Email</label>
                        <input onChange={getUser} type="email" className='form-control w-100' name="email" />
                    </div>

                    <div className='my-2'>

                        <label className="my-2 fw-bold fs-5 "htmlFor="pass">password</label>
                        <input onChange={getUser} type="pass" className='form-control w-100' name="password" />
                    </div >


                            <div className=" text-center">
                                <button type='submit' className=' btn btn-info'>
                        {loading ? <i className='fas fa-spinner fa-spin'></i> : 'sign up'}
                    </button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
        

        </>
    )
}
