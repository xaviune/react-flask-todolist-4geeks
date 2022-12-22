import React from "react";
import { Button } from "react-bootstrap";


const RefreshButton = (props) => {
	const todos=props.todos;
	const setTodos=props.setTodos;
    
	return (
        <>
        <Button variant="outline-danger" 
        onClick={() => setTodos([])}
        >Eliminar todas las tareas</Button> {''}
        </>
	);
};

export default RefreshButton;