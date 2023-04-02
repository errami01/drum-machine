import './App.css'
import { useRef, useEffect } from 'react'

function Controle({setAudioVolume, playedAudio}){
    const sliderInput = useRef()
    function handleSliderChange(){
        setAudioVolume(sliderInput.current.value/100)
        // console.log(sliderInput.current.value)
    }
    
    return (
        <div className='controle-container'>
            <label value='Power'>Power</label>
            <label className="switch">
                <input type="checkbox"/>
                <span className="slider"></span>
            </label>
            <div className='played-title'  id="display">{playedAudio}</div>
            <input 
                className='volume-slider' 
                type='range' 
                min={0} 
                max={100} 
               
                ref={sliderInput} 
                onChange={handleSliderChange}/>
            <label value='Power'>Bank</label>
            <label className="switch">
                <input type="checkbox"/>
                <span className="slider"></span>
            </label>
            <label></label>
        </div>
    )
}
export default Controle