import React from 'react'
import { useForm } from '../../hooks/useform';
import ButtonAdd from './button_add';

const AddTask = ({ handleNewTask }) => {
  const { description, onInputChange, onResetForm } = useForm({
		description: '',
	})

	const onFormSubmit = e => {
		e.preventDefault();

		if (description.length <= 1) return;

		let newTask = {
			id: new Date().getTime(),
			description: description,
			done: false,
		}

		handleNewTask(newTask);
		onResetForm();
	}

  return (
    <form onSubmit={onFormSubmit}>
			<input
				type='text'
				className='input-add'
				name='description'
				value={description}
				onChange={onInputChange}
				placeholder='Agrega una tarea'
			/>
      <ButtonAdd/>
		</form>
	)
}

export default AddTask

