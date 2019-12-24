import * as React from 'react';
import jsonData from '../Assets/continents.json';
import  '../App.css';
import HeaderComponent from '.././components/Header/HeaderComponent';
import SelectedContinent from '.././components/SearchBox/SelectedContinent';
import ListOfOptions from '.././components/SearchBox/ListOfOptions';
import DisplayFlagContainer from '.././components/Flags/DisplayFlagContainer';
 
 
class FlagPicker extends React.Component {
constructor(props)
{
    super(props);
	//Initializing state
    this.state={
	continentArr:[], //holds continents
	selectedContinent:"",//holds the continent user selects
	showSelectedContinent:false, // boolean,set when user selects continent
	loadList:false, // boolean whether to load list of continents or not
	loadCountries:false,// boolean whether to load list of countries or not
	countriesArr:[],//holds countries
	flagArr:[],//holds continent flag code
	loadCheckList:false, //boolean whether to load list of countries or not
	displayFlags:false,//boolean to display flags or not
	countryCode:[], //holds the selected country flag codes
	whichToLoad:"continent"
	};
	
	//Binding Events to handlers
	this.filterInput=this.filterInput.bind(this); 
	this.selectedItem=this.selectedItem.bind(this);
	this.filterFlagInput=this.filterFlagInput.bind(this);
	this.selectedItem=this.selectedItem.bind(this);
	this.selectedCheckItem=this.selectedCheckItem.bind(this);
	this.onFocusout=this.onFocusout.bind(this);
	this.onfocusin=this.onfocusin.bind(this);
	this.clearFlagHandler=this.clearFlagHandler.bind(this);
	this.focusClear=this.focusClear.bind(this);
	     
}
componentDidMount()
{
	/*Loading 
	continent array*/
    let continentArrLoc=[];
    for(let i=0;i<jsonData.length;i++)
    {
        continentArrLoc=continentArrLoc.concat(jsonData[i].continent);
    }
    if(continentArrLoc.length!==0)
    {
        this.setState({
                        continentArr:continentArrLoc
                    });
    }   
}
 
filterInput(e)
{
	let thisEvent=e;
	e.persist();
	let userInput="";
	
    this.setState(
    {
        loadList:true,
    });
	userInput=document.getElementById("myInput").value.toString().toUpperCase();
	
	let tags=document.getElementsByClassName("listItems");

 
if(userInput!=="")
{
 
    for(let j=0;j<tags.length;j++)
    {
        let tagValue=tags[j].textContent.toString().toUpperCase();
        if(tagValue.indexOf(userInput) > -1)
        {
            tags[j].style.display = "";                
        }
        else
        {
            tags[j].style.display = "none";
 
        }
                  
    }
}
else
{
 
for(let tag=0; tag<tags.length;tag++)
{
tags[tag].style.display="";
}
 
}
}
filterFlagInput(e)
{
    let userInput=document.getElementById("myFlagInput").value.toString().toUpperCase();
    let tags=document.getElementsByClassName("countriesList");
        for(let j=0;j<tags.length;j++)
        {
            let tagValue=tags[j].textContent.toString().toUpperCase();
            if(tagValue.indexOf(userInput) > -1)
            {
                tags[j].style.display = "";
            }
            else
            {
                tags[j].style.display = "none";
           }           
        }
}
selectedItem(e)
{
    let userInput=e.target.id;
    let countriesArrLoc=[];
    let justCountries=[];
    let justFlags=[];
    for(let eachContinent in jsonData)
    {
        if(jsonData[eachContinent].continent===userInput)
        {
            countriesArrLoc=countriesArrLoc.concat(jsonData[eachContinent].countries);
        }
                               
                }
                for(let eachCountry in countriesArrLoc)
                {
                                justCountries.push(countriesArrLoc[eachCountry].name);
                                justFlags.push(countriesArrLoc[eachCountry].flag);
                              
                               
                }
              

        this.setState(
        {
            selectedContinent:e.target.id,
            showSelectedContinent:true,
            loadList:false,
            loadCheckList:true,
            countriesArr : justCountries,
            flagArr:justFlags
                                              
        }
    );
                                 
}
selectedCheckItem(e)
{
    let countArrLoc=[...this.state.countriesArr];
    let index= countArrLoc.indexOf(e.target.value.toString());
	let countryCode=this.state.flagArr[index].toString().toUpperCase();
    let countryCodeArr=this.state.countryCode;
    if(document.getElementById(e.target.id).checked)
    {
		if(countryCodeArr.indexOf(countryCode)=== -1)
			countryCodeArr.push(countryCode);
    }
    else
    {
       if(countryCodeArr.indexOf(countryCode)> -1)
        {
			countryCodeArr.splice(countryCodeArr.indexOf(countryCode),1);
			
        }
    }
    this.setState(
    {
        displayFlags:true,
        countryCode:countryCodeArr
    });
 
}
onFocusout(e)
{
e.target.value="";
}
onfocusin(e)
{
	this.setState(
	{
		loadCountries:true
	});
	let tags=document.getElementsByClassName("countriesList");
	for(let i=0; i<tags.length;i++)
	tags[i].style.display="";


}
clearFlagHandler()
{
	let tags=document.getElementsByClassName("countriesList");
	for(let i=0; i<tags.length;i++)
	tags[i].style.display="none";
	let childElement=document.getElementsByClassName("checkbox");
	for(let i=0;i<childElement.length;i++)
		childElement[i].checked=false;
	this.setState({
                displayFlags:false,
				countryCode:[],
				loadCheckList:false
                });
}
focusClear(e)
{
	let countryListBox= document.getElementsByClassName("countriesList");
	let childElement=document.getElementsByClassName("checkbox");
	let continentListBox= document.getElementsByClassName("listItems");
	if(countryListBox.length !==0 && this.state.loadList==false)
	{
		for(let i=0;i<countryListBox.length;i++)
		{
			countryListBox[i].style.display="none";
			childElement[i].checked=false;
		}
	}
	else
	{
		
		for(let i=0;i<countryListBox.length;i++)
		{
			countryListBox[i].style.display="none";
			childElement[i].checked=false;
		}
		for(let i=0;i<continentListBox.length;i++)
		{
			continentListBox[i].style.display="";
			
		}

		this.setState({
			loadList:true
		});
	}
}
render () {    
return (
<div className="parentDiv">
    <HeaderComponent/> 								
	<ListOfOptions 
				onBlur={this.onFocusout} 
				onKeyUp={this.filterInput} 
				onFocus={this.focusClear}
				loadList={this.state.loadList} 
				continentArr ={this.state.continentArr} 
				onClick={this.selectedItem}
				whichToLoad="continents"/>
				
	<SelectedContinent 
				showContinent={this.state.showSelectedContinent} 
				selectedContinent={this.state.selectedContinent}/>
				
	<ListOfOptions 
				showContinent={this.state.showSelectedContinent}
				onFocus={this.onfocusin} 
				onBlur={this.onFocusout} 
				onKeyUp={this.filterFlagInput}
				onChange={this.selectedCheckItem}
				countriesArr={this.state.countriesArr}
				whichToLoad="countries"/>
				
	<DisplayFlagContainer
				displayFlags={this.state.displayFlags}
				countryCode={this.state.countryCode}
				onClick={this.clearFlagHandler}/>
			
  
</div>
);
}
}
 
export default FlagPicker;
 
