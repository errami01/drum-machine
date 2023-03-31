import './App.css'
import { useRef, useEffect } from 'react'

function Controle({setAudioVolume}){
    const sliderInput = useRef()
    function handleSliderChange(){
        setAudioVolume(sliderInput.current.value/100)
        // console.log(sliderInput.current.value)
    }
    
    return (
        <div className='controle-container'>
            <input 
                className='volume-slider' 
                type='range' 
                min={0} 
                max={100} 
               
                ref={sliderInput} 
                onChange={handleSliderChange}/>
        </div>
    )
}
export default Controle