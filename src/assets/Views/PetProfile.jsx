import { Link } from 'react-router'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PetProfile = () => {
  const { id } = useParams();
  const [animal, setAnimal] = useState(null);

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/pets/${id}`);
        const data = await res.json();
        setAnimal({
          nombre: data.name,
          especie: data.specie,
          tamaño: data.weight > 10 ? 'grande' : data.weight > 5 ? 'medianos' : 'enano',
          edad: data.age,
          sexo: data.gender,
          peso: data.weight,
          imagen: data.photo,
          chip: data.chip,
          descripcion: data.description
        });
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
        <img src="imgs\Pet-photo1.png" alt="" />
      </div>
      <div className="pet-info">
        <h1> {animal.nombre}</h1>
        <p>Especie: <span>{animal.especie}</span> </p>
        <p>Edad: <span>{animal.edad}</span></p>
        <p>Peso: <span>{animal.peso} </span></p>
        <p>Sexo: <span> {animal.sexo === 'male' ? 'Macho' : animal.sexo === 'female' ? 'Hembra' : 'Desconocido'}</span></p>
        <p>Chip: <span>{animal.chip === true ? 'Sí tiene chip' : animal.chip === false ? 'No tiene chip' : 'Desconocido'}</span></p>
        <p>Descripcion: {animal.descripcion}</p>
        <button className='melon-button'> <Link to={'/adoptionform'}>  Comenzar adopción</Link></button>
      </div>
    </main>
  )
}

export default PetProfile