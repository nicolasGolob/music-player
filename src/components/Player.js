import React, {useState, useRef, useEffect} from 'react'
import PlayerDetails from './PlayerDetails'
import PlayerControler from './PlayerControler'

const Player = (props) => {

    const audioElement = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(()=>{
        if(isPlaying){
            audioElement.current.play();
        }else{
            audioElement.current.pause();
        }
    })

    const skipSong = (forwards=true) =>{
        if(forwards){
            props.setCurrentSongI(()=>{
                let temp = props.currentSongI;
                temp++;

                if(temp > props.songs.length -1){
                    temp = 0;
                }
                return temp;
            })
        }
        else{
            props.setCurrentSongI(()=>{
                let temp = props.currentSongI;
                temp--;

                if(temp < 0){
                    temp = props.songs.length - 1;
                }
                return temp;
            })
            
        }
    }

    return(
        <div className="component-player">
            <audio src={props.songs[props.currentSongI].src}ref={audioElement}></audio>
            <PlayerDetails song={props.songs[props.currentSongI]}/>
            <PlayerControler />
            <p><strong>Next up : </strong>{props.songs[props.title]} by {props.songs[props.artist]}</p>
        </div>
    )
}
export default Player
