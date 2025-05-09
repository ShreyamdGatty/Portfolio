import React, { useState } from 'react';
import './Certificate.css';

const certificates = [
  {
    id: 1,
    name: 'Introduction To Cloud Computing',
    image: '/Certificates/cloud_computing.jpg',
  },
  {
    id: 2,
    name: 'Introduction To Git and Git Hub',
    image: '/Certificates/Github.jpg',
  },
  {
    id: 3,
    name: 'Workshop on AWS Unleashed: Transform Your Skills With Hands-On Cloud Training',
    image: '/Certificates/AWS.jpg',
  },
  {
    id: 4,
    name: 'Cloud Community Day 2024',
    image: '/Certificates/cloud_community.jpg',
  },
];

const Certificate = () => {
  const [visibleCertificateId, setVisibleCertificateId] = useState(null);

  const handleViewClick = (id) => {
    setVisibleCertificateId(id);
  };

  return (
    <div
      className="certificate-container"
      style={{ backgroundImage: 'url("/Background/Education.jpg")' }}
    >
      <div className="certificate-box">
        <h2 className="certificate-title">My Certificates</h2>
        <p className="certificate-subtitle">Click below to view each certificate</p>
        {certificates.map((cert) => (
          <div key={cert.id} className="certificate-item">
            <h3 className="certificate-name">{cert.name}</h3>
            {visibleCertificateId === cert.id ? (
              <img
                src={cert.image}
                alt={`Certificate of ${cert.name}`}
                className="certificate-image"
              />
            ) : (
              <button
                className="view-button"
                onClick={() => handleViewClick(cert.id)}
              >
                View Certificate
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;




