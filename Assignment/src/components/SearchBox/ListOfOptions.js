import React from 'react';
import  '../../App.css';
import LoadList from './LoadList';
import LoadCountriesList from './LoadCountriesList';
 
const ListOfOptions=(props)=>
{
	if(props.whichToLoad=="continents")
	{
		return(
			<div className="leftContainer">
				<strong>
				<p className="largeFont"> Step 1 </p>
				<p className="colorgray mediumFont"> Select a Continent </p>
				</strong>
				<div id="myDropdown" className="dropdown-content">
					<input type="text" placeholder="" id="myInput" autoComplete="off" onBlur={props.onBlur} onKeyUp={props.onKeyUp} onFocus={props.onFocus}/>
					<LoadList loadList={props.loadList} continentArr={props.continentArr} onClick={props.onClick}/>
				</div>
			</div>
			
		);
	}
	else if(props.whichToLoad==="countries")
	{
		if(props.showContinent)
		{
			return(
			 <div className="midContainer">
				<strong>
					<p className="largeFont"> Step 2 </p>
					<p className="colorgray mediumFont"> Now,Select a Country </p>
				</strong>
				<div id="mycheckDropDown" className="dropdown-content midContainer ">
					<input autoComplete="off" type="text" placeholder="" id="myFlagInput" onFocus={props.onFocus} onBlur={props.onBlur} onKeyUp={props.onKeyUp}/>
					<LoadCountriesList 
						onChange={props.onChange}
						countriesArr={props.countriesArr}/>
				
				</div>
			</div>

			);
		}
	else
		return null;
	}
		return null;
	
};
 
export default ListOfOptions;
 
/*     <div className="leftContainer">
        <strong>
			<p className="largeFont"> Step 1 </p>
            <p className="colorgray mediumFont"> Select a Continent </p>
        </strong>
        <div id="myDropdown" className="dropdown-content">
            <input type="text" placeholder="" id="myInput" autoComplete="off" onBlur={this.onFocusout} onKeyUp={this.filterInput} onFocus={this.focusClear}/>
                {
					this.state.loadList ?
                    this.state.continentArr.map(item => (
                    <a className="listItems" id={item} key={item} onClick={this.selectedItem}>{item}</a>
					))
				: null
                }
        </div>  
    </div>
	*/


			/*if(props.loadList)
			{
				props.continentArr.map((item) => {
				return (
				        <a className="listItems" id={item} key={item} onClick={props.selectedItem}>{item}</a>
						);
				})
			}*/
				
