import React from 'react';
import  '../../App.css';
 /*Loads the 
	heading*/
const HeaderComponent=()=>
{
    return (
            <div className="header">
             <strong>
				<p className="appName"> Flag Picker </p>
				<p className="appDesc colorgray"> <span> This app will help you learn flag around the world in </span>
				<span className="underlineText">3 steps </span> </p>
			</strong>
			</div>
			);
};
 
export default HeaderComponent;
