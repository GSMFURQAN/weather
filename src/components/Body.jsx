import React from "react";
import { useState } from "react";
import '../App.css'

export default function Body() {
    const [option, setOption] = useState("");
    const [imge, setImge] = useState("temp.png")
  const  handleClick = (a) =>{
        if(a === "temp"){
            setImge("temp.png")
        }else if(a === "prec"){
            setImge("prec.png")
        }else{
            setImge("wind.png")
        }
    }
  return (
    <>
      <div className="container" style={{display:"flex"}} >
          <h3>
          <button className="text-white btn btn-dark fs-3" onClick={()=> handleClick("temp")}>Temperature &nbsp;<span className="fs-3 fw-lighter text-secondary"> |</span></button>
          </h3>
          
          <h3>
          <button className="text-white btn btn-dark fs-3" onClick={()=> handleClick("prec")}>Precipitation &nbsp;<span className="fs-3 fw-lighter text-secondary"> |</span></button>
          </h3>
        
          <h3>
          <button className="text-white btn btn-dark fs-3" onClick={()=> handleClick("wind")}>Wind<span className="fs-3 fw-lighter text-secondary"> |</span></button>
          </h3>
        
        <a href={`https://www.google.com/search?q=weather&rlz=1C1ONGR_enIN972IN972&oq=we&aqs=chrome.0.69i59j69i57j35i39j46i199i433i465i512j69i60l4.1818j1j9&sourceid=chrome&ie=UTF-8`}><button className="text-white btn btn-dark fs-3" onClick={()=> handleClick("wind")}>Go Online</button></a>
        
          
          
      </div>

      <div className="container"> 
          <img src={imge} alt="" style={{width:"100%", height:"auto"}} />
          <footer className="footer">
        <div className="social-media">
            <i className="fab fa-facebook fa-2x"></i>
            <i className="fab fa-twitter fa-2x"></i>
            <i className="fab fa-instagram fa-2x"></i>
        </div>
        <p>Weather App &copy; 2022, All rights reserved</p>
    </footer>
      </div>
    </>
  );
}
