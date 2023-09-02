/* Formulario de Contacto Avanzado: Crea un formulario de contacto que incluya campos para nombre,
 correo electrónico, mensaje y una lista desplegable para seleccionar el motivo del contacto. 
Implementa la validación y muestra mensajes de error si el campo está. */

import { useState } from 'react'

function ControlledForm() {

  const [formData, setFormData] = useState({
    username: '',
    email: ''
  })


  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
  }


  return (
    <form onSubmit={handleSubmit}>
      <input
        name='username'
        placeholder='Nombre de usuario'
        type='text'
        // pattern="\d{1,2}/\d{1,2}/\d{4}"
        onChange={handleChange}
        value={formData.username}
      />
      <input
        name='email'
        placeholder='email'
        // type='email'
        onChange={handleChange}
        value={formData.email}
      />
      <input type='submit' value="enviar" />
    </form>
  )
}

export default ControlledForm