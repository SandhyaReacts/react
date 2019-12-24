import React from 'react';
import  '../../App.css';
const Continents=(props)=>
{
	if(props.loadList)
	{
		return(
		props.continentArr.map((item) => {
			return (
				<a className="listItems" id={item} key={item} onClick={props.onClick}>{item}</a>
			);
		})

		);
	}
	else
		return null;
};
 
export default Continents;
 

				
