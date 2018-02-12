import React, {Component} from 'react';
import Search from '../components/search.js';

class SearchContainer extends Component{
	//para el valor por defecto
	state = {
		value: 'Bitcoin'
	}

	handleSubmit = (event) =>{
		event.preventDefault();//previene la navegación
		console.log(this.input.value, 'submit');
	}

	setInputRef = (element) =>{
		this.input = element;//añade input al contexto para utilizarlo en el console.log
	}

	handleInputChange = event =>{//para transformar el value antes de que llegue
		this.setState({
			value: event.target.value.replace(' ','-')
		})
	}

	render() {
		return(
			<Search
				setRef={this.setInputRef}
				handleSubmit = {this.handleSubmit}
				handleChange={this.handleInputChange}
				value = {this.state.value}
			/>
		)
	}
}

export default SearchContainer;