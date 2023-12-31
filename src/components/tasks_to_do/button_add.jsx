import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

function ButtonAdd() {
  const [efectoActivo, setEfectoActivo] = useState(false);

  const activarEfecto = () => {
    setEfectoActivo(true);
    setTimeout(() => {
      setEfectoActivo(false);
    }, 1000)
  };

  return (
    <button
      className={`btn_add ${efectoActivo ? 'activo' : ''}`}
      onClick={activarEfecto}
      type={"submit"}
    >
      <span className='botonName'>Agregar   <FaPlus/></span>
    </button>
  );
}

export default ButtonAdd;