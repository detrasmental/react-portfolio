import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {
    const textRef = useRef(); 

    useEffect(() => {
        init(textRef.current, {
          showCursor: true,
          backDelay: 1500,
          backSpeed: 60,
          strings: ["Full-Stack Developer", "Potterhead", "Mom"],
        });
      }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/detranobg.png" alt="me"/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hey Ya'll, hey! I'm</h2>
                    <h1>Detra Gordon</h1>
                    <h3><span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt=""/>
                </a>
            </div>
            
        </div>
    )
}