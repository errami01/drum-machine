import './App.css';

function App() {
  // const padsInfo = ['Heater 1',"Heater 2",'Heater 3','Heater 4','Clap','Open-HH'," Kick-n'-Hat",'Kick','Closed-HH']
  // export default App;
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
  const padsElements = padsInfo.map((audio)=>(
    <div id={audio.id} className="drum-pad">
      <audio src={`https://s3.amazonaws.com/freecodecamp/drums/${audio.id}.mp3`} controls></audio>
      {audio.letter}
    </div>
  ))
  return (
    <div className="App">
     {padsElements}
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