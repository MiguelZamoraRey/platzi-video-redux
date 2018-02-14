import React from 'react';
import MediaContainer from '../container/media';
import './playlist.css';

function PlayList(props){
	const playlist = props.playlist;
		return (
			<div className="PlayList">
				{
					props.playlist.map((mediaId) => {
						return(
						 <MediaContainer 
						 	openModal = {props.handleOpenModal}
							key = {mediaId} 
							id={mediaId}
						/>)
					})
				}
			</div>
		)
}

export default PlayList;
