export default function PlayerOne({xPosition, yPosition}) {



    return (
        <>
        <div 
        id="player_one"
        style={{left:`${xPosition}vw`, top:`${yPosition}vh`}}
        />
        </>
    )
}