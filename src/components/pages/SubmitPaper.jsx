import React from "react";

import "../css/SubmitPaper.css";
import backgroundImage from "../../assets/background.jpg.jpeg";
import FooterSection from "../FooterSection";
import Brochure from "../../assets/PICS 2026 Brochure.pdf";

export const SubmitPaper = () => {
  return (
    <div className="mainDiv">
      <p className="SubmitPaper" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%'}}><h1>Paper Submission</h1></p>
      <div className="PaperSubmitData">
        <div className="SubmitLink">
            <p className="link">
                <span>The link for the papers submission is  : <a href="https://cmt3.research.microsoft.com/PICS2026">https://cmt3.research.microsoft.com/PICS2026</a> </span>
            </p>
            <p className="downlink">
                <span>Download the <a href={Brochure} className="linkupdate">CALL FOR PAPERS</a></span>
            </p>
        </div>
        <div className="Description">
          {/* <p className="para1">
            It is proposed to publish the peer-reviewed and selected papers of the conference as proceedings with Springer in their prestigious Lecture Notes in Electrical Engineering (LNEE) series, subject to final approval. Selected papers will be considered for publication after completion of the peer-review process and fulfillment of Springer’s quality requirements. Springer will conduct its own quality checks, and only papers that successfully pass these checks will be published. Springer Nature does not charge any fee for publication of Non-Open Access content. Abstracts, extended abstracts, and short papers (less than 4 pages) will not be considered for publication.          
            </p> */}
            <p className="para1">It is planned to publish the peer reviewed and selected papers of conference as proceedings with Springer in their prestigious “Lecture Notes in Electrical Engineering” series. For detailed instructions for authors and editors of conference proceedings, 
                      kindly visit the following link: <a href='https://www.springer.com/us/authors-editors/conference-proceedings'> https://www.springer.com/us/authors-editors/conference-proceedings</a>. Select papers from the conference will be published by Springer as a proceedings book volume. Springer will conduct quality checks on the accepted papers and only papers that pass these checks will be published. Springer Nature does not charge any money for publication of Non-Open Access content. Abstracts/extended abstracts and short papers (less than 4 pages) are not considered for publication. All communication regarding the proceedings must be directed to the conference organizers or volume editors. Paper authors should not contact Springer Nature directly.
             </p>
          
           <p className="para2">Springer paper formatting instructions and templates for PICS-2026 are available here <a href="https://drive.google.com/file/d/1tYPp2cGK2BS4f4fB8EqpTLRvzEqIXaxz/view">Word template</a> and <a href="https://www.overleaf.com/latex/templates/springer-conference-proceedings-template-updated-2022-01-12/wcvbtmwtykqj">Latex</a> .
              Authors are requested to prepare their manuscripts using the Springer Conference Proceedings format for uniformity and to facilitate the publication process.</p>
            <p className="para3">Please submit your paper here: <a href="https://cmt3.research.microsoft.com/PICS2026">https://cmt3.research.microsoft.com/PICS2026</a></p>
        </div>
      </div>
      <FooterSection/>
    </div>
  )
};
