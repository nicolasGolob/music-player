import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay, faPause, faForward, faBackward} from '@fortawesome/free-solid-svg-icons'

const PlayerDetails = (props) =>{
    return(
       <div className='component-player--controls'>
            <button className="skip-btn" onClick={()=>props.SkipSong(false)}>
               <FontAwesomeIcon icon={faBackward} />
            </button>
            <button className="play-btn" onClick={()=>props.setIsPlaying(!props.isPlaying)} >
            {/* props + function to update(simply the opposite of the initial state) */}
               <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
           </button>
           <button className="skip-btn" onClick={()=>props.SkipSong(true)} >
               <FontAwesomeIcon icon={faForward} />
           </button>
       </div>
    )
}
export default PlayerDetails;