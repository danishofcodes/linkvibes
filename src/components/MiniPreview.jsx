import { faGlobe, faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faReddit, faInstagram, faFacebook, faSnapchat, faYoutube, faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons'

import React, { useState } from 'react'

export default function MiniPreview({ linkBucket, fullname, email, profilePic, }) {

  const linkKeyVal = Object.entries(linkBucket);

  const colorMap = {
    Github: "#24292E",
    Reddit: "#FF4500",
    Instagram: "#E1306C",
    Facebook: "#0866FF",
    Snapchat: "#FFFC00",
    Youtube: "#FF0000",
    Twitter: "#1DA1F2",
    Tumblr: "#021A35"
  };

  const iconMap = {
    Github: faGithub,
    Reddit: faReddit,
    Instagram: faInstagram,
    Facebook: faFacebook,
    Snapchat: faSnapchat,
    Youtube: faYoutube,
    Twitter: faTwitter,
    Tumblr: faTumblr,

  };

  const [showMoreLinks, setShowMoreLinks] = useState(false); // State to control visibility of additional links

  const handleSeeMoreClick = () => {
    setShowMoreLinks(prev => !prev); // Toggle see more/ see less on button click
  };

  return (
    <div className='minipreview' >
      <div>
        <div className='profilecont'>
          <div className="profilepicdiv">
            {profilePic && <img src={profilePic} alt="" />}
          </div>
          <span className='text-bold theme-color'>{fullname ? fullname : "your name"}</span>
          <span className='text-tiny grey-light'>{email ? email : 'example@email.com'}</span>
        </div>
      </div>

      <div className="links-container">
        {linkKeyVal.slice(0, showMoreLinks ? linkKeyVal.length : 4).map(([key, value]) => (
          <a href={`https://${value}`} target="_blank" key={key}>
            <div className={`linkblock color`} style={{ background: colorMap[key] }}>
              <div className='iconbox'> 
              <FontAwesomeIcon icon={iconMap[key] || faGlobe} /><span>{key}</span>
              </div>
              {/* <h5></h5> */}
            </div>
          </a>
        ))}
      </div>

      <div className='seemorediv'>
        {linkKeyVal.length > 4 && ( //only show 'see more' button if more than 4 links are present
          <button className="seemore" onClick={handleSeeMoreClick}>
            {showMoreLinks ? <span>See Less <FontAwesomeIcon icon={faMinusCircle} /></span> : <span>See More <FontAwesomeIcon icon={faPlusCircle} /></span>}
          </button>
        )}
      </div>
    </div>
  )
}