/*
Brandon Dickson 
Created: 8-2024
Last Updated: 8-2024
Description: custom type representing that takes in all info from a game except for player info
*/ 

import { USGame } from "./USGame";

export interface UpdateState {
    event: string;
    game: USGame;
    hasGame: boolean;
    match_guid?: string;
    players: Object;
}