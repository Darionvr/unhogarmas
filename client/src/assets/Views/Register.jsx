import React from 'react'

const Register = () => {
  return (
    <main className='main-register'>
      <div className="register-image">
        <img src="imgs\Form-frame.png" alt="" />
      </div>
      <div className="form-container">
        <h1> Súmate a Un Hogar Más</h1>
        <p>Regístrate y descubre todas las formas en las que puedes ayudar.</p>
        <form id='register' action="" className='register-form'>

          <input type="text" placeholder='Ingresa tu nombre' />
          <input type="text" placeholder='Ingresa tu apellido' />
          <input type="text" placeholder='Ingresa tu RUT' />
          <input type="text" placeholder='Ingresa tu email' />
          <input type="password" placeholder='Contraseña' />
          <input type="password" placeholder='Re ingresa tu contraseña' />
          <input type="file" />
        <button type='submit' form='register'> Unirme ahora</button>

        </form>


      </div>

    </main>
  )
}

export default Register