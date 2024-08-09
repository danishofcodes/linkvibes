import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function LinkAdd({ removeLink, saveLink, handleLink, handleSocial }) {
  return (
    <div className='card'>
      <div className='linkcard-header'>
        <button class="delete" onClick={removeLink}>Close</button>
      </div>

      <div className='link-inp-action'>

        <select onChange={handleSocial}>
          <option value="">Select Your Social Media</option>
          <option value="Github">Github</option>
          <option value="Reddit">Reddit</option>
          <option value="Youtube">Youtube</option>
          <option value="Instagram">Instagram</option>
          <option value="Facebook">Facebook</option>
          <option value="Twitter">Twitter</option>
          <option value="Tumblr">Tumblr</option>
        </select>

        <div className='linkbox'>
          <div className='httpprepend'>
            <span>https://</span>
          </div>
          <input type="text" className="linkinput" onChange={handleLink} />
        </div>
      </div>

      <div className="link-card-footer">
        <button className='btnbordered btngreen' onClick={saveLink}>
          <FontAwesomeIcon icon={faCheckCircle} />
          Save
        </button>
      </div>

    </div>
  )
}
