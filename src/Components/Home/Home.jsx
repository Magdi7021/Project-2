import React, { useEffect, useState } from 'react'
import axios from "axios"
import Navbar from '../Navbar/Navbar';
import style from "./Home.module.css"
import homeimage1 from "../images/pexels-artem-beliaikin-452737.jpg"
import homeimage2 from "../images/tai-s-captures-azwmrA7bdyM-unsplash.jpg"
import homeimage3 from "../images/jugoslocos-QD4yCjlD44A-unsplash.jpg"
import Item from '../Item/Item';
export default function Home() {

    const [mydata, setmydata] = useState([])
    const [letter, setletter] = useState('')
    const [myArray, setmyArray] = useState([])
    const [checked, setchecked] = useState(false)
    const [imageDetails, setimageDetails] = useState('')
    const [imagecaption, setimagecaption] = useState('')
    const [category, setcategory] = useState('')
    const [homeWelcome, sethomeWelcome] = useState(true)

//===========================-------------------------------get letter search 
    let getletter = (e) => {//event
            setletter(e.target.value);
    }
//============================------------------------------display all products
    let search = async() => {
        if (letter !=='') 
            {
                let response =await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=`+letter)
                let y = (response.data.drinks)
                setmydata(y)
            }
        else
        {
            let response =await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
            let y = (response.data.drinks)
            setmydata(y)
        }
}
//===set liked products at localstorage    
    let addtoPin = (item) => 
    {
        let h= [...myArray];
        h.push(item)
        setmyArray(h)
        localStorage.setItem("likes",JSON.stringify(h))  
    }
//======get products from locals
    let pin=()=>
    {
        sethomeWelcome(false)
        if (JSON.parse(localStorage.getItem("likes")) != null) {
        let atlocalArr=JSON.parse(localStorage.getItem("likes"));
        setmydata(atlocalArr);
        }
        else {
            setmydata([]);
        }
    }
//====end get products from locals
  
//====== wrapper div
    let displayDetails=(item)=>{
        setchecked(true)
        setimageDetails(item.strDrinkThumb)
        setimagecaption(item.strIngredient2)
        setcategory(item.strCategory)
}
//====end show wrapper div

 let deleteproduct=(Item) => {
  let mynewArr=mydata.filter((product)=>product!==Item)
   setmydata(mynewArr);
 }

//==-start close details 
    let closeDetails = () => {
    setchecked(false)
    }    
    
//=====end close details 


//============================----------------------------------start 
    useEffect(() => {
        search();
    }, [])
    
    let returntohome = () => {
        sethomeWelcome(true)
        search()
  }
 

    return (
        <>
          <Navbar funsearch={search} fungetletter={getletter} funadd={addtoPin} pin={pin} returntohome={returntohome} />
          {homeWelcome?<div className={style.homepage}> <div id="carouselExampleDark" class="carousel carousel-light fs-1 slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img style={{height:"100%"}} src={homeimage1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img  style={{height:"100%"}} src={homeimage2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img  style={{height:"100%"}} src={homeimage3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> </div>:''}
            <div className="wrapperForCards"> 
                    <div className="container">
                        <div className="row mt-5">
                        {mydata.map((item, index) =>  <Item  key={index} deleteproduct={deleteproduct} displayDetails={displayDetails} funadd={addtoPin} itemInfo={mydata[index]}  />)}
                    </div>
                </div>
            </div>
            {checked ? <div className={style.mywrapper}><div className={style.closeIcon} > <i onClick={closeDetails} className="far fa-times-circle fa-2x text-danger"></i> </div><img className={style.myimagewrapper} src={imageDetails} alt="image" /> <h3> Category:{ category}</h3> <h4>{imagecaption }</h4> </div>:''}
        </>
    )
}
