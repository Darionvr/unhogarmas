import React from 'react'
import { Link } from 'react-router'

const PetProfile = () => {
  return (
    <main className='pet-main'>

      <div className="pet-photo">
        <img src="imgs\Pet-photo1.png" alt="" />
      </div>
      <div className="pet-info">
        <h1> Nombre</h1>
        <p>Raza: <span>Raza</span> </p>
        <p>Edad: <span>00 Años</span></p>
        <p>Peso: <span>00Kg</span></p>
        <p>Sexo: <span>MF</span></p>
        <p>Chip: <span>SI/NO</span></p>
        <p>(Descripción) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quam quasi nobis quae corporis, cum temporibus eligendi sunt corrupti fugiat quo similique dolorum aliquid saepe odio facilis modi incidunt porro!</p>
        <button className='melon-button'> <Link to={'/adoptionform'}>  Comenzar adopción</Link></button>
      </div>
    </main>
  )
}

export default PetProfile