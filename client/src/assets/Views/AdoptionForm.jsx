
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'

const AdoptionForm = () => {
    const InitialAdoptionF = {
        NombreCompleto: "",
        Rut: "",
        Edad: "",
        Correo: "",
        Celular: "",
        Domicilio: "",
        TipoVivienda: "",
        PermiteMascotas: "",
        NombreDeLaMascota: "",
        Razon: "",
        ExperienciaMascotas: "",
        Convivencia: "",
        TiempoDisponible: "",
        aceptoVisita: "",
        aceptaLey: "",
        compromiso: "",//preguntar
        informacionVeridica: "",//preguntar
    }


    return (
        <>
            <div className="informationAdoption">
                <h1>Cómo funciona nuestro proceso de adopción</h1>

                <div className="knowledge">
                    <div className="Infor">
                        <div className="circle">1</div>
                        <h2>Encuentra a tu futuro compañero</h2>
                        <h5>Explora nuestra página de Animales en Adopción.
                            La actualizamos todos los días para que puedas encontrar una mascota
                            que se adapte a tu estilo de vida. Si
                            ves uno que te enamora, ¡vamos al siguiente paso!</h5>
                    </div>
                    <div className="Infor">
                        <div className="circle">2</div>
                        <h2>Completa tu solicitud (¡solo una!)</h2>
                        <h5>Puedes llenar la Solicitud de Adopción en línea
                            o directamente en el refugio. No es una reserva,
                            pero sí el primer paso para conocerte mejor.</h5>
                    </div>
                    <div className="Infor">
                        <div className="circle">3</div>
                        <h2> Visítanos y conoce a tu nuevo amigo</h2>
                        <h5>Nuestros asesores te recibirán por orden de llegada,
                            te contarán todo sobre la mascota y verán contigo si es
                            una buena combinación. Ven en nuestro horario de atención para que podamos ayudarte con calma.</h5>
                    </div>

                    <div className="Infor">
                        <div className="circle">4</div>
                        <h2> Adopta con confianza</h2>
                        <h5>Si vives en departamento o condominio, recuerda traer
                            tu contrato o reglamento. Eso nos permite asegurarnos de que
                            tu nuevo amigo esté permitido en tu hogar. ¿Todo listo? ¡Ya casi es parte de tu familia!</h5>
                    </div>

                </div>
            </div>


            <form >
                <div className="FormAdopt">
                    <h3>Datos personales</h3>
                    <div className="infor3">
                        <input name="NombreCompleto" placeholder="Ingresa tu nombre completo" />
                        <input name="Rut" placeholder="Ingresa tu RUT o DNI" />
                        <input name="Edad" placeholder="Ingresa tu edad" type="number" />
                        <input name="Correo" placeholder="Ingresa tu correo electrónico" type="email" />
                    </div>
                    <div className='infor3-5'><input name="Celular" placeholder="Ingresa tu número de celular" />
                        <input name="Domicilio" placeholder="Ingresa tu dirección completa" />
                        <select name="TipoVivienda">
                            <option value="">¿Tipo de vivienda?</option>
                            <option value="Casa">Casa</option>
                            <option value="Departamento">Departamento</option>
                            <option value="Otro">Otro</option>
                        </select>
                        <select name="PermiteMascotas">
                            <option value="">¿Tu arriendo permite mascotas?</option>
                            <option value="Sí">Sí</option>
                            <option value="No">No</option>
                            <option value="Propia">Vivienda propia</option>
                        </select>

                    </div>
                    <h3>Datos de la mascota</h3>
                    <div className="infor4">
                        <input name="NombreDeLaMascota" placeholder="Nombre de la mascota interés" />
                        <select name="TiempoDisponible">
                            <option value="">¿Cuánto tiempo puedes dedicarle al animal al día?</option>
                            <option value="Deseo">Deseo de darle un hogar a un animal abandonado</option>
                            <option value="Terapia">Por motivos terapéuticos o emocionales</option>
                            <option value="Tiempo">Porque tengo el tiempo y espacio adecuados para cuidarla</option>
                        </select>
                        <div className='infor4-5'>

                            <select name="Convivencia">
                                <option value="">¿Quién vive contigo? ¿Hay niños o adultos mayores?"</option>
                                <option value="Solo">Vivo solo</option>
                                <option value="Padres">Vivo con mis padres</option>
                                <option value="Familia">Vivo con mi pareja y mis hijo/s</option>
                                <option value="Rommie">Vivo con rommie</option>

                            </select>
                        </div>

                    </div>
                    <h3>Compromisos y seguimiento</h3>
                    <div className="infor5">
                        <div className="checkbox">
                        
                            <label>
                                <input type="checkbox" name="aceptoLey" />
                                En caso de maltrato, acepto que se retire a la mascota y se tomen acciones legales
                            </label>

                            <label>
                                <input type="checkbox" name="compromiso" />
                                Me comprometo a brindar alimentación, atención veterinaria, cariño y un hogar responsable al animal.
                            </label>
                            <label>
                                <input type="checkbox" name="informacionVeridica" />
                                Declaro que toda la información entregada es verídica.
                            </label>
                        </div>

                    </div>

                    <button type="submit" className="btn-submit">
                        <FontAwesomeIcon icon={faUpload} /> Enviar solicitud
                    </button>



                </div>


            </form>


        </>
    )
}

export default AdoptionForm