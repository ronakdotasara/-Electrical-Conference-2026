import React from "react";

import "../css/About.css";
import backgroundImage from "../../assets/background.jpg.jpeg";
import FooterSection from "../FooterSection";
import Brochure from "../../assets/Brochure PICS.pdf";

export const About=()=>{
    return(
         <div className="mainDiv">
      <p className="SubmitPaper" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%'}}><h1>About PICS-2025</h1></p>
      <div className="PaperSubmitData">
        <div className="SubmitLink">
            <p className="link">
                <span>PICS 2025 Website: <a href="https://pics2025nith.com/">https://pics2025nith.com</a> </span>
            </p>
        </div>
      
          <p className="para1">The First International Conference on Power and Intelligent Control Systems (PICS-2025) was successfully organized by the Department of Electrical Engineering, NIT Hamirpur, 
during July 04–05, 2025. Over 500 papers were reviewed, 
with around 150 papers accepted and 110 papers presented 
at the conference. The presented papers will be published by 
Springer (Scopus Indexed) in the Lecture Notes in Electrical 
Engineering series. Motivated by the success of PICS-2025, 
the conference is being continued as a series. </p>
            
      </div><br/><br/><br/>
      <FooterSection/>
    </div>
    )
}