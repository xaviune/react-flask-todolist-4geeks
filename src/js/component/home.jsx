import React, { useEffect, useState } from "react";
import Input from "./input.jsx";
import List from "./list.jsx";
import RefreshButton from "./RefreshButton.jsx";



const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [todos, setTodos] = useState([])

	useEffect(() => {
		fetch(`https://assets.breatheco.de/apis/fake/todos/user/xaviune`)
		.then(response => {
			return response.json()
		}).then(data =>{
			setTodos([...data])
		})
	}, [])
	
	useEffect(()=>{
	fetch("https://assets.breatheco.de/apis/fake/todos/user/xaviune",{ 
		method: 'PUT', 
		body: JSON.stringify(todos), 
		headers:{'Content-Type': 'application/json'}
	})
  	.then(response => console.log('Success:', JSON.stringify(response)))
  	.catch(error => console.error('Error:', error));
	}, [todos])
		

	return (
		<div className="container">
			<h1 className="text-center mainTitle mt-5">todos</h1>
			<div className="row">
				<div className="border border-secondary p-2"> 
					<Input inputValue={inputValue} setInputValue={setInputValue} todos={todos} setTodos={setTodos}/>
					<List todos={todos} setTodos={setTodos}/>
				</div>
			<p className="text-secondary">{todos.length} items left</p>
			<RefreshButton todos={todos} setTodos={setTodos}/>
			</div>
		</div>
	);
};

export default Home;
