import React, {Component} from 'react';
import HomeLayout from '../components/homelayout.js';
import Categories from '../../categories/components/categories.js';
import Related from '../components/related.js'; 
import ModalContainer from '../../widgets/containers/modal.js';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/container/video-player';
//para obtener los datos
import {connect} from 'react-redux';
//list de immutable
import {List as list} from 'immutable';

//importamos el actions que englobara las acciones
//import {openModal, closeModal} from '../../actions/index';-->cambia cn el bindeo
import * as actions from '../../actions/index';

//esto sirve para ahorrarnos poner el dispatch en las acciones una vez tengamos un creator
import {bindActionCreators} from 'redux';

class Home extends Component {
	handleOpenModal = (id) =>{
		//this.props.dispatch(openModal(id))
		this.props.actions.openModal(id)
	}

	handleCloseModal = (event) =>{
		//this.props.dispatch(closeModal())
		this.props.actions.closeModal()
	}

//control de errores con handle error
	render(){
		return (
			<HandleError>
				<HomeLayout>
					<Related/>
					<Categories 
						categories={this.props.categories} 
						handleOpenModal={this.handleOpenModal}
						search = {this.props.search}
					/>
					{
						//if ternario para controlar la variable
						this.props.modal.get('visibility') &&
						<ModalContainer>
							<Modal
								handleClick={this.handleCloseModal}
							>
								<VideoPlayer 
									autoplay={true}
									id={this.props.modal.get('mediaId')}
								/>
							</Modal>
						</ModalContainer>
				}
				</HomeLayout>
			</HandleError>	
		)
	};
}

function mapStateToProps(state, props){

	const categories = state.get('data').get('categories').map((categoryId)=>{
		return state.get('data').get('entities').get('categories').get(categoryId);
	});

	let searchResults = list();
	const search = state.get('data').get('search');
	if(search){
		const mediaList = state.get('data').get('entities').get('media');
		searchResults = mediaList.filter((item)=>{
			return item.get('author').toLowerCase().includes(search.toLowerCase())
		}).toList();
	}

	//devolvemos los datos que queremos utilizar del estado de redux
	return {
		categories: categories,
		modal: state.get('modal'),
		search: searchResults,
	}
}

function mapDispatchToProps(dispatch){
	return {
		//actions: bindActionCreators(acciones, dispatch)
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);//funcion currificada