import { useContext, useEffect } from "react";
import { WebSocketContext } from "../contexts/WebSocketContext";
import { GameInfoContext } from "../contexts/GameInfoContext";
import { USPlayer } from "../models/UpdateState/USPlayer";
import { UpdateState } from "../models/UpdateState/UpdateState";
import { Scorebug } from "../components/Scorebug/Scorebug";

export const Overlay = () => {
    const websocket = useContext(WebSocketContext)
    const {game_info, set_game_info} = useContext(GameInfoContext)

    useEffect(() => {
        websocket.subscribe("game", "update_state", (data: UpdateState) => {
            const updated_players: USPlayer[] = Object.values(data.players).map(
                (player_info: USPlayer) => player_info
            );
            set_game_info({
                arena: data.game.arena,
                is_overtime: data.game.is_overtime,
                is_replay: data.game.isReplay,
                target: data.game.target,
                time_remaining: data.game.time_seconds,
                winner: data.game.winner,
                players: updated_players,
                score: {
                    blue: data.game.teams[0].score,
                    orange: data.game.teams[1].score
                }
            })
        });
    });
    return <Scorebug />;
};