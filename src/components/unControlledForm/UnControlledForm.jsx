/* Lista de Tareas (No Controlado): 
Crea una lista de tareas donde los usuarios puedan agregar elementos a través de un campo de entrada 
y se muestren en una lista. Utiliza un enfoque no controlado para gestionar la entrada del usuario.
*/
import { useRef } from 'react'

export const UnControlledForm = () => {

  const usernameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {

    e.preventDefault();

    const formData = {
      username: usernameRef.current.value,
      email: emailRef.current.value
    }

    console.log({ formData })
  }


  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='Nombre de usuario' ref={usernameRef} type='text' />
      <input type='email' ref={emailRef} placeholder='email' />
      <input type='submit' value="enviar" />
    </form>
  )
}
