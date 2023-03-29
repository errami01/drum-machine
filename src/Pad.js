import './App.css'

function Pad({id, letter}){
    return (
    <div id={id} className="drum-pad">
      <audio src={`https://s3.amazonaws.com/freecodecamp/drums/${id}.mp3`} ></audio>
      {letter}
    </div>
    )
}
export default Pad