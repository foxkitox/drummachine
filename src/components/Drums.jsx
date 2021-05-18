import React,{useState,useEffect} from 'react'

 const Drums = () => {

    const [notas,setNotas] = useState('')
    const [validos] = useState([81,87,69,65,83,68,90,88,67])

    const handleKeyDown = (e) => {
        console.log(e.key, e.keyCode)
        if(validos.includes(e.keyCode) ){
            tocar(e.key.toUpperCase())
        }
    }

    useEffect(()=>{
        window.addEventListener('keydown',handleKeyDown)
        return () => {
            window.removeEventListener('keydown',handleKeyDown)
        }
    })
   
    const tocar = (e) =>{
        setNotas(document.getElementById(e).id)
        const sound = document.getElementById(e)
        sound.currentTime = 0
        sound.play()
            
    }

    return (
        <div id="drum-machine" className="App-header container">
            <h1>Drum Machine</h1>
            
            <p id="display">{notas}</p>
            <div className="row mt-3">
                <div className="col ">
                    <button onClick={(e) => tocar(e.target.value)} value="Q" className="btn btn-primary drum-pad" id="Sonido Q">
                        Q
                        <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="clip" id="Q"></audio>
                    </button>
                    <button onClick={(e) => tocar(e.target.value)} value="W" className="btn btn-primary drum-pad" id="Sonido W">
                        W
                        <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className="clip" id="W"></audio>
                    </button>
                    <button onClick={(e) => tocar(e.target.value)} value="E" className="btn btn-primary  drum-pad" id="Sonido E">
                        E
                        <audio src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" className="clip" id="E"></audio>
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button onClick={(e) => tocar(e.target.value)} value="A" className="btn btn-primary drum-pad " id="Sonido A">
                        A
                        <audio src="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3" className="clip" id="A"></audio>
                    </button>
                    <button onClick={(e) => tocar(e.target.value)} value="S" className="btn btn-primary drum-pad" id="Sonido S">
                        S
                        <audio src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" className="clip" id="S"></audio>
                    </button>
                    <button onClick={(e) => tocar(e.target.value)} value="D" className="btn btn-primary drum-pad" id="Sonido D">
                        D
                        <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className="clip" id="D"></audio>
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button onClick={(e) => tocar(e.target.value)} value="Z" className="btn btn-primary drum-pad" id="Sonido "Z>
                        Z
                        <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className="clip" id="Z"></audio>
                    </button>
                    <button onClick={(e) => tocar(e.target.value)} value="X" className="btn btn-primary drum-pad" id="Sonido X">
                        X
                        <audio src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" className="clip" id="X"></audio>
                    </button>
                    <button onClick={(e) => tocar(e.target.value)} value="C" className="btn btn-primary drum-pad" id="Sonido C">
                        C
                        <audio src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" className="clip" id="C"></audio>
                    </button>
                </div>
            </div>
                        
        </div>
    )
}

export default Drums

