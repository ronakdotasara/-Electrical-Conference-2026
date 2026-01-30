import React from 'react'
import "../components/css/FooterSection.css"
import {Link} from "react-router-dom"

const FooterSection = () => {
  return (
    <div className='fm'>
      <div className='footer'>
        <div className='footerleft'>
          <p className='footerleftpone'>
            This site is created, maintained, and managed by the Organizing Committee of PICS-2026,
            Department of Electrical Engineering, National Institute of Technology Hamirpur.
          </p>

          <p className='footerleftptwo'>
            For assistance, <span>Contact :</span> Dr. Katam Nishanth ( Email: katam@nith.ac.in, Phone: 9441843624),
            <br />
            <span className='contactspan'>
              Dr. Pankaj K. Mishra ( Email: pmishra@nith.ac.in, Phone: 9101514943)
            </span>
          </p>
        </div>

        <div className='footerright'>
          <p className='footerrightp'>
            © Copyright 2026 NITHamirpur - All rights reserved.
            Use of this website signifies your agreement to our Terms and Conditions.
            <br /><br />

            <a
              href="https://www.pics2026nith.com/cmt-acknowledgement.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline", color: "inherit" }}
            >
              CMT Acknowledgement
            </a>
            <br />
            <Link to="/About"  style={{ textDecoration: "underline", color: "inherit" }}>
            PICS 2025</Link>
          
          </p>
        </div>
      </div>

      <div className="mentions">
        <h2>Website designed and maintained by :</h2>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h3>&nbsp;&nbsp;&nbsp;Shashwat Tiwari</h3>
          <a
            href="https://www.linkedin.com/in/shashwat-tiwari-2307b52a3"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://www.instagram.com/_shashwat.19/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
            />
          </a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sahil Sharma</h3>
          <a
            href="https://www.linkedin.com/in/sahil-sharma-380ba1248"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://www.instagram.com/_sahil_.41"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default FooterSection
