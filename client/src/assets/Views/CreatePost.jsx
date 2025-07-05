import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from 'react'

const CreatePost = () => {
  const inputphoto = useRef(null);


  const initial = {
    nombre: "",
    raza: "",
    edadAprox: "",
    peso:"",
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


  const handleSubmit  = (e) => {
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
  const photoSubmit = () => {
    inputphoto.current.click();

  }

  return (
    <>
      <div className="container">
        <h1>Crea una nueva publicación</h1>
        <form onSubmit={handleSubmit }>
          <div className="information1">
            <input name="nombre" placeholder="Ingresa el nombre"  value={form.nombre} onChange={handleChange} />
            <input name="raza" placeholder="Ingresa la raza"  value={form.raza} onChange={handleChange} />
            <input name="edadAprox" placeholder="Ingresa edad aprox"  value={form.edadAprox} onChange={handleChange} />
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
          <div className="photo">
            <label>
              <input type="file"
                name="foto"
                ref={inputphoto}
                onChange={handleChange} />
              <button type="button" onClick={photoSubmit}>+</button>
             

            </label>

          </div>

          <div className="description">
            <label>Descripción</label>
            <textarea className="textareaCp" value={form.descripcion} name="descripcion" 
            onChange={handleChange}></textarea>
          </div>
          <div className='btn1'>
            <button type="submit" className="btn-submit">
              <FontAwesomeIcon icon={faUpload} /> Publicar mascota
            </button>
          </div>

        </form>
      </div>

    </>

  )
}

export default CreatePost;