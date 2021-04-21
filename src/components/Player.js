import React from 'react'
import PlayerDetails from './PlayerDetails'

const Player = (props) => {
    return(
        <div className="component-player">
            <audio></audio>
            <PlayerDetails song={props.song}/>
            <p><strong>Next up : </strong>{props.nextSong.title} by {props.nextSong.artist}</p>
        </div>
    )
}
export default Player
