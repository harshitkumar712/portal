import React from 'react';
import {Link} from 'react-router-dom'
import '../../styles/viewcategory.css'
const CategoryData=[
	{
		title:'NEET'
	},
	{
		title:'AIIMS',
		
	},
	{
		title:'IIT JEE',
		
	},
	{
		title:'PGIMER',
		
	},
	{
		title:'CAT',
		
	},
	{
		title:'GATE',
		
	},

];

const ViewCategory =()=>{

const cData=CategoryData.map((item,index)=>{
	return(
		<div className='category-item'>
		<h2 className='category-text' key={index}>
			{item.title}
		</h2>
		<button ><a className="category-link" href="http://localhost:3000/admin/addarticle" target="_blank">Create New Article/Post</a></button>
		<button>Show Created Posts</button>
		<button>Modify Created Post</button>
		</div>
		)
})

	
		return(
			<div className="category-container">{cData}</div>
			)
	
}

export default ViewCategory;