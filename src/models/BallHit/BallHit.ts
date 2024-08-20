/*
Brandon Dickson 
Created: 8-2024
Last Updated: 8-2024
Description: custom type representing a ball hit event
*/ 

export interface BallHit {

    ball: {
        location: {
        X: number;
        Y: number;
        Z: number;
        };
        post_hit_speed: number;
        pre_hit_speed: number;
    };
    player: {
        id: string;
        name: string;
    }
}