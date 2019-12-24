import React from 'react';
import  '../../App.css';
const DisplayFlagSubComponent=(props)=>
{
	
	
		return(
		props.countryCode.map((item) => {
				return (
						<div className="flagContainer">
						<img src={`http://www.countryflags.io/${item}/shiny/64.png`} 
							 alt="Failed to load..."
							 onerror='alert("connection is dead")'/>
						</div>
						);
			})

		);
	
	
};
 
export default DisplayFlagSubComponent;
 

				
