import axios from 'axios';
import React, { useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom';

export default function Login() {
  let [loading, setLoading] = useState(false); 
  const navigate=useNavigate()

  let [user, setUser] = useState({
   
    email: '', password: ''
});

function getUser(e) {

    let myUser = { ...user };//Note
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
    console.log(myUser);
}
  async function formSubmit(e) {
    e.preventDefault();
    setLoading(true);
    
        let {data}= await axios.post(`https://vast-chamber-06347.herokuapp.com/api/user/auth`, user) 
        console.log(data)
        if (true) {
            console.log("success")
            localStorage.token=data
            setLoading(false);
            navigate("/profile")
        }
        else {
            setLoading(false);
        }
    
}
    return (
        <>
            {/* navbar */}
           <div>
  <nav style={{boxShadow:"1px -5px 10px black"}} className="navbar navbar-expand-md navbar-light bg-light ">
    <div className="container">
      <a style={{fontSize:"30px",color:"brown"}} className="navbar-brand fw-bold  " href="#">juice club</a>
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
    </div>
    </div>
</nav>
</div>

            
{/* end nav  */}

        <form className="vh-100 d-flex text-light justify-content-center align-items-center "onSubmit={formSubmit}>
            <div style={{ height:"450px ", borderRadius:"15px "}} className=" p-2 col-md-3 bg-dark text-center pt-3  ">
                <h4 >Email</h4>
                <input  onChange={getUser} name="email" className="form-control mb-5 w-75 m-auto" />
                <h4> Password </h4>
                <input  onChange={getUser} name ="password" type="password" className=" m-auto mb-5 form-control w-75 m-3" />
                <button className=" btn btn-info px-5 fw-bold py-1"> Log in </button>
                <p className="mt-2 mb-5"> Sign Up </p>
                <h6> Forget password</h6>
            </div>
        </form>
        </>
    )
}
