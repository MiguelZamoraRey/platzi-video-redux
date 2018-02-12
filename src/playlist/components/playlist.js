import React from 'react';
import Media from './media.js';
import './playlist.css';

function PlayList(props){
	const playlist = props.playlist;
		return (
			<div className="PlayList">
				{
					props.playlist.map((item) => {
						return(
						 <Media 
						 	openModal = {props.handleOpenModal}
							key = {item.id} 
							{...item}
						/>)
					})
				}
			</div>
		)
}

export default PlayList;
