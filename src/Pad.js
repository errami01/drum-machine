import './App.css'
import { useState } from 'react'
function Pad({id, letter}){
    const [isPlaying, setIsPlaying] = useState(false)
    function handleClick(){

    }
    return (
    <div id={id} className="drum-pad" onClick={handleClick}>
      <audio src={`https://s3.amazonaws.com/freecodecamp/drums/${id}.mp3`} ></audio>
      {letter}
    </div>
    )
}
export default Pad