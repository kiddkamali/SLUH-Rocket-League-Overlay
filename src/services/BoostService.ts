/*
Brandon Dickson 
Created: 8-2024
Last Updated: 8-2024
Description: service for getting boost information
*/

const get_boost_bar_width = (boost_amount: number, max_width: number): number => {
    return (boost_amount / 100) * max_width;
};

const get_boost_bar_circum = (boost_amount: number, max_circum: number): number => {
    return ((100 - boost_amount) / 100) * max_circum
};

export const BoostService = {
    get_boost_bar_width,
    get_boost_bar_circum,
};