import React from 'react';
import './search.css';

//esta es otra forma de hacer que la funcion retorne directamente lo que escribamos
const Search = (props) => (
	<form 
		className="Search"
		onSubmit={props.handleSubmit}
	>
		<input 
			ref={props.setRef}//para almacenar el valor en REact
			type="text"
			placeholder="Busca tu video..."
			className="Search-input"
			name="search"
			//defaultValue="bitcoin"//valor por defecto
			onChange={props.handleChange}
			value={props.value}//para trabajar con transformaciones antes del envio
			/>
	</form>
)

export default Search;