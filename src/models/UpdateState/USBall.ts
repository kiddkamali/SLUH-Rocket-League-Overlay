/*
Brandon Dickson 
Created: 8-2024
Last Updated: 8-2024
Description: custom type representing a ball
*/ 

export interface USBall {
    location: {
        X: number;
        Y: number;
        Z: number;
    };

    speed: number;
    team: number;
}