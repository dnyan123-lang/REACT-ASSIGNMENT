import React, { useState } from 'react';

function UserProfile() {
  const players = [
    { 
      id: 1, 
      name: 'Virat Kohli', 
      
      role: 'Top-order Batter', 
      country: 'India',
      matches: 292,
      runs: '13,848',
      centuries: 50,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Virat_Kohli_in_PMO_New_Delhi.jpg/250px-Virat_Kohli_in_PMO_New_Delhi.jpg'
    },
    { 
      id: 2, 
      name: 'Rohit Sharma', 
      role: 'Opening Batter', 
      country: 'India',
      matches: 262,
      runs: '10,709',
      centuries: 31,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Shri_Rohit_Gurunath_Sharma_%28Cropped%29.jpg/250px-Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Shri_Rohit_Gurunath_Sharma_%28Cropped%29.jpg'
    },
    { 
      id: 3, 
      name: 'MS Dhoni', 
      role: 'Wicket-keeper Batter', 
      country: 'India',
      matches: 350,
      runs: '10,773',
      centuries: 10,
      
      image: 'https://www.globalindian.com/wp-content/uploads/2024/10/ms-dhoni-profile-image.webp'
    }
  ];

  const [profile, setProfile] = useState(players[0]);

  return (
    <div className="card">
      <h2>User Profile Card</h2>
      
      <div className="button-group">
        {players.map((p) => (
          <button 
            key={p.id} 
            className={`tab-btn ${profile.name === p.name ? 'active' : ''}`}
            onClick={() => setProfile(p)}
          >
            {p.name}
          </button>
        ))}
      </div>

      <div 
        className="profile-card"
        style={{ backgroundImage: `url(${profile.image})` }}
      >
        <div className="card-overlay">
          <img src={profile.image} alt={profile.name} className="avatar-img" />
          
          <div className="profile-details">
            <div className="detail-row">
              <span className="label">Name</span>
              <span className="value">{profile.name}</span>
            </div>
            <div className="detail-row">
              <span className="label">Role</span>
              <span className="value">{profile.role}</span>
            </div>
            <div className="detail-row">
              <span className="label">Country</span>
              <span className="value">{profile.country}</span>
            </div>
            <div className="detail-row">
              <span className="label">Matches</span>
              <span className="value">{profile.matches}</span>
            </div>
            <div className="detail-row">
              <span className="label">Runs</span>
              <span className="value">{profile.runs}</span>
            </div>
            <div className="detail-row">
              <span className="label">Centuries</span>
              <span className="value">{profile.centuries}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;