import React,{useState} from 'react';
import '../../styles/header.css'
import {Link} from 'react-router-dom'
import Sidebar from './Sidebar'
const Header =()=>{

const [sidebar,setSidebar]=useState(false);

const showSidebar=()=>setSidebar(!sidebar);
	return(
		<div>
		<div className="header">
       <Link to='#' className="bars"><i onClick={showSidebar} className="fas fa-bars"></i></Link>
       <h3 style={{color:'white',marginRight:'1rem',fontSize:'1.5rem'}}>Admin Dashboard</h3>
			</div>

			<div className={sidebar?'menu active':'menu'}>
				<ul className="menu-items">
					<li className="menu-toggle">
						<Link to="#" className="cross">
							<i className="fas fa-times" onClick={showSidebar} ></i>
						</Link>
					</li>
					<Sidebar onclick={showSidebar}/>
				</ul>

			</div>

			</div>
		)
}


export default Header;