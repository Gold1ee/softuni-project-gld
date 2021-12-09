import { Link } from "react-router-dom"

const PlayerCard = ({ player }) => {
    return (
        <div className="page-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 py-3 player-card-text-wrapper">
                        
                        <h2 className="title-section">{player.name}</h2>
                        <div className="divider"></div>
                        <ul>
                        <li className="player-card-p">Position: {player.position}</li>
                        <li className="player-card-p">Matches played: {player.matches}</li>
                        <li className="player-card-p">Win rate: {player.winRate}</li>
                        <li className="player-card-p">Average k/d: {player.kd}</li>
                        <li className="player-card-p">Average hs %: {player.hs}</li>
                        </ul>
                        <p></p>
                        <Link to="/faceit" className="btn btn-primary btn-split ml-2">Faceit Account <img id='faceit' src="./assets/img/logos/faceit.png" /></Link>
                    </div>
                    <div className="col-lg-6 py-3">
                        <div className="img-place text-center">
                            <img src={player.imageUrl} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PlayerCard