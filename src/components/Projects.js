import React from 'react';
import './Project.css'; // Importing the CSS file

const Projects = () => {
  const projects = [
    {
      title: "PhotoGraphy Website",
      description: "A system that searches the photographers based on their Experience,Works.",
      tech: "PHP, CSS, HTML, MySQL",
      link: "https://github.com/ShreyamdGatty/PhotoGraphy-Website.git",
      image: "/Project/photography.jpg"
    },
    {
      title: "CampusSphere",
      description: "Handling a Department where Faculty store Student Details using CRUD operation. It consists of HOD Dashboard and Admin Dashboard.",
      tech: "React, JavaScript, CSS, MongoDB",
      link: "https://github.com/ShreyamdGatty/CampusSphere.git",
      image: "/Project/campusSphere.jpg"
    },
    {
      title: "Virtual Study Rooms",
      description: "Students who want to maintain a Timetable for tasks like reading, submission work, exercise, and play.",
      tech: "React, Node.js, MongoDB",
      link: "https://github.com/ShreyamdGatty/Virtual-StudyRom.git",
      image: "/Project/studyroom.jpg"
    },
    {
      title: "Face Recognition System",
      description: "Face recognition that detects faces and marks attendance.",
      tech: "Python, Streamlit, OpenCV, Machine Learning",
      link: "https://github.com/ShreyamdGatty/Virtual-StudyRom.git",
      image: "/Project/studyroom.jpg"
    },
    {
      title: "Image Processing System",
      description: "Converts images to grayscale, black & white, and cropped versions.",
      tech: "Python, Streamlit, Machine Learning",
      link: "https://github.com/ShreyamdGatty/Image-Processing.git",
      image: "/Project/Image Processing.jpg"
    }
  ];

  return (
    <div
      className="projects-container"
      style={{ backgroundImage: 'url("/Background/Education.jpg")' }}
    >
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-list">
        {projects.map((proj, idx) => (
          <div key={idx} className="project-card">
            <img src={proj.image} alt={proj.title} className="project-image" />
            <div className="project-content">
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-description">{proj.description}</p>
              <p className="project-tech">
                <strong>Tech Used:</strong> {proj.tech}
              </p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;




