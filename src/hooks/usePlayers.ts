import { useEffect, useState } from "react";
import { getPlayers, getRepos } from "../store/players/players.requests";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

const usePlayers = (playerNames: string[]) => {
  const dispatch = useDispatch();
  const players = useSelector((state: RootState) => state.players.players);
  const repos = useSelector((state: RootState) => state.players.repos);
  const [winnerIndex, setWinnerIndex] = useState<number | null>(null);

  const calculateScope = (playerArg: any, reposArg: any) => {
    if (!playerArg && !reposArg) {
      return;
    }

    const followers = playerArg.followers;
    const totalStars = reposArg.reduce((acc: number, repo: any) => {
      return acc + repo.stargazers_count;
    }, 0);

    return followers + totalStars;
  };

  const getWinner = () => {
    if (!players.length || !repos.length) {
      return;
    }

    const player1Scope = calculateScope(players[0], repos[0]);
    const player2Scope = calculateScope(players[1], repos[1]);

    if (player1Scope === player2Scope) {
      setWinnerIndex(1);
      return;
    }

    setWinnerIndex(player1Scope > player2Scope ? 0 : 1);
  };

  useEffect(() => {
    dispatch(getPlayers(playerNames));
  }, []);

  useEffect(() => {
    if (!players.length) {
      return;
    }

    dispatch(getRepos(players));
  }, [players.length]);

  useEffect(() => {
    if (!players.length || !repos.length) {
      return;
    }

    getWinner();
  }, [players.length, repos.length]);

  return {
    winnerIndex,
  };
};

export default usePlayers;
