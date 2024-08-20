import { useEffect, useState } from "react";
import { WebsocketService } from "./services/WebsocketService";
import { WebSocketContext } from "./contexts/WebSocketContext";
import { Overlay } from "./scenes/Overlay";
import { DEFAULT_GAME_INFO, GameInfoContext } from "./contexts/GameInfoContext";
import { GameContext } from "./models/contexts/GameContext";

function App() {
  useEffect(() => {
    WebsocketService.init(49322, false)
  });

  const [game_info, set_game_info] = useState<GameContext>(DEFAULT_GAME_INFO);

  return (
    <WebSocketContext.Provider value={WebsocketService}>
      <GameInfoContext.Provider value={{game_info: game_info, set_game_info: set_game_info}}>
        <Overlay />
      </GameInfoContext.Provider>
    </WebSocketContext.Provider>
  );
}

export default App
