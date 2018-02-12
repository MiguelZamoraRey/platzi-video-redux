import React from 'react';
import './spinner.css';

function Spinner (props) {
	if(props.active){
		return(
			<div className="Spinner">
				<span>Cargando...</span>
			</div>
		)
	}
	return null;
}

export default Spinner;