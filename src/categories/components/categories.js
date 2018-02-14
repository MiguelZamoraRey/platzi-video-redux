import React from 'react';
import Category from './category'
import './categories.css';
import Search from '../../widgets/containers/search.js';
import Media from '../../playlist/components/media';

function Categories(props){
	return (
		<div className="Categories">
			<Search />
			{
				props.search.map((item)=>{
					return <Media
						openModal = {props.handleOpenModal}
						key = {item.get('id')}
						{...item.toJS()}
					/>
				})
			}
			{
				props.categories.map((item)=>{
					return <Category
					 		key = {item.get('id')}
					 		handleOpenModal = {props.handleOpenModal}
					 		{...item.toJS()}
					 		/>
				})
			}
		</div>
	)
}

export default Categories;