import { useContext } from "react"
import { GameInfoContext } from "../../contexts/GameInfoContext"
import { ScorebugBlue, ScorebugClock, ScorebugOrange, ScorebugWrapper } from "./Scorebug.style";
import { GameService } from "../../services/GameService";

export const Scorebug = () => {
    const {game_info} = useContext(GameInfoContext)

    return (
        <ScorebugWrapper>
            <ScorebugClock>{GameService.get_clock_from_seconds(game_info.time_remaining, game_info.is_overtime)}</ScorebugClock>
            <ScorebugOrange>ORANGE  {"   "}  {game_info.score.orange}</ScorebugOrange>
            <ScorebugBlue>BLUE  {"   "}  {game_info.score.blue}</ScorebugBlue>
        </ScorebugWrapper>
    )
};