import React from 'react';
import TaskItems from './task_items';

const TaskList = ({
	tasks,
	handleUpdateTask,
	handleDeleteTask,
	handleCompleteTask,
}) => {
	return (
		<ul>
			{tasks.map(task => (
				<TaskItems
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
export default TaskList