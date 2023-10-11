import React, {useState, useEffect, useRef} from 'react'

const TodoForm = (props) => {
const [input, setInput] = useState(props.edit ? props.edit.value : '');
const inputRef = useRef(null);

useEffect(() => {
	inputRef.current.focus();
})

const handleSubmit = (e) => {
	e.preventDefault();

	props.onSubmit({
		id: Math.floor(Math.random() * 10000),
		text: input
	});

	setInput('');
}

const handleChange = (e) => {
	setInput(e.target.value);
}

	return (
		<form className='todo-form' onSubmit={handleSubmit}>
			{props.edit ? (
				<>
					<input value={input} ref={inputRef} placeholder='Update your item' type='text' className='todo-input edit' onChange={handleChange}/>
					<button className='todo-button edit' onClick={handleSubmit}>Update</button>
				</>
			)
			: 
			(
				<>
					<input value={input} ref={inputRef} placeholder='Enter to do item' type='text' className='todo-input' onChange={handleChange}/>
					<button className='todo-button' onClick={handleSubmit}>Add todo</button>
				</>
			)}
		</form>
	);
}

export default TodoForm;