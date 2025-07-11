import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import TableCandidates from '../Components/TableCandidates';







const Myprofile = () => {
  const { form } = useContext(UserContext);

  return (
    <>
      <main className='profile-main'>


        <div className="MyProfile">
          <h1> Mi perfil</h1>

          <div className="ProfileSection">
            <div className="ProfilePicture">
              <img src={form.file ? URL.createObjectURL(form.file) : "imgs/default-profile.jpg"}
                className="ProfileImage" />


            </div>

            <div className="ProfileInfo">
              <div className="Info">
                <span>Nombre: {form.nombre}</span>
                <button> editar</button>
              </div>
              <div className="Info">
                <span>Apellidos: {form.apellido}</span>
                <button> editar</button>
              </div>
              <div className="Info">
                <span>Correo: {form.email}</span>
                <button> editar</button>
              </div>
              <div className="Info">
                <span>Rut: {form.rut}</span>
              </div>
            </div>
          </div>
        </div>
        <TableCandidates/>

        {/* <Mypost/> */}
        

      </main>

    </>

  );
};

export default Myprofile