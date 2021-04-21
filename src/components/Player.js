import React from 'react'
import PlayerDetails from './PlayerDetails'
import PlayerControler from './PlayerControler'

const Player = (props) => {
    return(
        <div className="component-player">
            <audio></audio>
            <PlayerDetails song={props.song}/>
            <PlayerControler />
            <p><strong>Next up : </strong>{props.nextSong.title} by {props.nextSong.artist}</p>
        </div>
    )
}
export default Player
