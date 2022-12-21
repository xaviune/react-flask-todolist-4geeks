import React from "react";


const Input = (props) => {
	const todos=props.todos;
	const setTodos=props.setTodos;
	const inputValue=props.inputValue;
	const setInputValue=props.setInputValue;

	return (
        <input 
					className="col-12 border-0 cream-background"
					type="text" 
					placeholder="What needs to be done?" 
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
					onKeyUp={
						(e) => {
						if	(e.key === "Enter") {
							setTodos([...todos, {"label": e.target.value, "done": false}]);
							setInputValue("");
					}}}
					></input>
	);
};

export default Input;