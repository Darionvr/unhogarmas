import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from 'react'

const CreatePost = () => {
  const inputphoto = useRef(null);

  const fileInputRef = useRef(null);


  const initial = {
    nombre: "",
    raza: "",
    edadAprox: "",
    peso: "",
    sexo: "",
    chip: "",
    foto: null,
    descripcion: "",
  }

  const [form, setForm] = useState(initial)

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.raza || !form.foto || !form.peso ||
      !form.edadAprox || !form.chip || !form.sexo || !form.descripcion) {
      alert("Todos los campos son obligatorios");
      return;
    }
    console.log(form)

    setForm(initial);
    inputphoto.current.value = "";
  };


  return (
    <>
      <main className="create-post-main">
        <div className="create-post-form-container">
          <h1>Crea una nueva publicación</h1>
          <form onSubmit={handleSubmit}>
            <div className="information1">
              <input name="nombre" placeholder="Ingresa el nombre" value={form.nombre} onChange={handleChange} />
              <input name="raza" placeholder="Ingresa la raza" value={form.raza} onChange={handleChange} />
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
            <div className="photo" onClick={() => fileInputRef.current && fileInputRef.current.click()}>
              <input type="file"
                name="foto"
                ref={inputphoto}
                onChange={handleChange} style={{ display: "none" }} />
              <FontAwesomeIcon icon={faUpload} />
              {form.file ? <span className="file-name">{form.file.name}</span> : <span> Selecciona tu foto de perfil</span>}
            </div>

            <div className="description">
              <label>Descripción</label>
              <textarea className="textareaCp" value={form.descripcion} name="descripcion"
                onChange={handleChange}></textarea>
            </div>
          
              <button type="submit"  className='melon-button'>
                <FontAwesomeIcon icon={faUpload} /> Publicar mascota
              </button>
           

          </form>
        </div>
        <div className="create-post-photo">
          <img src="imgs\create-post-frame.png" alt="" />
        </div>
      </main>

    </>

  )
}

export default CreatePost;