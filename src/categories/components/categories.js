import React from 'react';
import Category from './category'
import './categories.css';
import Search from '../../widgets/containers/search.js';

function Categories(props){
	return (
		<div className="Categories">
			<Search />
			{
				props.categories.map((item)=>{
					return <Category
					 		key = {item.id}
					 		handleOpenModal = {props.handleOpenModal}
					 		{...item}
					 		/>
				})
			}
		</div>
	)
}

export default Categories;