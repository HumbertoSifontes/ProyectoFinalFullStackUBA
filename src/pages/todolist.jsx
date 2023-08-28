import React from 'react'
import AddTask from '../components/tasks_to_do/add_task';
import { useTask } from '../hooks/usetask';
import TaskList from '../components/tasks_to_do/task_list';

function ToDoList() {

    const {
		tasks,
		tasksCount,
		pendingTasksCount,
		handleNewTask,
		handleDeleteTask,
		handleCompleteTask,
		handleUpdateTask,
	} = useTask();


  return (
    <div className="row todo_card">
        <div className="col-10 col-md-8 col-lg-8">
            <div className="card text-center pb-2>ToDoList</div">
                <div className="section">
                    <h1>Lista de Tareas</h1>
                </div>
                <div className="section tasks_counter">
                    <h5>N° de Tareas: <span>{tasksCount}</span></h5>
                    <h5>Pendientes: <span>{pendingTasksCount}</span></h5>
                </div>
                <div className="section">
                    <AddTask handleNewTask={handleNewTask}/>
                </div>
                <div className="section tasks_list">
                <TaskList
					tasks={tasks}
					handleUpdateTask={handleUpdateTask}
					handleDeleteTask={handleDeleteTask}
					handleCompleteTask={handleCompleteTask}
				/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ToDoList