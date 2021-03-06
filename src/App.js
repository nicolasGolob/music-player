import {useState, useEffect} from 'react'
import Player from './components/Player'

function App() {
  const [songs] = useState([
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

  useEffect(()=>{
  //the following song will be updated to our current song
    setNextSongI(()=>{
      if(currentSongI +1 > songs.length -1){
        //length ->reminder : of the number of "codets -> to compare
        return 0;
      }else{
        return currentSongI +1;
      }
    })
  },[currentSongI]);
  //[optimisation to compare with the initial value ->currentSongI]

  return (
    <div className="App">
      <Player currentSongI={currentSongI} setCurrentSongI={setCurrentSongI} nextSongI={nextSongI} songs={songs}/>
      {/* songs Hook + browses [currentSongI Hook] -> use table to browses different values  */}
    </div>
  );
}

export default App;
