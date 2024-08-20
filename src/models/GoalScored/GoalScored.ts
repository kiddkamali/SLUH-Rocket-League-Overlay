/*
Brandon Dickson 
Created: 8-2024
Last Updated: 8-2024
Description: custom type for all othe information surrounding a scored goal event
*/ 

export interface GoalScored {
    ball_last_touch: {
      player: string;
      speed: number;
    };
    goalspeed: number;
    impact_location: {
      X: number;
      Y: number;
    };
    scorer: {
      id: string;
      name: string;
      teamnum: number;
    };
}