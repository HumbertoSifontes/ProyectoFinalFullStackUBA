import React, { useState } from 'react';
import Update_Task from './update_task';
import { FaTrash } from 'react-icons/fa';

const Task_Items = ({
	task,
	handleUpdateTask,
	handleDeleteTask,
	handleCompleteTask,
}) => {
  const [efectoActivo, setEfectoActivo] = useState(false);

  const activarEfecto = () => {
    setEfectoActivo(true);
    setTimeout(() => {
      setEfectoActivo(false);
    }, 1000);
  };

  return (
    <li>
      <span onClick={() => handleCompleteTask(task.id)}>
        <label className={`container-done ${task.done ? 'active' : ''}`}></label>
      </span>
      <Update_Task task={task} handleUpdateTask={handleUpdateTask} />
      <button
        className={`btn_delete ${efectoActivo ? 'activo' : ''}`}
        onClick={() => {
          activarEfecto();
          handleDeleteTask(task.id);
        }}
        role={'button'}
        type={'submit'}
      >
        <span className='botonName'><FaTrash/></span>
      </button>
    </li>
  );
};

export default Task_Items;