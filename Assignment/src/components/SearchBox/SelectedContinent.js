import React from 'react';
import  '../../App.css';
 
const SelectedContinent=(props)=>
{
	if(props.showContinent)
	{
    return (
				<div className="belowContainer">
					<br/>
					<strong> <p> You selected </p> <p className="largeFont"> {props.selectedContinent}</p> </strong>
				</div>		
			);
	}
	else
		return null;
};
 
export default SelectedContinent;
