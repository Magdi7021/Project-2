import React, { useState,useEffect } from 'react'
import axios from 'axios';

// ==========================
export default function Item({ itemInfo ,funadd,displayDetails,deleteproduct}) {
    
const [iconColor, seticonColor] = useState(false)
    let changeIconColor = () => {
        if (iconColor == true) {
        seticonColor(false)
        }
        else {
        seticonColor(true)
        }
    }
    return (
        <>
        
            <div style={{backgroundColor:"rgb(245, 240, 240)"}} className="col-md-4 mb-5 p-2">
                <div  className="main-item   ">
                <div style={{ borderRadius:"40px",backgroundColor:"white"}} className="m-auto border border-5 border-black pt-2 ps-2 pe-2   mb-3 text-light">
            {/* title */}
            <div className="title d-flex justify-content-between align-items-center text-dark">
                <div className="  d-flex justify-content-center align-items-center">
                    <img src={itemInfo.strDrinkThumb}  className="rounded-circle mb-2 border border-4 border-light"  width="60px" height="60px"  alt="not found" />
                    <h3 className="ps-2">{itemInfo.strDrink}</h3> <br />
                </div>
                        </div>
                        <p style={{ height:"22px",overflow:"hidden"}} className="text-dark">{ itemInfo.strInstructions}</p>
                {/* end  title */}
                        
                {/* image  */}
            <div  className="col-md-10 m-auto ">
                <div className="item">
                    <img src={itemInfo.strDrinkThumb}  style={{ height:"400px",borderRadius:"20px"}} className="w-100"    alt="not found" />
                    </div>
                </div>
                {/* category  */}
                <div className="d-flex justify-content-around " style={{height:"50px ",borderBottomLeftRadius:"40px",borderBottomRightRadius:"40px" }}  >
                    <i onClick={()=>displayDetails(itemInfo)} class="fas fa-info-circle text-dark fa-2x mt-2"></i>
                    <i  onClick={()=>deleteproduct(itemInfo)} class="fas fa-trash  text-dark fa-2x mt-2"></i>
                    <span onClick={changeIconColor}> { iconColor?<i onClick={()=>funadd(itemInfo)} style={{color:"red"}} class="fas fa-cart-plus fa-2x mt-2"></i>:<i onClick={()=>funadd(itemInfo)} class="fas fa-cart-plus text-dark fa-2x mt-2"></i> }</span>
                </div>
                {/*end  category  */}
            </div>
        </div>
        </div>

            
            </>
    )
}
