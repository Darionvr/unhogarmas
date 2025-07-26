import { Link } from 'react-router'
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';



const PetProfile = () => {
  const { id } = useParams();
  const [animal, setAnimal] = useState(null);
    const { currentUser, setCurrentUser, token } = useContext(UserContext);

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/pets/${id}`);
        const data = await res.json();
        setAnimal(data);
      } catch (err) {
        console.error('Error al obtener datos del animal:', err);
      }
    };


    fetchAnimal();
  }, [id]);

  if (!animal) return <p>Cargando información de la mascota...</p>;


  return (
    <main className='pet-main'>
      <div className="pet-photo">
        <img src={`${import.meta.env.VITE_BACKEND_URL}${animal.photo}`} alt={`Foto de ${animal.name}`} />
      </div>
      <div className="pet-info">
        <h1> {animal.name}</h1>
        <p>Especie: <span>{animal.specie}</span> </p>
        <p>Edad: <span>{animal.age} años</span></p>
        <p>Peso: <span>{animal.weight}kg</span></p>
        <p>Sexo: <span>{{macho: 'Macho',hembra: 'Hembra'
        }[animal.gender?.trim().toLowerCase()] || 'Desconocido'} </span></p>
        <p>Chip: <span>{animal.chip === true ? 'Sí tiene chip' : animal.chip === false ? 'No tiene chip' : 'Desconocido'}</span></p>
        <p>Descripcion: {animal.description}</p>
        <button className='melon-button'> <Link to={'/adoptionform'}>  Comenzar adopción</Link></button>
      </div>
    </main>
  )
}

export default PetProfile