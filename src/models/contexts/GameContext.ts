/*
Brandon Dickson 
Created: 8-2024
Last Updated: 8-2024
Description: custom type for the game context of spectating a player
*/
import { USPlayer } from "../UpdateState/USPlayer";

 

export interface GameContext {
    arena: string;
    is_overtime: boolean;
    is_replay: boolean;
    target: string; // currently spectating
    time_remaining: number; // in seconds
    winner: string;
    players: USPlayer[];
    score: {
        blue: number;
        orange: number;
    };
}