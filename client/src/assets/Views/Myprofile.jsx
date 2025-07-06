
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'



const Myprofile = () => {
  return (
    <>
      <div className="MyProfile">
        <h1> Mi perfil</h1>

        <div className="ProfileSection">
          <div className="ProfilePicture">
            <img src="https://media.istockphoto.com/id/1171169099/es/foto/hombre-con-brazos-cruzados-aislados-sobre-fondo-gris.jpg?s=612x612&w=0&k=20&c=8qDLKdLMm2i8DHXY6crX6a5omVh2IxqrOxJV2QGzgFg="
              className="ProfileImage" />


          </div>

          <div className="ProfileInfo">
            <div className="Info">
              <span>Nombre:</span>
              <button> editar</button>
            </div>
            <div className="Info">
              <span>Apellidos:</span>
              <button> editar</button>
            </div>
            <div className="Info">
              <span>Celular:</span>
              <button> editar</button>
            </div>
            <div className="Info">
              <span>Rut:</span>
            </div>
          </div>
        </div>

        <hr />

        <h2>Mascotas publicadas</h2>
        <div className="pet-card">
          <div className="PetContent">
            <div className="PetImage">
              <Link to={`/PetProfile`}>
                <img src="https://static.nationalgeographic.es/files/styles/image_3200/public/cv1_img8545-edit-copy.webp?w=1600&h=2134" alt="Mascota" />
              </Link>
              <button className="edit-btn">Editar información</button>
              
            </div>

            <div className="pet-info">
              <h3>Nombre</h3>
              <p>Raza, edad</p>
              
            </div>
          </div>
        </div>


      </div>

      <div className="AddPetButton">
        <button>
          <Link to="/CreatePost">
            <FontAwesomeIcon icon={faFileCirclePlus} /> Agregar nueva mascota
          </Link>
        </button>
      </div>

    </>

  );
};

export default Myprofile