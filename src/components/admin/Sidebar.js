import React from "react";
// import { Link } from "react-router-dom";
import Dropdown from './Dropdown';
import "../../styles/sidebar.css";
const SidebarData = [
	{ id: 1, title: "Category"},
	{ id: 2, title: "Article" },
	{ id: 3, title: "Content Admin"},
	// { id: 4, title: "Menu 4" },
	// { id: 5, title: "Menu 5" },
	// { id: 6, title: "Menu 6" },
];

const Sidebar = ({ onclick }) => {

// const showDropdown=(e)=>setDropdown(!dropdown);
   const showDropdown=(e)=>{
   	const drop=e.target.querySelector('.drop');
   	const rotate=e.target.querySelector('.angle');
   	drop.classList.toggle('active');
   	rotate.classList.toggle('down');
   	
   };
	const sData = SidebarData.map((item, index) => {
		return (
			<li className="menu-text"  key={index}>
					<p onClick={showDropdown} ><i className="angle fas fa-angle-right" onClick={(e)=>e.stopPropagation()}></i>&nbsp;&nbsp;{item.title}
				<span onClick={(e)=>e.stopPropagation()} className='drop'>
				<Dropdown barid={item.id} onclick={onclick}/>
				</span></p>
			</li>
		);
	});

	return <div>{sData}</div>;
};

export default Sidebar;
