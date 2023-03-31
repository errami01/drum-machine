import './App.css'
import { useState, useRef, useEffect } from 'react'
function Pad({id, letter, volume}){
    const [playCount, setPlayCount] = useState(0)
    const audio = useRef()
    const padDiv = useRef()
    const isClicked = useRef(false)
    console.log(volume)
    useEffect(()=> {audio.current.volume = volume})
    useEffect(()=>{
        if(isClicked.current) audio.current.play()
    },[playCount])

    useEffect(()=>{
        
        window.addEventListener('keydown', (event)=>{
            if(event.key.toLocaleLowerCase() === letter.toLowerCase()) handleClick()
        })
        return ()=>{
            window.removeEventListener('keydown', (event)=>{
                if(event.key === letter.toLowerCase()) handleClick()
            })
        }
    },[])
    function handleClick(){
        isClicked.current = true;
        setPlayCount(prev=> prev+1) 
    }

    
    function handleKeyDown(event){
        console.log(event.key)
    }

    return (
   
    <div 
        id={id} 
        className={`drum-pad `} 
        onClick={handleClick} 
        tabIndex={0} 
        onKeyDown={handleKeyDown}
        ref={padDiv} 
        key={playCount}
        style={isClicked.current? {animation: "ripple 2s"}: {}}
        >
      <audio 
        src={`https://s3.amazonaws.com/freecodecamp/drums/${id}.mp3`} 
        ref={audio} 
        
        ></audio>
      {letter}
    </div>
  
    )
}
export default Pad