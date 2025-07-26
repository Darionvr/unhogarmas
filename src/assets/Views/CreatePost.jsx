import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../Context/UserContext'

const CreatePost = () => {
  const inputphoto = useRef(null);
  const fileInputRef = useRef(null);
  const { token } = useContext(UserContext);

  const initial = {
    nombre: "",
    especie: "",
    edadAprox: "",
    peso: "",
    sexo: "",
    chip: "",
    foto: null,
    description: "",
  };

  const [form, setForm] = useState(initial);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    let newValue;
   if (e.target.type === 'file') { 
    newValue = files ? files[0] : null;
  } else {
    
  }

  setForm({
    ...form,
    [name]: newValue,
  });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.nombre || !form.especie || !form.foto || !form.peso ||
      !form.edadAprox || !form.chip || !form.sexo || !form.description
    ) {
      alert("Todos los campos son obligatorios");
      return;
    }
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Debes iniciar sesión para publicar una mascota.");
      return;
    }


    const formData = new FormData();
    formData.append("name", form.nombre);
    formData.append("specie", form.especie);
    formData.append("age", form.edadAprox);
    formData.append("weight", form.peso);
    formData.append("gender", form.sexo.toLowerCase());
    formData.append("chip", form.chip === "Sí");
    formData.append("photo", form.foto);
    formData.append("description", form.description);

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/pets`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData

      });

      const data = await response.json();

      if (response.ok) {
        alert("Mascota publicada con éxito");
        setForm(initial);
        inputphoto.current.value = "";
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error al enviar datos:", error);
      alert("Ocurrió un error al enviar la publicación.");
    }
  };

  return (
    <main className="create-post-main">
      <div className="create-post-form-container">
        <h1>Crea una nueva publicación</h1>
        <form onSubmit={handleSubmit}>
          <div className="information1">
            <input name="nombre" placeholder="Ingresa el nombre" value={form.nombre} onChange={handleChange} />
            <select name="especie" value={form.especie} onChange={handleChange}>
              <option value="">Especie</option>
              <option value="Perro">Perro</option>
              <option value="Gato">Gato</option>
              <option value="Conejo">Conejo</option>
            </select>
            <input name="edadAprox" placeholder="Ingresa edad aprox" value={form.edadAprox} onChange={handleChange} />
          </div>

          <div className="information2">
            <input name="peso" placeholder="Ingresa el peso" value={form.peso} onChange={handleChange} />
            <select name="sexo" value={form.sexo} onChange={handleChange}>
              <option value="">Sexo de la mascota</option>
              <option value="Macho">Macho</option>
              <option value="Hembra">Hembra</option>
            </select>
            <select name="chip" value={form.chip} onChange={handleChange}>
              <option value="">¿Tiene chip?</option>
              <option value="Sí">Sí</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="photo" onClick={() => inputphoto.current?.click()}>
            <input
              type="file"
              name="foto"
              ref={inputphoto}
              onChange={handleChange}
              style={{ display: "none" }}
            />
            <FontAwesomeIcon icon={faUpload} />
            {form.foto ? (
              <span className="file-name">{form.foto.name}</span>
            ) : (
              <span>Selecciona tu foto de perfil</span>
            )}
          </div>

          <div className="description">
            <label>Descripción</label>
            <textarea
              className="textareaCp"
              value={form.description}
              name="description"
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className='melon-button'>
            <FontAwesomeIcon icon={faUpload} /> Publicar mascota
          </button>
        </form>
      </div>
      <div className="create-post-photo">
        <img src="imgs/create-post-frame.png" alt="" />
      </div>
    </main>
  );
};

export default CreatePost;
