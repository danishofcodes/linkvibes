import { faEye, faLink, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
      <h3 className="logo"> <FontAwesomeIcon icon={faLink} />linkvibes</h3>
     
      <div style={{color:"#1dafad"}}><FontAwesomeIcon icon={faQuestionCircle}/></div>
      {/* <button className='btn-rounded' onClick={handlePreview}> <FontAwesomeIcon icon={faEye} /> &nbsp;preview</button> */}
    </nav>
  )
}
