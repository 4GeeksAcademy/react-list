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
		const handleArrayUpdate = (evt) => {
			if(evt.keyCode===13){
				if (inputValue.trim() !== '') {
					// Add a new element at the end of the array
					const newArray = [...array, inputValue];
		
					// Update the array state
					setArray(newArray);
		
					// Clear the input field
					setInputValue('');
				}
			}
		};
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
									onKeyDown={handleArrayUpdate}
									
								/>
									</li>
									{array.map((task,index)=>(
									<div key={index}> <li  className={`list-group-item list-group-item-secondary ${index==0?"":"flex-container"}`} >
									<div className={index==0?"":"text"}>
									{task} 	
									</div>
									<div className="img">
									<a onClick={handleArrayDelete} hidden={index==0?true:false}>
									<svg id={index} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9e9e9e" fill="none" strokeLinecap="round" strokeLinejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
									<path d="M18 6l-12 12" />
									<path d="M6 6l12 12" />
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
			</div>

			
		);
};

export default Home;
