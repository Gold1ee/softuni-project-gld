import { Link } from "react-router-dom"

const PlayerCard = ({ player }) => {
    return (
        <div className="page-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 py-3">
                        <h2 className="title-section">{player.name}</h2>
                        <div className="divider"></div>
                        <p className="mb-5">Position: {player.position}</p>
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