import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function ProfileDetails({ firstName, lastName, email, profilePic, handleFirstNameChange, handleLastNameChange, handleEmailChange, handleProfilePicChange, handleProfileSave }) {
  return (
    <div>
      <h3 className='texttheme'>Add Your Profile Picture And Email</h3>
      <h5 className='texttheme'>Add your details and share with the world</h5>
      <div className='inpField'>
        <label>
          Profile Picture URL
        </label>
        <input
          type="text"
          value={profilePic}
          onChange={handleProfilePicChange}
          placeholder="Enter profile picture URL"
        />
      </div>

      <div className='inpField'>
        <label>
          First Name
        </label>
        <input
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
          placeholder="Enter your first name"
        />
      </div>

      <div className='inpField'>
        <label>
          Last Name
        </label>
        <input
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
          placeholder="Enter your last name"
        />
      </div>

      <div className='inpField'>
        <label>
          Email
        </label>
        <input
          type="text"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
        />
      </div>
      
      <div className="link-card-footer">
        <button className='btnbordered btngreen' onClick={handleProfileSave}>
          <FontAwesomeIcon icon={faCheckCircle} /> Save
        </button>
      </div>
    </div>
  );
};


