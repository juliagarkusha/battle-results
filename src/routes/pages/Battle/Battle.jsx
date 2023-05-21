import React, {useState, useEffect} from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import GithubApi from "../../../api/GithubApi";
import PlayerOneSearchForm from "../../../components/common/PlayerOneSearchForm";
import PlayerTwoSearchForm from "../../../components/common/PlayerTwoSearchForm";
import PlayerCard from "../../../components/common/PlayerCard";
import "./battle.scss";

const PLAYER_ONE_NICK = 'player1Nick';
const PLAYER_TWO_NICK = 'player2Nick';

const Battle = () => {
  const navigate = useNavigate();

  const [ player1, setPlayer1 ] = useState();
  const [ player2, setPlayer2 ] = useState();
  const [ search, setSearch ] = useSearchParams();
  const [ isLoadingPlayer1, setIsLoadingPlayer1 ] = useState(false);
  const [ isLoadingPlayer2, setIsLoadingPlayer2 ] = useState(false);
  const [ isErrorPlayer1, setIsErrorPlayer1 ] = useState(false);
  const [ isErrorPlayer2, setIsErrorPlayer2 ] = useState(false);

  const onSubmitPlayerHandler = async (formData, player) => {
    const isOnePlayer = player === 'player1';
    isOnePlayer ? setIsLoadingPlayer1(true) : setIsLoadingPlayer2(true);
    isOnePlayer ? setIsErrorPlayer1(false) : setIsErrorPlayer2(false);

    try {
      const player = await GithubApi.getUser(formData.playerName);

      if(isOnePlayer) {
        search.set(PLAYER_ONE_NICK, formData.playerName);
      } else {
        search.set(PLAYER_TWO_NICK, formData.playerName);
      }
      setSearch(search);
      isOnePlayer ? setPlayer1(player) : setPlayer2(player);
    } catch (exception) {
      isOnePlayer ? setIsErrorPlayer1(true) : setIsErrorPlayer2(true);
    } finally {
      isOnePlayer ? setIsLoadingPlayer1(false) : setIsLoadingPlayer2(false);
    }
  }

  const onResetPlayerHandler = (player) => {
    const isOnePlayer = player === 'player1';
    isOnePlayer ? setPlayer1(undefined) : setPlayer2(undefined);
    isOnePlayer ? search.delete(PLAYER_ONE_NICK) : search.delete(PLAYER_TWO_NICK);
    setSearch(search);
  }

  const onBattleButtonClickHandler = () => {
    navigate({
      pathname: 'results',
      search: `?${PLAYER_ONE_NICK}=${player1.login}&${PLAYER_TWO_NICK}=${player2.login}`
    });
  }

  useEffect(() => {
    if (search.has(PLAYER_ONE_NICK)) {
      onSubmitPlayerHandler({playerName: search.get(PLAYER_ONE_NICK)}, 'player1')
    }

    if (search.has(PLAYER_TWO_NICK)) {
      onSubmitPlayerHandler({playerName: search.get(PLAYER_TWO_NICK)}, 'player2')
    }
  }, []);

  return (
    <div className="battle">
      <div className="battle-forms">
        <div className="battle-item">
          {
            !!player1
              ? (
                <PlayerCard
                  name={player1.login}
                  img={player1.avatar_url}
                  onReset={() => {onResetPlayerHandler('player1')}}
                />
              )
              : <PlayerOneSearchForm
                onSubmit={onSubmitPlayerHandler}
                isLoading={isLoadingPlayer1}
                isError={isErrorPlayer1}
              />
          }
        </div>
        <div className="battle-item">
          {
            !!player2
              ? (
                <PlayerCard
                  name={player2.login}
                  img={player2.avatar_url}
                  onReset={() => {onResetPlayerHandler('player2')}}
                />
              )
              : <PlayerTwoSearchForm
                onSubmit={onSubmitPlayerHandler}
                isLoading={isLoadingPlayer2}
                isError={isErrorPlayer2}
              />
          }
        </div>
      </div>
      <Button
        color="warning"
        variant="contained"
        className="battle-btn"
        onClick={onBattleButtonClickHandler}
        disabled={!player1 || !player2}
      >
        Battle
      </Button>
    </div>
  )
}

export default Battle;
