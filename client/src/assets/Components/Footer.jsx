import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faBluesky } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer>
      <p>2025 Un Hogar Más. Todos los derechos reservados</p>
      <div className="rrss">
        <FontAwesomeIcon icon={faFacebookF} size="lg"/>
        <FontAwesomeIcon icon={faInstagram} size="lg"/>
        <FontAwesomeIcon icon={faBluesky} size="lg"/>
      </div>

    </footer>
  )
}

export default Footer