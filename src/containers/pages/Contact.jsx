import FullWidthLayout from 'hocs/layouts/FullWidthLayout'
import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup';


function handleSubmit(values) {
  // Envía los valores del formulario al backend
  fetch(`${process.env.REACT_APP_API_URL}/api/v1/enviar-correo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(values)
  })
  .then((response) => response.json())
  .then((data) => {
    if (data.message) {
      // Mostrar un mensaje de éxito al usuario
      alert(data.message);
    } else {
      // Manejar cualquier otro escenario, como errores
      console.error(data.error);
    }
  })
  .catch((error) => {
    console.error('Error de red:', error);
  });
}

function Contact() {

  const formik = useFormik({
    initialValues: {
      name: '',
      last_name: '',
      email: '',
      message: ''
    },

    validationSchema: Yup.object({
      name: Yup.string().required('El nombre es requerido'),
      last_name: Yup.string().required('El apellido es requerido'),
      email: Yup.string().email('El correo electronico invalido').required('El correo electronico es requerido'),
      message: Yup.string().required('El mensaje es requerido')
    }),
    onSubmit: handleSubmit
  })




  return (
    <FullWidthLayout>
      <div className='grid min-h-screen place-items-center mt-4 md:lg:mt-20'> 
        {/* <div className='w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12'>
        <h1 className="text-xl font-semibold">Hello there ?, <span class="font-normal">please fill in your information to continue</span></h1>
        </div> */}
        <h1 class="text-xl font-semibold dark:text-white">Hola <span class="font-normal">Llena el siguiente formulario para enviar un mensaje</span></h1>

        <form className='mt-2' onSubmit={formik.handleSubmit}>
        <div className="flex justify-between gap-3">

          <span className="w-1/2">
            <label for="name" className="block text-xs font-semibold text-gray-600 dark:text-white uppercase">Nombre</label>
            <input id="name" type="text" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} placeholder="John" autocomplete="given-name" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
          </span>

          <span className="w-1/2">
            <label for="last_name" className="block text-xs font-semibold text-gray-600 dark:text-white uppercase">Apellido</label>
          <input id="last_name" type="text" name="last_name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.last_name} placeholder="Doe" autocomplete="family-name" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
          </span>
          
        </div>

        <label for="email" className="block mt-2 text-xs font-semibold text-gray-600 dark:text-white uppercase">E-mail</label>
        <input id="email" type="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} placeholder="john.doe@company.com" autocomplete="email" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />

        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
            <label for="message" className="block text-xs font-semibold text-gray-600 dark:text-white uppercase">Mensaje</label>
            <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" name='message' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.message}></textarea>
        </div>

        <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black  dark:bg-white dark:text-dark shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
          Enviar Mensaje
        </button>
    </div>

        </form>
      </div>
    </FullWidthLayout>
  )
}

export default Contact
