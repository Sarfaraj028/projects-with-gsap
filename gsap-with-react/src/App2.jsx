import React from 'react'
import './App.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const App2 = () => {

    const {contextSafe} = useGSAP()
    
    const rotateBox = contextSafe(() =>{
        gsap.to('.circle', {
            rotate: 360,
            duration: 1
        })
        console.log("kalua ");
        
    }
    )
  return (
    <main>
        <button style={{position: "relative"}} onClick={rotateBox}>Animate</button>
        <div className='circle'></div>
    </main>
  )
}

export default App2