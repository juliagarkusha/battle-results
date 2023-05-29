import React, { FC, ReactElement, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import PlayerOneSearchForm from "../../../components/common/PlayerOneSearchForm";
import PlayerTwoSearchForm from "../../../components/common/PlayerTwoSearchForm";
import PlayerCard from "../../../components/common/PlayerCard";
import { getPlayer1, getPlayer2 } from "../../../store/players/players.requests";
import { resetPlayer1, resetPlayer2 } from "../../../store/players/players.reducer";
import "./battle.scss";

const PLAYER_ONE_NICK = 'player1Nick';
const PLAYER_TWO_NICK = 'player2Nick';

const Battle: FC = (): ReactElement => {
  const navigate = useNavigate();
  const [search, setSearch] = useSearchParams();
  const dispatch = useDispatch();

  const player1 = useSelector((state: RootState) => state.players.player1);
  const player2 = useSelector((state: RootState) => state.players.player2);
  const isLoadingPlayer1 = useSelector((state: RootState) => state.players.loadingPlayer1);
  const isLoadingPlayer2 = useSelector((state: RootState) => state.players.loadingPlayer2);
  const isErrorPlayer1 = useSelector((state: RootState) => state.players.errorPlayer1);
  const isErrorPlayer2 = useSelector((state: RootState) => state.players.errorPlayer2);

  const onSubmitPlayer1Handler = (formData: { playerName: string }) => {
    dispatch(getPlayer1(formData.playerName));

    search.set(PLAYER_ONE_NICK, formData.playerName);
    setSearch(search);
  };

  const onSubmitPlayer2Handler = (formData: { playerName: string }) => {
    dispatch(getPlayer2(formData.playerName));

    search.set(PLAYER_TWO_NICK, formData.playerName);
    setSearch(search);
  };

  const onResetPlayerHandler = (player: 'player1' | 'player2') => {
    const isOnePlayer = player === 'player1';
    isOnePlayer ? dispatch(resetPlayer1()) : dispatch(resetPlayer2());
  };

  const onBattleButtonClickHandler = () => {
    navigate({
      pathname: 'results',
      search: `?${PLAYER_ONE_NICK}=${player1.login}&${PLAYER_TWO_NICK}=${player2.login}`,
    });
  };

  useEffect(() => {
    if (search.has(PLAYER_ONE_NICK)) {
      onSubmitPlayer1Handler({ playerName: search.get(PLAYER_ONE_NICK) || '' });
    }

    if (search.has(PLAYER_TWO_NICK)) {
      onSubmitPlayer2Handler({ playerName: search.get(PLAYER_TWO_NICK) || '' });
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
                onSubmit={onSubmitPlayer1Handler}
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
                onSubmit={onSubmitPlayer2Handler}
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
