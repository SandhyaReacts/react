import React from 'react';
import  '../../App.css';
import DisplayFlagSubComponent from './DisplayFlagSubComponent';
 
const DisplayFlagContainer=(props)=>
{
    
	if(props.displayFlags)
	{
			return(
				<div>
				<strong> <p className="largeFont"> Selected Flags:</p> </strong>
				<br/>
				<div className="parentFlag">
					<DisplayFlagSubComponent countryCode={props.countryCode}/>
				</div>
				<br/>
				<button className="clearFlags" onClick={props.onClick}> Clear Flags </button>
			</div>);

	}
	else
		return null;
	;
};
 
export default DisplayFlagContainer;

/*
            <div>
                <strong> <p className="largeFont"> Selected Flags:</p> </strong>
                <br/>
                <div className="parentFlag">
                    <DisplayFlag countryCode={this.state.countryCode}/> 
                </div>
                <br/>
                <button className="clearFlags" onClick={this.clearFlagHandler}> Clear Flags </button>
            </div>
*/

/*			props.countryCode.map((item) => {
				return (
						<div className="flagContainer">
						<img src={`http://www.countryflags.io/${item}/shiny/64.png`} alt="Failed to load..."/>
						</div>
						);
			})
*/