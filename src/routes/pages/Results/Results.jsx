import React from "react";
import { useLocation } from "react-router-dom";
import PlayerCard from "../../../components/common/PlayerCard";
import usePlayers from "../../../hooks/usePlayers";
import PlayerCardInfo from "../../../components/common/PlayerCard/PlayerCardInfo";
import "./results.scss";

const Results = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const {
    players,
    winnerIndex,
    loading,
  } = usePlayers([params.get('player1Nick'), params.get('player2Nick')]);

  if(loading) {
    return <div>loading</div>
  }

  return(
    <div className="results">
      {players.map((player, index) => (
        <div
          key={index}
          className={`results-card ${index === winnerIndex ? 'winner' : 'loser'}`}
        >
          {winnerIndex !== null && (
            <h1>{index === winnerIndex ? 'Winner!' : 'Loser!'}</h1>
          )}
          <PlayerCard
            name={player.login}
            img={player.avatar_url}
            isRenderCardActions={false}
            children={(
              <PlayerCardInfo
                location={player.location}
                company={player.company}
                followers={player.followers}
                following={player.following}
                public_repos={player.public_repos}
                blog={player.blog}
              />
            )}
            className="results-player"
          />
        </div>
      ))}
    </div>
  )
}

export default Results;
