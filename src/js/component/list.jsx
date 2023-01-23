import React, {useState} from "react";
import { XIcon } from "@primer/octicons-react";

const List = (props) => {
	const todos=props.todos;
	const setTodos=props.setTodos;
	const [Visibility, setVisivility] = useState({visibility: 'hidden'})
	return (
		<>
		{todos.map ((item, index) => (
			<div className="border border-secondary p-2 show"> {item.label}<div className="final hide"
			onClick={
				() => 
			setTodos(
				todos.filter(
					(t, currentIndex) =>
						index != currentIndex
			))}>
				<XIcon size={24}/></div></div>
			))}
		
		</>
	);
};

export default List;