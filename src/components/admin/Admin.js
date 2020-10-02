import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import '../../styles/admin.css'
import Header from './Header'

const category_data=[
       {id:1,
       category:'AIIMS'
   },
   {id:2,
       category:'CPMT'
   },
   {id:3,
       category:'AIIMS'
   },
	];



class Admin extends React.Component{

   
	


	render(){
		return(
			<div>
				<Header/>
				
				
			</div>
			)
	}
}

export default Admin;