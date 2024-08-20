/*
Brandon Dickson 
Created: 8-2024
Last Updated: 8-2024
Description: custom type representing a game
*/ 

import { USBall } from "./USBall";
import { USTeam } from "./USTeam";

export interface USGame {
    arena: string;
      ball: USBall;
      hasTarget: boolean;
      hasWinner: boolean;
      is_overtime: boolean;
      isReplay: boolean;
      target: string;
      teams: USTeam[];
      time_milliseconds: number;
      time_seconds: number;
      winner: string;

}