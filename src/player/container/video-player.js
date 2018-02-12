import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer.js';
import VideoPlayerControls from '../components/video-player-controls.js';
import ProgressBar from '../components/progress-bar.js';
import Spinner from '../components/spinner.js';
import Volumen from '../components/volumen.js';
import FullScreen from '../components/full-screen.js';

class VideoPlayer extends Component {
 	state = {
    	pause: true,
    	duration: 0,
    	currentTime: 0,
    	loading: false,
  	}

  	//funcion para formatear el tiempo del video
	formattedTime = (secs) => {
		const minutes = parseInt(secs / 60, 10);
		const seconds = parseInt(secs % 60, 10);
		return `${this.leftPad(minutes.toString())}:${this.leftPad(seconds.toString())}`
	}

	//funcion para que no mueva el estilo al formatear el tiempo del video (0 --> 10);
  	leftPad = (number) =>{
		const pad = '00';
		return pad.substring(0, pad.length - number.length) + number;
  	}

  	togglePlay = (event) => {
    	this.setState({
      	pause: !this.state.pause
    	})
  	}

  	componentDidMount() {
    	this.setState({
      		pause: (!this.props.autoplay)
    	})
  	}

  	handleLoadedMetadata = event =>{
  		this.video = event.target;
  		this.setState({
  			duration: this.video.duration
  		});
  	}

  	handleTimeUpdate = event =>{
  		this.setState({
  			currentTime: this.video.currentTime
  		})
  	}

  	handleProgressChange = event =>{
  		this.video.currentTime = event.target.value;
  	}

  	handleSeeking = evet =>{
  		this.setState({
  			loading:true
  		})
  	}

  	handleSeeked = event =>{
  		this.setState({
  			loading:false
  		})	
  	}

  	handleVolumeChange = event =>{
  		this.video.volume =  event.target.value;
  	}

  	handleFullScreen = event => {
  		//api para fullscreen que funciona diferente para cada navegador
		if(!document.webkitIsFullScreen){
			this.player.webkitRequestFullscreen();
		}else{
			document.webkitExitFullscreen();
		}
  	}

  	setRef = element =>{
  		this.player = element
  	}

  	render() {
    	return (
	      <VideoPlayerLayout
	      	setRef={this.setRef}
	      >
	        <Title
	          title={this.props.title}
	        />
	        <VideoPlayerControls>
	        	<PlayPause
		          pause={this.state.pause}
		          handleClick={this.togglePlay}
		        />
		        <Timer 
  					 duration={this.formattedTime(this.state.duration)}
  					 currentTime={this.formattedTime(this.state.currentTime)}
		        />
  		     	<ProgressBar
  		     		duration={this.state.duration}
  		     		value = {this.state.currentTime}
  		     		handleProgressChange = {this.handleProgressChange}
  		     	/>
  		     	<Volumen
  		    		handleVolumeChange = {this.handleVolumeChange}
  		    	/>
  		    	<FullScreen
  		    		handleFullScreen= {this.handleFullScreen}
  		    	/>
	        </VideoPlayerControls>
	        <Spinner
	        	active = {this.state.loading}
		      />
	        <Video
	          autoplay={this.props.autoplay}
	          pause={this.state.pause}
	          handleLoadedMetadata={this.handleLoadedMetadata}
	          handleTimeUpdate={this.handleTimeUpdate}
	          handleSeeking={this.handleSeeking}
	          handleSeeked={this.handleSeeked}
	          src={this.props.src}
	        />
	      </VideoPlayerLayout>
    	)
  	}
}

export default VideoPlayer;
