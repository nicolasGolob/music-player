import {useState} from 'react'
import Player from './components/Player'

function App() {
  const [songs, setSongs] = useState([
    {
      title:"Husk",
      artist:"Black Foxxes",
      img_src:"./images/song-1.jpg",
      src:"./music/song1.mp3"
    },
    {
      title:"Yesterday",
      artist:"Staind",
      img_src:"./images/song-2.jpg",
      src:"./music/song2.mp3"
    },
    {
      title:"Nobody Listening",
      artist:"Linkin Park",
      img_src:"./images/song-3.jpg",
      src:"./music/song3.mp3"
    }
  ]);

  const [currentSongI, setCurrentSongI] = useState(0);
  const [nextSongI, setNextSongI] = useState(currentSongI + 1);

  return (
    <div className="App">
      <Player song={songs[currentSongI]} nextSong={songs[nextSongI]} />
      {/* songs Hook + browses [currentSongI Hook] -> use table to browses different values  */}
    </div>
  );
}

export default App;
