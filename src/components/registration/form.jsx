import React from 'react'
import ButtonForm from './button_form'

const Form = () => {
  return (
    <div className="container-fluid formulario">
        <div className="row m-0">
            <div className="col-md-12 p-0 pt-4 pb-4">
                <form action="https://formsubmit.co/citovis217@rc3s.com" method="POST" className="p-4.m-auto"> 
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <input type="text" className="form-control" name="nombre" required placeholder="Crea un Usuario"/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="mb-3">
                                <input type="email" className="form-control" name="mail" required placeholder="Ingresa un Correo electronico"/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="mb-3">
                                <input type="password" className="form-control" name="asunto" required placeholder="Ingrese una clave"/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="mb-3">
                                <input type="password" className="form-control" name="asunto" required placeholder="Confirme la clave"/>
                            </div>
                        </div>
                    </div>
                    <ButtonForm/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Form