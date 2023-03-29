import './App.css'
import { useState, useRef } from 'react'
function Pad({id, letter}){
    const [isPlaying, setIsPlaying] = useState(false)
    const audio = useRef()
    function handleClick(){
        audio.current.play()
    }
    return (
    <div id={id} className="drum-pad" onClick={handleClick}>
      <audio src={`https://s3.amazonaws.com/freecodecamp/drums/${id}.mp3` } ref={audio} ></audio>
      {letter}
    </div>
    )
}
export default Pad