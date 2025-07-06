import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faUpload } from '@fortawesome/free-solid-svg-icons'
import HomeLogo from '../Icons/HomeIcon'
import Home from './Home'
import data from '../../../public/TestUsuarios.json'


const Register = () => {


  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    rut: "",
    email: "",
    password: "",
    password2: "",
    file: null
  })

  const fileInputRef = useRef(null);


  const handleSubmit = (e) => {
    e.preventDefault()

    const formErrors = validate();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    

    /**** Acá debería ir la función para enviar los datos con POST próximo hito ****/

  }

  const validate = () => {
    const newErrors = {};

    if (!form.nombre.trim()) {
      newErrors.nombre = 'Debes ingresar tu nombre';
    }
    if (!form.apellido.trim()) {
      newErrors.apellido = 'Debes ingresar tu apellido';
    }
    if (!form.rut.trim()) {
      newErrors.rut = 'Debes ingresar tu RUT';
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(form.email)) {
      newErrors.email = 'Por favor ingresa un correo válido';
    }

    if (!form.password.trim()) {
      newErrors.password = 'Debes ingresar una contraseña';
    }
    if (form.password !== form.password2) {
      newErrors.password2 = 'Las contraseñas no coinciden';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm({
      ...form,
      [name]: type === "file" ? files[0] : value
    });
  }

  return (
    <main className='main-register'>
      <div className="register-image">
        <img src="imgs\Form-frame.png" alt="" />
      </div>
      <div className="form-container">
        <h1> Súmate a Un Hogar Más <HomeLogo /> </h1>
        <p>Regístrate y descubre todas las formas en las que puedes ayudar.</p>

        <form id='register' action="" className='register-form' onSubmit={handleSubmit}>
          <div className="input-group">
            <input name='nombre' type="text" value={form.nombre} placeholder='Ingresa tu nombre' onChange={handleChange} />
            {errors.nombre && <p className='form-error'> <img src="imgs\alert-icon.svg" alt="ícono alerta" />{errors.nombre}  </p>}
          </div>
          <div className="input-group">
            <input name='apellido' type="text" value={form.apelido} placeholder='Ingresa tu apellido' onChange={handleChange} />
            {errors.apellido && <p className='form-error'> <img src="imgs\alert-icon.svg" alt="ícono alerta" />{errors.apellido}  </p>}
          </div>

          <div className="input-group">
            <input name='rut' type="text" value={form.rut} placeholder='Ingresa tu RUT' onChange={handleChange} />
            {errors.rut && <p className='form-error'> <img src="imgs\alert-icon.svg" alt="ícono alerta" />{errors.rut}  </p>}

          </div>
          <div className="input-group">
            <input name='email' type="text" value={form.email} placeholder='Ingresa tu email' onChange={handleChange} />
            {errors.email && <p className='form-error'> <img src="imgs\alert-icon.svg" alt="ícono alerta" />{errors.email}  </p>}
          </div>
          <div className="input-group">
            <input name='password' type="password" value={form.password} placeholder='Contraseña' onChange={handleChange} />
            {errors.password && <p className='form-error'> <img src="imgs\alert-icon.svg" alt="ícono alerta" />{errors.password}  </p>}

          </div>
          <div className="input-group">
            <input name='password2' type="password" value={form.password2} placeholder='Re ingresa tu contraseña' onChange={handleChange} />
            {errors.password2 && <p className='form-error'> <img src="imgs\alert-icon.svg" alt="ícono alerta" />{errors.password2}  </p>}

          </div>
          <div className="input-group" onClick={() => fileInputRef.current && fileInputRef.current.click()}>
            <FontAwesomeIcon icon={faUpload} />
            <input name='file' type="file" onChange={handleChange} style={{ display: "none" }} ref={fileInputRef} />
            {form.file ? <span className="file-name">{form.file.name}</span> : <span> Selecciona tu foto de perfil</span>}
          </div>

          <button type='submit' form='register' className='melon-button'> <FontAwesomeIcon icon={faUserPlus} /> Unirme ahora</button>

        </form>


      </div>

    </main>
  )
}

export default Register