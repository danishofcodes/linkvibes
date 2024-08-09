import { faEye, faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Navbar({ menuSelector, menu }) {
  return (
    <nav>
      <h3 className="logo"> <FontAwesomeIcon icon={faLink} />linkvibes</h3>
      <div>
        <button
          className={`btnsolid ${menu === 'links' ? 'active' : ''}`}
          onClick={() => menuSelector('links')}
        >
          Links
        </button>
        <button
          className={`btnsolid ${menu === 'profiledetails' ? 'active' : ''}`}
          onClick={() => menuSelector('profiledetails')}
        >
          Profile Details
        </button>
      </div>
      <button className='btn-rounded'> <FontAwesomeIcon icon={faEye} /> &nbsp;preview</button>
    </nav>
  )
}
