import React from "react";

import "../css/AdvisoryCommittee.css";
import Card from "../Card";
import backgroundImage from "../../assets/background.jpg.jpeg";
import FooterSection from "../FooterSection";



export const AdvisoryCommittee = () => {
  const professors = [
  { name: "Prof. Akshay Kumar Rathore", institute: "Singapore Institute of Technology, Singapore" },
  { name: "Prof. Patrick Wheeler", institute: "University of Nottingham, UK" },
  { name: "Prof. Steven Li", institute: "Western New England University, USA" },
  { name: "Prof. Sanjeevikumar Padmanaban", institute: "University of South-Eastern Norway" },
  { name: "Prof. Ramesh Bansal", institute: "University of Sharjah, UAE" },
  { name: "Prof. Mohamed Benbouzid", institute: "University of Brest, France" },
  { name: "Prof. Akhtar Kalam", institute: "Victoria University, Australia" },
  { name: "Prof. Mohan Kolhe", institute: "University of Agder, Norway" },
  { name: "Dr. Baseem Khan", institute: "Hawassa University, Ethiopia" },
  { name: "Dr. Mahdi Khosravy", institute: "Cross Labs, Tokyo, Japan" },
  { name: "Dr. Neeraj Gupta", institute: "Kevadiya Inc., USA" },
  { name: "Prof. Bhim Singh", institute: "IIT Delhi" },
  { name: "Prof. Radhakant Padhi", institute: "IISc Bangalore" },
  { name: "Prof. Sukumar Mishra", institute: "IIT Delhi" },
  { name: "Prof. N. P. Padhy", institute: "Director, MNIT Jaipur" },
  { name: "Prof. H. O. Gupta", institute: "IIT Roorkee" },
  { name: "Prof. Deepak M. Fulwani", institute: "IIT Jodhpur" },
  { name: "Prof. Prerna Gaur", institute: "NSUT Delhi" },
  { name: "Prof. Bharat Singh Rajpurohit", institute: "IIT Jodhpur" },
  { name: "Prof. Rohit Bhakar", institute: "MNIT Jaipur" },
  { name: "Prof. K. S. Nagla", institute: "NIT Jalandhar" },
  { name: "Prof. Akhil Rajan Garg", institute: "MBM University Jodhpur" },
  { name: "Prof. Pragati Kumar", institute: "Vice-Chancellor, SMVDU Jammu" },
  { name: "Prof. Shailendra Jain", institute: "MANIT Bhopal" },
  { name: "Prof. Ashwani Kumar", institute: "NIT Kurukshetra" },
  { name: "Prof. Parimal Acharjee", institute: "NIT Durgapur" },
  { name: "Prof. (Mrs.) Shubhi Purwar", institute: "MNNIT Allahabad" },
  { name: "Prof. Asheesh K. Singh", institute: "MNNIT Allahabad" },
  { name: "Prof. Manisha Dubey", institute: "MANIT Bhopal" },
  { name: "Prof. M. H. Kolekar", institute: "IIT Patna" },
  { name: "Prof. Ujjwal Kumar Kalla", institute: "NIT Delhi" },
  { name: "Prof. K. R. Niazi", institute: "MNIT Jaipur" },
  { name: "Prof. Vijander Singh", institute: "NSUT Delhi" }
];
const professors1 = [
  { name: "Prof. Radhakant Padhi", institute: "IISc Bangalore" },
  { name: "Prof. Bhim Singh", institute: "IIT Delhi" },
  { name: "Prof. H. M. Suryawanshi", institute: "Director, NIT Hamirpur" },
  { name: "Dr. Ravi Kumar", institute: "NIT Patna" },
  { name: "Prof. Prerna Gaur", institute: "NSUT Delhi" },
  { name: "Prof. H. O. Gupta", institute: "MNIT Jaipur" },
  { name: "Prof. U. K. Kalla", institute: "NIT Delhi" },
  { name: "Prof. B. S. Rajpurohit", institute: "IIT Jodhpur" },
  { name: "Dr. N. R. Patne", institute: "VNIT Nagpur" },
  { name: "Prof. Rohit Bhakar", institute: "MNIT Jaipur" },
  { name: "Dr. Baseem Khan", institute: "Zhejiang University, China" },
  { name: "Dr. Balakrishna P.", institute: "GE, Hyderabad" },
  { name: "Dr. Neeraj Gupta", institute: "Kevadiya Inc., USA" },
  { name: "Dr. Prerna Jain", institute: "MNIT Jaipur" },
  { name: "Prof. Khaleequr Rehman Niazi", institute: "MNIT Jaipur" },
  { name: "Prof. Mohan Kolhe", institute: "University of Agder, Norway" },
  { name: "Dr. Sunanda Sinha", institute: "MNIT Jaipur" },
  { name: "Dr. O. P. Mahela", institute: "RVPNL Jaipur" },
  { name: "Dr. A. K. Yadav", institute: "NIT Jalandhar" },
  { name: "Dr. P. K. Jain", institute: "NIT Jalandhar" },
  { name: "Dr. Prakash Choudhary", institute: "Central University of Rajasthan" },
  { name: "Dr. Ajay Choudhary", institute: "Engineering College Bikaner" }
];
  return (
    <div className="mainDiv">
      <p className="AdvisoryCommittee" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%'}}><h1>Committees</h1></p>
      <div className="cardMain1">
      {/* <h1 className="honda2">Organizing Committee</h1> */}
      {/* <div className="organising_names">
  <div className="name_box">
    <div className="hd">
      <h3>Patron</h3>
    </div>
    <div className="names">
      <span>Prof. H M Suryavanshi</span>
      <span>Chairman, BOG cum Director</span>
      <span>NIT Hamirpur (NITH)</span>
      <span></span>
    </div>
  </div>
  <hr className="divider" />

  <div className="name_box">
    <div className="hd">
      <h3>Co-Patron</h3>
    </div>
    <div className="names">
      <span>Dr. Bharat Bhusan Sharma,</span>
      <span>HOD, EED, NITH</span>
      <span></span>
    </div>
  </div>
  <hr className="divider" />

  <div className="name_box">
    <div className="hd">
      <h3>Organizing Chairman</h3>
    </div>
    <div className="names">
      <span>Dr. Ram Niwash Mahia</span>
      <span>Asst. Prof., EED, NITH</span>
      <span></span>
    </div>
  </div>
  <hr className="divider" />

  <div className="name_box">
    <div className="hd">
      <h3>General Chair</h3>
    </div>
    <div className="names">
      <span>Dr. Bharat Bhusan Sharma,</span>
      <span>HOD, EED, NITH</span>
      <span>Dr. O. P. Rahi,</span>
      <span>Assoc. Prof., EED, NITH</span>
    </div>
  </div>
  <hr className="divider" />

  <div className="name_box">
    <div className="hd">
      <h3>Organizing Secretaries</h3>
    </div>
    <div className="names">
      <span>Dr. Katam Nishanth,</span>
      <span>Asst. Prof., EED, NITH</span>
      <span>Dr. Pankaj K. Mishra,</span>
      <span>Asst. Prof., EED, NITH</span>
    </div>
  </div>
  <hr className="divider" />

  <div className="name_box">
    <div className="hd">
      <h3>Joint Secretaries</h3>
    </div>
    <div className="names">
      <span>Dr. Vivek Sharma,</span>
      <span>Asst. Prof., EED, NITH</span>
      <span>Dr. Jiwanjot Singh</span>
      <span>Asst. Prof., EED, NITH</span>
    </div>
  </div>
  <hr className="divider" />

  <div className="name_box">
    <div className="hd">
      <h3>Treasurer</h3>
    </div>
    <div className="names">
      <span>Dr. Sreeram TS</span>
      <span>Asst. Prof., EED, NITH</span>
      <span></span>
    </div>
  </div>
  <hr className="divider" />

  <div className="name_box">
    <div className="hd">
      <h3>Publicity Chair</h3>
    </div>
    <div className="names">
      <span>Dr. Archna Santosh Nanoty,</span>
      <span>Registrar, NITH</span>
      <span>Dr. Ravinder Nath,</span>
      <span>Assoc. Prof., EED, NITH</span>
      <span>Dr. R. K. Jarial,</span>
      <span>Assoc. Prof., EED, NITH</span>
      <span>Dr. Amit Kaul,</span>
      <span>Assoc. Prof., EED, NITH</span>
      <span>Dr. Himesh Handa,</span>
      <span>Asst. Prof., EED, NITH</span>
      <span>Dr. Chandrasekaran S,</span>
      <span>Asst. Prof., EED, NITH</span>
      <span></span>
    </div>
  </div>
  <hr className="divider" />

  <div className="name_box">
    <div className="hd">
      <h3>Technical Chair</h3>
    </div>
    <div className="names">
      <span>Prof. Y. R. Sood, EED, NITH</span>
      <span>Prof. Sushil Chauhan, EED, NITH</span>
      <span>Prof. R. N. Sharma, EED, NITH</span>
      <span>Prof. Ashwani Chandel, EED,NITH</span>
      <span>Dr. Veena Sharma,</span>
      <span>Assoc. Prof., EED, NITH</span>
    </div>
  </div>
  <hr className="divider" />

  <div className="name_box">
    <div className="hd">
      <h3>Publication Chair</h3>
    </div>
    <div className="names">
      <span>Dr. Ram Niwash Mahia,</span>
      <span>Asst. Prof., EED, NITH</span>
      <span>Dr. Katam Nishanth,</span>
      <span>Asst. Prof., EED, NITH</span>
      <span>Dr. Pankaj K. Mishra</span>
      <span>Asst. Prof., EED, NITH</span>
      <span></span>
    </div>
  </div>
  <hr className="divider" />
</div> */}
<div className="1">
<h1 className="Honda">Advisory Committee</h1>
        <div className="advisory_names">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "20px", fontFamily: "Barlow, sans-serif",}}>
      {/* <h1>Professors List</h1> */}
      <table style={{ width: "80%", borderCollapse: "collapse", fontFamily: "Arial, sans-serif" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "10px", backgroundColor: "#f2f2f2", fontWeight: "bold" }}>
              Professor Name
            </th>
            <th style={{ border: "1px solid black", padding: "10px", backgroundColor: "#f2f2f2", fontWeight: "bold" }}>
              Institute
            </th>
          </tr>
        </thead>
        <tbody>
          {professors.map((prof, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "white" }}>
              <td style={{ border: "1px solid black", padding: "10px" }}>{prof.name}</td>
              <td style={{ border: "1px solid black", padding: "10px" }}>{prof.institute}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          {/* <span>Prof. Ramesh Bansal, University of Sharjah</span>
          <span>Prof. N. P. Padhy, Director, MNIT Jaipur</span>
          <span>Prof. H. O. Gupta, IIT Roorkee</span>
          <span>Prof. Praveen Kumar, IIT Guwahati</span>
          <span>Prof. Deepak M. Fulwani, IIT Jodhpur</span>
          <span>Prof. Rajesh Kumar, MNIT Jaipur</span>
          <span>Prof. Bharat Singh Rajpurohit, IIT Jodhpur</span>
          <span>Prof. Ujjwal Kumar Kalla, NIT Delhi</span>
          <span>Prof. Madhusudan Singh Yadav, DTU, Delhi</span>
          <span>Dr. Neeraj Gupta, Sr. Scientist, Global Elect. Ltd., USA</span>
          <span>Prof. Rohit Bhakar, MNIT Jaipur</span>
          <span>Prof. K. S. Nagla, B. R Ambedkar NIT Jalandhar</span>
          <span>Prof. Akhil Rajan Garg, M. B. M. University Jodhpur</span>
          <span>Prof. Pragati Kumar, Vice-Chancellor, SMVDU Jammu</span>
          <span>Prof. Shailendra Jain, MNIT Jaipur</span>
          <span>Prof. Akshay Rathore, SIT Singapore</span>
          <span>Dr. Baseem Khan, Hawassa University, Ethiopia</span>
          <span>Prof. Sanjeevikumar Padmanaban, University of South-Eastern Norway</span> */}
        </div>
</div>
<div className="2">
<h1 className="Honda">Technical Committee</h1>
        <div className="advisory_names">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "20px" }}>
      {/* <h1>Professors List</h1> */}
      <table style={{ width: "80%", borderCollapse: "collapse", fontFamily: "Arial, sans-serif" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "10px", backgroundColor: "#f2f2f2", fontWeight: "bold" }}>
              Professor Name
            </th>
            <th style={{ border: "1px solid black", padding: "10px", backgroundColor: "#f2f2f2", fontWeight: "bold" }}>
              Institute
            </th>
          </tr>
        </thead>
        <tbody>
          {professors1.map((prof, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "white" }}>
              <td style={{ border: "1px solid black", padding: "10px" }}>{prof.name}</td>
              <td style={{ border: "1px solid black", padding: "10px" }}>{prof.institute}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          {/* <span>Prof. Ramesh Bansal, University of Sharjah</span>
          <span>Prof. N. P. Padhy, Director, MNIT Jaipur</span>
          <span>Prof. H. O. Gupta, IIT Roorkee</span>
          <span>Prof. Praveen Kumar, IIT Guwahati</span>
          <span>Prof. Deepak M. Fulwani, IIT Jodhpur</span>
          <span>Prof. Rajesh Kumar, MNIT Jaipur</span>
          <span>Prof. Bharat Singh Rajpurohit, IIT Jodhpur</span>
          <span>Prof. Ujjwal Kumar Kalla, NIT Delhi</span>
          <span>Prof. Madhusudan Singh Yadav, DTU, Delhi</span>
          <span>Dr. Neeraj Gupta, Sr. Scientist, Global Elect. Ltd., USA</span>
          <span>Prof. Rohit Bhakar, MNIT Jaipur</span>
          <span>Prof. K. S. Nagla, B. R Ambedkar NIT Jalandhar</span>
          <span>Prof. Akhil Rajan Garg, M. B. M. University Jodhpur</span>
          <span>Prof. Pragati Kumar, Vice-Chancellor, SMVDU Jammu</span>
          <span>Prof. Shailendra Jain, MNIT Jaipur</span>
          <span>Prof. Akshay Rathore, SIT Singapore</span>
          <span>Dr. Baseem Khan, Hawassa University, Ethiopia</span>
          <span>Prof. Sanjeevikumar Padmanaban, University of South-Eastern Norway</span> */}
        </div>
</div>
      {/* <div className="Card1">
      <Card 
        image="https://via.placeholder.com/300x200" 
        name="John Doe" 
        position="Software Engineer" 
      />
      <Card 
        image="https://via.placeholder.com/300x200" 
        name="Jane Smith" 
        position="Project Manager" 
      />
      <Card 
        image="https://via.placeholder.com/300x200" 
        name="Jane Smith" 
        position="Project Manager" 
      />
      </div> */}
      {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      {/* <div className="Card1">
      <Card 
        image="https://via.placeholder.com/300x200" 
        name="John Doe" 
        position="Software Engineer" 
      />
      <Card 
        image="https://via.placeholder.com/300x200" 
        name="Jane Smith" 
        position="Project Manager" 
      />
      <Card 
        image="https://via.placeholder.com/300x200" 
        name="Jane Smith" 
        position="Project Manager" 
      />
      </div> */}
      {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      {/* <div className="Card1">
      <Card 
        image="https://via.placeholder.com/300x200" 
        name="John Doe" 
        position="Software Engineer" 
      />
      <Card 
        image="https://via.placeholder.com/300x200" 
        name="Jane Smith" 
        position="Project Manager" 
      />
      <Card 
        image="https://via.placeholder.com/300x200" 
        name="Jane Smith" 
        position="Project Manager" 
      />
      </div> */}
      {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}



      {/* <div className="Card2">
        
      <Card 
        image="https://via.placeholder.com/300x200" 
        name="John Doe" 
        position="Software Engineer" 
      />
      <Card 
        image="https://via.placeholder.com/300x200" 
        name="Jane Smith" 
        position="Project Manager" 
      />
      <Card 
        image="https://via.placeholder.com/300x200" 
        name="Jane Smith" 
        position="Project Manager" 
      />
      
      </div> */}
      {/* --------------------------------------------------------------------- */}
      {/* <div className="Card2">
        
        <Card 
          image="https://via.placeholder.com/300x200" 
          name="John Doe" 
          position="Software Engineer" 
        />
        <Card 
          image="https://via.placeholder.com/300x200" 
          name="Jane Smith" 
          position="Project Manager" 
        />
        <Card 
          image="https://via.placeholder.com/300x200" 
          name="Jane Smith" 
          position="Project Manager" 
        />
        
        </div> */}
        {/* ---------------------------------------------------------------------- */}
        {/* <div className="Card2">
        
        <Card 
          image="https://via.placeholder.com/300x200" 
          name="John Doe" 
          position="Software Engineer" 
        />
        <Card 
          image="https://via.placeholder.com/300x200" 
          name="Jane Smith" 
          position="Project Manager" 
        />
        <Card 
          image="https://via.placeholder.com/300x200" 
          name="Jane Smith" 
          position="Project Manager" 
        />
        
        </div> */}
      
      </div>
      {/* <div className="Card1">
      <Card 
        image="https://via.placeholder.com/300x200" 
        name="John Doe" 
        position="Software Engineer" 
      />
      <Card 
        image="https://via.placeholder.com/300x200" 
        name="Jane Smith" 
        position="Project Manager" 
      />
      <Card 
        image="https://via.placeholder.com/300x200" 
        name="Jane Smith" 
        position="Project Manager" 
      />
      </div> */}
      <FooterSection/>
    </div>   
)
}