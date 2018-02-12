import React, {Component} from 'react';
import { createPortal } from 'react-dom';

//esta clase nos va a valer para renderizar contenidos que no queremos que se rendericen dentro del home-cntainer, por ello se utiliza el createPortal que funciona como el render normal, [lo que queremos renderizar, y donde]

class ModalContainer extends Component {
	render() {
		return createPortal(
			this.props.children,
			document.getElementById('modal-container')
		)
	}
}

export default ModalContainer;