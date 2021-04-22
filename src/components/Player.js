import React, {useState, useRef, useEffect} from 'react'
import PlayerDetails from './PlayerDetails'
import PlayerControler from './PlayerControler'

const Player = (props) => {

    const audioElement = useRef(null); 
    //audioElement create for ref values <audio>
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(()=>{
        if(isPlaying){
            audioElement.current.play();
            //if ok, you use the api JS play
        }else{
            audioElement.current.pause();
        }
    })

    const skipSong = (forwards=true) =>{
        //skiSong ->  to manage the flow of music played
        if(forwards){
            props.setCurrentSongI(()=>{
                //create temporary variable 'temp' to manage music
                let temp = props.currentSongI;
                temp++;//to add
                if(temp > props.songs.length -1){
                //length -> related to the useEffect (App.js)
                    temp = 0;
                }
                return temp;
            })
        }
        else{
            //the opposite ->
            props.setCurrentSongI(()=>{
                let temp = props.currentSongI;
                temp--; //-> to go backwards
                if(temp < 0){
                    temp = props.songs.length - 1;
                //the value of our current song will be equal to the previous length which will bring us back to our last songs
                }
                return temp;
            })
        }
    }

    return(
        <div className="component-player">
            <audio src={props.songs[props.currentSongI].src} ref={audioElement}></audio>
            {/* we play the music that is in the array songs(App)[props.current song] */}
            <PlayerDetails song={props.songs[props.currentSongI]}/>
            <PlayerControler />
            <p><strong>Next up : </strong>{props.songs[props.title]} by {props.songs[props.artist]}</p>
            {/* the props created in this page connected to the props of the app page  */}
        </div>
    )
}
export default Player
