/*
Brandon Dickson 
Created: 8-2024
Last Updated: 8-2024
Description: custom type representing a stat feed
*/ 

import { StatfeedTarget } from "./StatfeedTarget";

export interface StatfeedEvent {
    event_name: string
    main_target: StatfeedTarget;
    secondary_target: StatfeedTarget;
    type: string;

}