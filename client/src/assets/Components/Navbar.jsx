import { Link, useLocation } from "react-router"
import '../../App.css'
import HomeLogo from "../Icons/HomeIcon"
import PersonLogo from "../Icons/PersonIcon"
import PawIcon from "../Icons/PawIcon"
import { useContext, useEffect, useRef, useState } from "react"
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LoginForm from "./LoginForm"
import { UserContext } from "../Context/UserContext"



const Navbar = () => {

  const dialogRef = useRef(null);
  const openModal = () => dialogRef.current.showModal();
  const closeModal = () => dialogRef.current.close();
  const location = useLocation();
  const { token, logout } = useContext(UserContext);

  useEffect(() => {
    if (dialogRef.current && dialogRef.current.open) {
      dialogRef.current.close();
    }
  }, [location]);

  return (
    <>
      <nav>

        <Link to="/"><HomeLogo />Un Hogar Más</Link>
        <Link to="/Staff">Nuestro equipo</Link>
        <Link to="/Voluntary">Colabora con nosotros</Link>

        <button className='melon-button'> <Link to="/AdoptList"><PawIcon /> Ver mascotas </Link> </button>

        <button className='melon-button' onClick={openModal}> <PersonLogo /> </button>
        <dialog ref={dialogRef}>
          <div className="dialog-container">
          <button onClick={closeModal}><FontAwesomeIcon icon={faSquareXmark} size="2x" /></button>
          {token ? (
            <>
              <p> Sesión iniciada </p>
              <Link to={`/Myprofile`}>
                <img src="https://media.istockphoto.com/id/1171169099/es/foto/hombre-con-brazos-cruzados-aislados-sobre-fondo-gris.jpg?s=612x612&w=0&k=20&c=8qDLKdLMm2i8DHXY6crX6a5omVh2IxqrOxJV2QGzgFg="className="modal-pic"/>
              </Link>

              <button onClick={() => { logout(); closeModal() }}> Cerrar Sesión</button>
            </>
          ) : (
            <>
              <p>Bienvenido de vuelta</p>
              <h1> Inicia sesión</h1>
              <LoginForm />

              <Link onClick={closeModal} to={'/register'}> Crear una cuenta  </Link>
            </>
          )}



          </div>
        </dialog>

      </nav>

    </>
  )
}

export default Navbar