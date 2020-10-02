import React from 'react';
import {Link} from 'react-router-dom'
import '../../styles/sidebar.css'
const SidebarData=[
	{
		title:'Add Category',
		path:'/admin/addcategory'
	},
	{
		title:'Add Article',
		path:'/admin/addarticle'
	},
	{
		title:'View Category',
		path:'/admin/viewcategory'
	},
	{
		title:'Menu 4',
		path:'/admin/addarticle'
	},
	{
		title:'Menu 5',
		path:'/admin/addarticle'
	},
	{
		title:'Menu 6',
		path:'/admin/addarticle'
	},

];

const Sidebar =({onclick})=>{

const sData=SidebarData.map((item,index)=>{
	return(
		<li className='menu-text' onClick={onclick} key={index}>
			<Link to={item.path} >{item.title}</Link>
		</li>
		)
})

	
		return(
			<div>{sData}</div>
			)
	
}

export default Sidebar;