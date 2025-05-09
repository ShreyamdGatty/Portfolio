import React, { useState } from 'react';
import './Education.css';

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const educationList = [
    {
      degree: "MASTER IN COMPUTER APPLICATION",
      institution: "St. Joseph Engineering College, Vamanjoor",
      year: "2023 - 2025",
      CGPA: "8.25",
      bgImage: "url('/college/St.Joseph.jpg')",
      logo: "/logos/St.Joseph.jpg",
    },
    {
      degree: "BACHELOR OF COMPUTER APPLICATION",
      institution: "Sharada Degree College Manglore",
      year: "2020 - 2023",
      CGPA: "8.13",
      bgImage: "url('/college/sharada-degree.jpg')",
      logo: "/logos/sharadalogo.jpg",
    },
    {
      degree: "IIPUC",
      institution: "Sarojini Madhusudan Kushe pre University College Attavar, Manglore",
      year: "2019 - 2020",
      bgImage: "url('/college/smk.jpg')",
      logo: "/logos/smk.jpg",
    },
    {
      degree: "SSLC",
      institution: "Sarojini Madhusudan Kushe High School Attavar, Manglore",
      year: "2017 - 2018",
      grade: "70.04%",
      bgImage: "url('/college/smk.jpg')",
      logo: "/logos/smk.jpg",
    },
  ];

  const toggleDetails = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div
      className="education-section"
      style={{
        backgroundImage: "url('/Background/Education.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h2>Education</h2>
      <div className="education-timeline">
        {educationList.map((edu, idx) => (
          <div
            key={idx}
            className="education-card"
            style={{ backgroundImage: edu.bgImage }}
          >
            <div className="education-node" />
            <img src={edu.logo} alt="institution logo" className="edu-logo" />
            <h3
              onClick={() => toggleDetails(idx)}
              className={`clickable ${
                edu.degree === "MASTER IN COMPUTER APPLICATION" ? "white-text" : ""
              }`}
            >
              {edu.degree}
            </h3>
            {activeIndex === idx && (
              <div className="education-details">
                <p><strong>Institution:</strong> {edu.institution}</p>
                <p><strong>Year:</strong> {edu.year}</p>
                {edu.CGPA && <p><strong>CGPA:</strong> {edu.CGPA}</p>}
                {edu.grade && <p><strong>Grade:</strong> {edu.grade}</p>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;





