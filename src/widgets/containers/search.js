import React, {Component} from 'react';
import Search from '../components/search.js';
import {connect} from 'react-redux';
//import {searchEntities} from '../../actions/index';-->bindeo
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/index';

class SearchContainer extends Component{
	//para el valor por defecto
	state = {
		value: 'Bitcoin'
	}

	handleSubmit = (event) =>{
		event.preventDefault();//previene la navegación
		this.props.actions.searchEntities(this.input.value)
		//searchAsyncEntities(this.input.value)-->para probar async
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

function mapDispatchToProps(dispatch){
	return {
		//actions: bindActionCreators(acciones, dispatch)
		actions: bindActionCreators(actions, dispatch)
	}
}

//no le pasamos parametro de las props porque no lo necesita,
//	pero si que estamos almacenando el metodo dispatch del store en this.props
export default connect(null,mapDispatchToProps)(SearchContainer);