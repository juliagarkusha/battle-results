import {useEffect, useState} from "react";
import githubApi from "../api/GithubApi";
const usePlayers = (playerNames = []) => {
  const [loading, setLoading] = useState(false);
  const [players, setPlayers] = useState([]);
  const [repos, setRepos] = useState([]);
  const [winnerIndex, setWinnerIndex] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);
      githubApi.getUsers(playerNames).then(data => {
        setPlayers(data.users);
        setLoading(false);
      });
    } catch (exception) {
      console.log('debug exception: ', exception);
      setLoading(false);
    }
  }, []);

  const calculateScope = (playerArg, reposArg) => {
    if(!playerArg && !reposArg) {
      return;
    }

    const followers = playerArg.followers;
    const totalStars = reposArg.reduce((acc, repo) => {
      return acc + repo.stargazers_count
    }, 0);

    return followers + totalStars;
  };

  const getWinner = () => {
    if (!players.length || !repos.length) {
      return;
    }
    const player1Scope = calculateScope(players[0], repos[0]);
    const player2Scope = calculateScope(players[1], repos[1]);

    if(player1Scope === player2Scope) {
      setWinnerIndex(1);
      return;
    }

    setWinnerIndex(player1Scope > player2Scope ? 0 : 1);
  };
  useEffect(() => {
    if(!players.length) {
      return;
    }

    try {
      githubApi.getPlayersRepos(players.map(player => player.login))
        .then((data) => {
        setRepos(data.repos);
      });
    } catch (exception) {
      console.log('debug exception: ', exception);
    }
  }, [players.length]);
  useEffect(() => {
    if (!players.length || !repos.length) {
      return;
    }

    getWinner();
  }, [players.length, repos.length])

  return {
    loading,
    players,
    winnerIndex
  }
}

export default usePlayers;
