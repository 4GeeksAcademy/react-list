import React from "react";
import { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	    // Define the initial array state
		const [array, setArray] = useState(["You Need To Add New Task on The Task List"]);
		const [inputValue, setInputValue] = useState('');
		// Event handler for updating the array
		const handleArrayADD = (evt) => {
			if(evt.keyCode===13){
				if (inputValue.trim() !== '') {
					// Add a new element at the end of the array
					const newArray = [...array, inputValue];
		
					// Update the array state
					setArray(newArray);
		
					// Clear the input field
					setInputValue("");
				}
			}
		};
		const handleArrayUpdate=(evt)=>{
			return(console.log(evt));
		}
		const handleArrayDelete=(evt)=>{
			const newArray = [
				...array.slice(0, parseInt(evt.target.id)), // Elements before the one to delete
				...array.slice( parseInt(evt.target.id) + 1) // Elements after the one to delete
			  ];
			  setArray(newArray); // Triggers a re-render with the new array
		}
		return (

			<div className="container d-grid justify-content-center">
				{/* Input field to enter new elements */}
				
	
	
				{/* Display the current array */}
				{/*<div>Array: {JSON.stringify(array)}</div>*/}


						<div className="list">
								<ul className="list-group ">
									<li className="list-group-item list-group-item-secondary">
									<input
									type="text"
									value={inputValue}
									onChange={(e) => setInputValue(e.target.value)}
									placeholder="Enter a task"
									onKeyDown={handleArrayADD}
									
								/>
									</li>
									{array.map((task,index)=>(
									<div key={index}> <li  className={`list-group-item list-group-item-secondary ${index==0?"first":"flex-container"}`} >
									<div className={index==0?"":"text"}>
									{index==0?task:
									<input type="text"
									 defaultValue={task} 
									 disabled
									 />
									} 	
									</div>
									<div className="img flex-container">
									<a onClick={handleArrayDelete} hidden={index==0?true:false}>
									<svg id={index} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
									</svg>
									</a>
									<a onClick={handleArrayUpdate} hidden={index==0?true:false}>
									<svg id={index} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
									</svg>
									</a>
									</div>
									</li> 
									</div>
									))}
									<li  className="list-group-item list-group-item-secondary">
									{`${array.length-1} Items` }
									</li>
								</ul>
						</div>
						<div className="pag1 list-group-item-secondary"></div>
						<div className="pag2 list-group-item-secondary"></div>
			</div>

			
		);
};

export default Home;
