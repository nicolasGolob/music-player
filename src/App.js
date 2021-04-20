import {useState} from 'react'

function App() {
  const [songs, setSongs] = useState([
    {
      title:"Husk",
      artist:"Black Foxxes",
      img_src:"./images/song-1.jpg",
      src:"./music/Husk.mp3"
    },

    {
      title:"Yesterday",
      artist:"Staind",
      img_src:"./images/song-2.jpg",
      src:"./music/Yesterday.mp3"
    },

    {
      title:"Nobody Listening",
      artist:"Linkin Park",
      img_src:"./images/song-3.jpg",
      src:"./music/Nobody.mp3"
    }
  ]);

  return (
    <div className="App">
      Music Player will here..
    </div>
  );
}

export default App;
