import React, { useState } from 'react';
import UpdateTask from './update_task';
import { FaTrash } from 'react-icons/fa';

const TaskItems = ({
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
      <UpdateTask task={task} handleUpdateTask={handleUpdateTask} />
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

export default TaskItems;