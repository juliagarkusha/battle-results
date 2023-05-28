import { useEffect, useState } from "react";
import { getPlayers, getRepos } from "../store/thunk/players";
import { useDispatch, useSelector } from "react-redux";

const usePlayers = (playerNames = []) => {
  const dispatch = useDispatch();
  const players = useSelector(state => state.players.players);
  const repos = useSelector(state => state.players.repos);
  const [winnerIndex, setWinnerIndex] = useState(null);

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
    dispatch(getPlayers(playerNames))
  }, []);

  useEffect(() => {
    if(!players.length) {
      return;
    }

    dispatch(getRepos(players))
  }, [players.length]);

  useEffect(() => {
    if (!players.length || !repos.length) {
      return;
    }

    getWinner();
  }, [players.length, repos.length])

  return {
    winnerIndex
  }
}

export default usePlayers;
