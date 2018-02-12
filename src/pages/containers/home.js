import React, {Component} from 'react';
import HomeLayout from '../components/homelayout.js';
import Categories from '../../categories/components/categories.js';
import Related from '../components/related.js'; 
import ModalContainer from '../../widgets/containers/modal.js';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/container/video-player';

class Home extends Component {
	state = {
		modalVisible: false,
	}

	handleOpenModal = (media) =>{
		this.setState({
			modalVisible:true,
			media: media,
		})
	}

	handleCloseModal = (event) =>{
		this.setState({
			modalVisible: false,
		});
	}

//control de errores con handle error
	render(){
		return (
			<HandleError>
				<HomeLayout>
					<Related/>
					<Categories 
						categories={this.props.data.categories} 
						handleOpenModal={this.handleOpenModal}
					/>
					{
						//if ternario para controlar la variable
						this.state.modalVisible &&
						<ModalContainer>
							<Modal
								handleClick={this.handleCloseModal}
							>
								<VideoPlayer 
									autoplay={true}
									title = {this.state.media.title}
									src = {this.state.media.src}
								/>
							</Modal>
						</ModalContainer>
				}
				</HomeLayout>
			</HandleError>	
		)
	};
}
export default Home;