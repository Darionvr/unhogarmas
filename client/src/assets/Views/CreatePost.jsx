

const CreatePost = () => {


  return (
    <>
      <div className="container">
        <h1>Crea una nueva publicacion</h1>
        <form action="">
          <div className="information1">
            <input name="nombre" placeholder="Ingresa el nombre" />
            <input name="raza" placeholder="Ingresa la raza" />
            <input name="edad" placeholder="Ingresa edad aprox" />
          </div>
          <div className="information2">
            <input name="peso" placeholder="Ingresa el peso" />
            <select name="sexo">
              <option value="">Sexo de la mascota</option>
              <option value="Macho">Macho</option>
              <option value="Hembra">Hembra</option>
            </select>
            <select name="chip">
              <option value="">¿Tiene chip?</option>
              <option value="Sí">Sí</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="photo">
            <label>
             <input type="file"  />
              <button type="button">+</button>
            </label>

          </div>

          <div className="description">
            <label>Descripción</label>
            <textarea name="descripcion"></textarea>
          </div>
          <button type="submit" className="btn-submit">
            Publicar mascota
          </button>
        </form>
      </div>

    </>

  )
}

export default CreatePost;