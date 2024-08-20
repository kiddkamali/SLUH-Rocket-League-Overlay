/*
Brandon Dickson 
Created: 8-2024
Last Updated: 8-2024
Description: service for getting pertinent, constantly updating information for the overlay
*/

import { USPlayer } from "../models/UpdateState/USPlayer";

const get_orange_team = (players: USPlayer[]): USPlayer[] => {
    return players.filter((player) => player.team === 1);
};


const get_blue_team = (players: USPlayer[]): USPlayer[] => {
    return players.filter((player) => player.team === 0);
};

const get_player_from_target = (players: USPlayer[], target: string): USPlayer | undefined => {
    return players.find((player) => target.includes(player.name));
};

const get_clock_from_seconds = (seconds: number, ot: boolean): string => {
    const num_minutes = Math.floor(seconds / 60);
    const num_seconds = seconds - (60 * num_minutes);
    const secondsString = 
        num_seconds > 9 ? num_seconds.toString() : `0${num_seconds}`;
    return ot ? `+${num_minutes}:${secondsString}` : `${num_minutes}:${secondsString}`;
}

const get_score_from_players = (players: USPlayer[]) => {
    return players.map((player) => player.score);
};

const get_goals_from_players = (players: USPlayer[]): number[] => {
    return players.map((player) => player.goals);
};

const get_assists_from_players = (players: USPlayer[]) => {
    return players.map((player) => player.assists);
};

const get_shots_from_players = (players: USPlayer[]) => {
    return players.map((player) => player.shots);
};

const get_saves_from_players = (players: USPlayer[]) => {
    return players.map((player) => player.saves);
};

const get_demos_from_players = (players: USPlayer[]) => {
    return players.map((player) => player.demos);
};

export const GameService = {
    get_demos_from_players,
    get_saves_from_players,
    get_shots_from_players,
    get_assists_from_players,
    get_goals_from_players,
    get_score_from_players,
    get_clock_from_seconds,
    get_player_from_target,
    get_blue_team,
    get_orange_team
};