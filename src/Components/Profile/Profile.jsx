import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'


function Profile() {
    const [profile, setprofile] = useState({})
    const getprofile = () => {
            axios
                .get("https://vast-chamber-06347.herokuapp.com/api/user/me", {
                    headers: {
                        Authorization: localStorage.token,
                    },
                })
                .then(response => {
                    const profileData = response.data
                    setprofile(profileData)
                })
        }
    
      useEffect(() => {
      
        if (localStorage.token !== undefined) {
            getprofile()
        }
      }, [])
    return (
        <>
            <div>
                <Navbar />
                <div md="6">
                    <div style={{marginTop:100}}>
                        
                        <div>
                            <div>
                                {profile.firstName} {profile.lastName}
                            </div>
                            <div>{profile.email}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
            <div>
            </div>
        </>
    )
}
export default Profile

