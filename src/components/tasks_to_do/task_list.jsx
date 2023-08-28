import React from 'react';
import Task_Items from './task_items';

const Task_List = ({
	tasks,
	handleUpdateTask,
	handleDeleteTask,
	handleCompleteTask,
}) => {
	return (
		<ul>
			{tasks.map(task => (
				<Task_Items
					key={task.id}
					task={task}
					handleUpdateTask={handleUpdateTask}
					handleDeleteTask={handleDeleteTask}
					handleCompleteTask={handleCompleteTask}
				/>
			))}
		</ul>
	)
}
export default Task_List