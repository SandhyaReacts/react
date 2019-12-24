import React from 'react';
import  '../../App.css';
const LoadCountriesList=(props)=>
{
	
		return(
		props.countriesArr.map((item) => {
			return (
				 <div className="countriesList">
						<input key= {item} value= {item} className="checkbox" type="checkbox" name="" id={item} onChange={props.onChange}/>
						<a key ={`anchor${item}`} className="" id={item}>{item}</a>
                 </div>
			);
		})

		);
};
 
export default LoadCountriesList;
 

				
