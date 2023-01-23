import React, {useState} from "react";
import { XIcon } from "@primer/octicons-react";

const List = (props) => {
	const todos=props.todos;
	const setTodos=props.setTodos;
	const [Visibility, setVisivility] = useState({visibility: 'hidden'})
	return (
		<>
		{todos.map ((item, index) => (
			<div className="border border-secondary p-2"
			onMouseEnter={
				e => {setVisivility({visibility: 'visible'})}
			}
			onMouseLeave={
				e => {setVisivility({visibility: 'hidden'})}
			}
			> {item.label}<div className="final"
			onClick={
				() => 
			setTodos(
				todos.filter(
					(t, currentIndex) =>
						index != currentIndex
			))}>
				<div style={Visibility}><XIcon size={24}/></div></div></div>
			))}
		
		</>
	);
};

export default List;