import React from "react";
import "../css/committees.css";
import backgroundImage from "../../assets/background.jpg.jpeg";
import FooterSection from "../FooterSection";

const committeeData = [
  { title: "Chief Patron", members: ["Prof. H. M. Suryawanshi – Director, NIT Hamirpur (NITH)"] },

  { title: "Patron", members: [
      "Prof. Sushil Chauhan – Dean (Faculty Welfare), NITH",
      "Dr. Archna Santosh Nanoty – Registrar, NITH"
    ]
  },

  { title: "Co-Patron", members: ["Dr. O. P. Rahi – HOD, EED, NITH"] },

  { title: "General Chair", members: ["Dr. Bharat Bhusan Sharma – EED, NITH"] },

  { title: "Organizing Chairman", members: ["Dr. Ram Niwash Mahia – NITH"] },

  { title: "Organizing Secretaries", members: [
      "Dr. Katam Nishanth – NITH",
      "Dr. Pankaj K. Mishra – NITH"
    ]
  },

  { title: "Joint Secretaries", members: [
      "Dr. Vivek Sharma – NITH",
      "Dr. Jiwanjot Singh – NITH"
    ]
  },

  { title: "Treasurer", members: ["Dr. Sreeram TS – NITH"] },

  { title: "Publicity Chair", members: [
      "Dr. Archna Santosh Nanoty – Registrar, NITH",
      "Dr. Ravinder Nath – NITH",
      "Dr. R. K. Jarial – NITH",
      "Dr. Amit Kaul – NITH",
      "Dr. Himesh Handa – NITH",
      "Dr. Chandrasekaran S – NITH"
    ]
  },

  { title: "Technical Chair", members: [
      "Prof. Sushil Chauhan – NITH",
      "Prof. R. N. Sharma – NITH",
      "Prof. Ashwani Chandel – NITH",
      "Dr. Veena Sharma – NITH"
    ]
  },

  { title: "Publication Chair", members: [
      "Dr. Ram Niwash Mahia – NITH",
      "Dr. Katam Nishanth – NITH",
      "Dr. Pankaj K. Mishra – NITH"
    ]
  }
];

export const Committees = () => {
  return (
    <div className="mainDiv">

      {/* Header */}
      <div
        className="committees"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1>Committees</h1>
      </div>

      <div className="cardMain">
        <h1 className="honda2 ">Organizing Committee</h1>

        <table className="committeeTable">
          <thead>
            <tr>
              <th>Position</th>
              <th>Members</th>
            </tr>
          </thead>
          <tbody>
            {committeeData.map((item, index) => (
              <tr key={index}>
                <td className="positionCol">{item.title}</td>
                <td>
                  <ul>
                    {item.members.map((member, i) => (
                      <li key={i}>{member}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <FooterSection />
    </div>
  );
};
