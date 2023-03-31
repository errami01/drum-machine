import './App.css';
import Pad from './Pad'
import Controle from './Controle';
import { useState } from 'react';

function App() {
  // const padsInfo = ['Heater 1',"Heater 2",'Heater 3','Heater 4','Clap','Open-HH'," Kick-n'-Hat",'Kick','Closed-HH']
  // export default App;
  const [audioVolume, setAudioVolume] = useState(0.5)
  // console.log(audioVolume)
const padsInfo = [
  {id: 'Heater-1', letter: "Q"},
  {id: "Heater-2", letter: "W"},
  {id: 'Heater-3', letter: "E"},
  {id: 'Heater-4_1', letter: "A"},
  {id: 'Heater-6', letter: "S"},
  {id: 'Dsc_Oh', letter: "D"},
  {id: "Kick_n_Hat", letter: "Z"},
  {id: 'RP4_KICK_1', letter: "X"},
  {id: 'Cev_H2', letter: "C"},
]
function trackAudioValume(volume= 0.5){
  setAudioVolume(volume)
}
  const padsElements = padsInfo.map((audio)=>(
    <Pad id={audio.id} letter={audio.letter} key={audio.id} volume={audioVolume}/>
  ))
  return (
    <div className="App">
      <header className='icon-bar'></header>
      <div className='drum-section'>
        <div className='pads-grid'>
        {padsElements}
        <Controle setAudioVolume={trackAudioValume}/>
        </div>
        <div className='controle-panel'>

        </div>

      </div>
    </div>
  );
}
export default App
// export default App;
// const padsInfo = [
//   {id: 'Heater 1'},
//   {id: "Heater 2"},
//   {id: 'Heater 3'},
//   {id: 'Heater 4'},
//   {id: 'Clap'},
//   {id: 'Open-HH'},
//   {id:" Kick-n'-Hat"},
//   {id: 'Kick'},
//   {id: 'Closed-HH'},
// ]