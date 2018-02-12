import React, {Component} from 'react';
import RegularError from '../components/regular-error';
class HandleError extends Component{

	state = {
		handleError:false,
	}

	componentDidCatch(error, info){
		this.setState({
			handleError: true, 
		})
	}

	//esta funcion render va a retornar en el caso del error un error
	//	y en el caso de que todo vaya bien los hijos del componente
	render(){
		if(this.state.handleError){
			return (
				<RegularError/>
			)
		}
		return this.props.children;
	}
}

export default HandleError


