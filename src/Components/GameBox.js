import { useEffect, useState } from "react"
import PlayerOne from "./PlayerOne"
export default function GameBox() {

    // function setX(e) {
    //     console.log(e)
    // }
    function handleKeyPress(e) {
        // const actionX = actionXMap[e.key]
        // const actionY = actionYMap[e.key]
        // actionX && setX(actionX)
        // actionY && setY(actionY)
        console.log(e.key)
    }
    useEffect(()=> {
        document.addEventListener("keydown", handleKeyPress)
    }, [])

    const [xPosition, setX] = useState(50)
    const [yPosition, setY] = useState(50)

    return (
        <div id="game_box" >

                <PlayerOne xPosition={xPosition} yPosition={yPosition}/>

        </div>
    )
}