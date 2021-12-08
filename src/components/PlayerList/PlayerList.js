import { useEffect, useState } from "react";
import * as playerService from "../../services/playerService"
import PlayerCard from "./PlayerCard/PlayerCard.js";

const PlayerList = () => {
    const [players, setPlayers] = useState([]);
    useEffect(()=>{
        playerService.getAll()
        .then(result =>{
            setPlayers(result)
        })
    }, [])
    console.log(players)
    return (
        <div>
        {players.map(x => <PlayerCard key={x._id} player={x}/>)}
        </div>
    )
}

export default PlayerList