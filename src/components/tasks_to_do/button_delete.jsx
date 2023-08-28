import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

function ButtonDelete() {
  
  const [efectoActivo, setEfectoActivo] = useState(false);

  const activarEfecto = () => {
    setEfectoActivo(true);
    setTimeout(() => {
      setEfectoActivo(false);
    }, 1000)
  };
  
  return (
    <button
      className={`btn_delete ${efectoActivo ? 'activo' : ''}`}
      onClick={activarEfecto}
      type={"submit"}
    >
      <span className='botonName'><FaTrash/></span>
    </button>
  );
}

export default ButtonDelete;