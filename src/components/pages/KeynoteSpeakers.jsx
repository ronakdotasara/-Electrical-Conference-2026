import React from "react";

import "../css/KeynoteSpeakers.css";
import backgroundImage from "../../assets/background.jpg.jpeg";
import FooterSection from "../FooterSection";
import keynote_speaker from "../../assets/keynote_speakers.png";
import a from "../../assets/KS01.png";
import b from "../../assets/KS02.png";
import c from "../../assets/KS03.png";
import d from "../../assets/KS04.png";



const cards = [
  {
    id: 1,
    image: a,
    name: 'Prof. Sukumar Mishra,',
    description: 'Director IIT Dhanbad',
  },
  {
    id: 2,
    image: b,
    name: 'Prof. N. P. Padhy,',
    description: 'Director MNIT Jaipur',
  },
  {
    id: 3,
    image: c,
    name: 'Prof.  Bidyadhar Subudhi ',
    description: 'Director, NIT Warrangal',
  },
  {
    id: 4,
    image: d,
    name: 'Prof. Patrick Wheeler',
    description: 'University of Nottingham, UK',
  },
  
];

export const KeynoteSpeakers = () => {
  return (
    <div className="mainDiv">
      <p className="KeynoteSpeakers" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%'}}><h1>Keynote Speakers</h1></p>
      {/* <div className="dataContent">
        <p>Updating Soon...</p>
        <img src={keynote_speaker} alt="img" />
      </div> */}
      <div className="card-grid-container">
      {/* <h2 className="heading">Our Picks</h2> */}
      <div className="card-grid">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{card.name}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
      <FooterSection/>
    </div>
  )
};
