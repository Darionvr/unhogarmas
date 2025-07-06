import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const AdoptList = () => {
  const [especie, setEspecie] = useState('');
  const [tamaño, setTamaño] = useState('');
  const [edad, setEdad] = useState('');

  const animals = [
    {
      id: 1,
      nombre: "Michito",
      especie: "Gato",
      tamaño: "enano",
      edad: 1,
      sexo: "Macho",
      peso: "3kg",
      imagen: "https://www.anicura.es/cdn-cgi/image/f=auto,fit=cover,w=640,h=640,g=auto,sharpen=1/AdaptiveImages/powerinit/52437/_SNI2031.jpg?stamp=a2efc90c9d13cd9fdc0f5f7a2e3b2231238dc8cf"
    },
    {
      id: 2,
      nombre: "Don Perro",
      especie: "Perro",
      tamaño: "grande",
      edad: 4,
      sexo: "Macho",
      peso: "50kg",
      imagen: "https://static.nationalgeographic.es/files/styles/image_3200/public/cv1_img8545-edit-copy.webp?w=1600&h=2134"
    }
  ];

  const filtrerSelect = (animal) => {
    const cumpleEspecie = !especie || animal.especie === especie;
    const cumpleTamaño = !tamaño || animal.tamaño === tamaño;
    const cumpleEdad =
      !edad ||
      (edad === '<1' && animal.edad < 1) ||
      (edad === '1=3' && animal.edad >= 1 && animal.edad <= 3) ||
      (edad === '>4' && animal.edad >=4);
    return cumpleEspecie && cumpleTamaño && cumpleEdad;
  };

  const filtrados = animals.filter(filtrerSelect);

  return (
    <>
      <h1>Encuentra a tu nuevo mejor amigo</h1>

      <div className='filtrer'>
        <select name='Especies' onChange={(e) => setEspecie(e.target.value)}>
          <option value="">Especie</option>
          <option value="Gato">Gato</option>
          <option value="Perro">Perro</option>
          <option value="Conejo">Conejo</option>
        </select>

        <select name="Tamaño" onChange={(e) => setTamaño(e.target.value)}>
          <option value="">Tamaño</option>
          <option value="grande">Grande</option>
          <option value="medianos">Mediano</option>
          <option value="enano">Pequeño</option>
        </select>

        <select name="Edad" onChange={(e) => setEdad(e.target.value)}>
          <option value="">Edad</option>
          <option value="<1">Menor de un año</option>
          <option value="1=3">Entre 1 año a 3 años</option>
          <option value=">4">Mayor de 4 años</option>
        </select>
      </div>

      <div className='card-list'>
        {filtrados.map((animal) => (
          <div className='card' key={animal.id}>
            <div className='img'>
              <Link to={`/PetProfile`}>
                <img src={animal.imagen} alt={animal.nombre} />
              </Link>
            </div>
            <div className='cardInfo'>
              <h3>{animal.nombre}</h3>
              <p>Sexo: {animal.sexo}</p>
              <p>Edad: {animal.edad} años</p>
              <p>Peso: {animal.peso}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdoptList;
