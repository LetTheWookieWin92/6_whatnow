import React, { Component } from 'react';

//Components
import { IconButton } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';

//Audio
import backgroundTune from "../audio/backgroundMusic.mp3"

//Icons
import { MusicNote } from '@material-ui/icons';



class BackgroundMusic extends Component {
    state = { 
        musicPlaying: false
     }

    music = new Audio(backgroundTune);

    playAudio = () => {
        this.setState({ musicPlaying: !this.state.musicPlaying }, () => {
            this.state.musicPlaying ? this.music.play() : this.music.pause();
        });
    }

    render() { 

        return ( 
            <Tooltip title="Play theme music">
                <IconButton style={{alignSelf: 'center'}} color="primary" onClick={ () => this.playAudio()} aria-label="Play background music">
                    <MusicNote />
                </IconButton>
            </Tooltip>
            
         );
    }
}
 
export default BackgroundMusic;