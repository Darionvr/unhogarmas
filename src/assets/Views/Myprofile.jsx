import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import TableSuperUser from '../Components/TableSuperUser';
import { Link, useNavigate } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCirclePlus, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Mypost from '../Components/MyPost';


const Myprofile = () => {
  const { currentUser, token } = useContext(UserContext);

  return (
    <>

      <main className='profile-main'>

        <div className="MyProfile">
          <h1> Mi perfil</h1>

          <div className="ProfileSection">
            <div className="ProfilePicture">
              {/*   <img src={currentUser.photo ? URL.createObjectURL(currentUser.photo) : "imgs/default-profile.jpg"}
                className="ProfileImage" />
 */}
            </div>

            <div className="ProfileInfo">
              <div className="Info">
                <span>Nombre: {currentUser.first_name}</span>
                <button> editar</button>
              </div>
              <div className="Info">
                <span>Apellidos: {currentUser.last_name}</span>
                <button> editar</button>
              </div>
              <div className="Info">
                <span>Correo: {currentUser.email}</span>
                <button> editar</button>
              </div>
              <div className="Info">
                <span>Rut: {currentUser.rut}</span>
              </div>
            </div>
          </div>
        </div>


        {token.role === 'administrador' && <TableSuperUser />}

        <Mypost />


      </main>


    </>

  );
};

export default Myprofile