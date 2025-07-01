import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faBluesky } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer>
      <p>2025 Un Hogar Más. Todos los derechos reservados</p>
      <div className="rrss">
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faBluesky} />
      </div>

    </footer>
  )
}

export default Footer