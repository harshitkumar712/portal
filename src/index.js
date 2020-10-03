import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, BrowserRouter as Router} from 'react-router-dom'
// import App from './App';
import Admin from './components/admin/Admin'
import * as serviceWorker from './serviceWorker';
import AddArticle from './components/admin/AddArticle'
import ViewCategory from './components/admin/ViewCategory'
import AdminLogin from './components/admin/AdminLogin'

const routing =(
	<Router>
		<div>
		
			<Route exact path='/' component={AdminLogin} ></Route>
			<Route path ='/admin' component={Admin}></Route>
			<Route path ='/admin/addarticle' component={AddArticle}></Route>
			<Route path ='/admin/viewcategory' component={ViewCategory}></Route>
				
			{/* <Route path='/user' component={User}></Route> */}
		
		</div>
	</Router>
	)





ReactDOM.render(
    routing
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
