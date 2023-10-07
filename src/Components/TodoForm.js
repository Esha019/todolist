import React, {useState} from 'react'

const TodoForm = () => {
const [input, setInput] = useState('');

const handleSubmit = (e) => {
	e.preventDefault();
}

const handleChange = (e) => {
	setInput(e.target.value);
}

const handleAdd = () => {

}

	return (
		<form className='todo-form' onSubmit={handleSubmit}>
			<input value={input} placeholder='Enter to do item' type='text' className='todo-button' onChange={handleChange}/>
			<button className='todo-button' onClick={handleAdd}>Add todo</button>
		</form>
	)
}

export default TodoForm