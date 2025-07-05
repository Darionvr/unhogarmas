import React from 'react'

const Myprofile = () => {
  return (
    <>
      <div className='Profile'>
        <h1>Mi perfil</h1>
        <div className='ProfilePicture'>
          <img src="" alt="" />
        </div>
        <div className='ProfileInformation'>
          <p>Nombre</p>
          <p>Apellidos</p>
          <p>Celular</p>
          <p>Rut</p>
        </div>
      </div>

      <h2>Mascotas publicadas</h2>
      <div className='Publication'>

      </div>

      <button className='AddPublication'>
        <button>Agregar nueva mascota</button>
      </button>
    </>

  )
}

export default Myprofile