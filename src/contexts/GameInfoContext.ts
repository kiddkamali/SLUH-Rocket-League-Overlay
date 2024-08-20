/*
Brandon Dickson 
Created: 8-2024
Last Updated: 8-2024
Description: custom type for the game context of spectating a player
*/

import { GameContext } from "../models/contexts/GameContext";
import { createContext } from "react";

export interface GameInfoContextModel {
    game_info: GameContext;
    set_game_info: (new_game_info: GameContext) => void
};

export const DEFAULT_GAME_INFO: GameContext = {
    arena: "",
    is_overtime: false,
    is_replay: false,
    target: "", // currently spectating
    time_remaining: 300, // in seconds
    winner: "",
    players: [],
    score: {
        blue: 0,
        orange: 0,
    },
};

export const GameInfoContext = createContext<GameInfoContextModel>(
    {
        game_info: DEFAULT_GAME_INFO,
        set_game_info: (_new_game_info: GameContext) => {},
    }
);