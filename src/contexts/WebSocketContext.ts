/*
Brandon Dickson 
Created: 8-2024
Last Updated: 8-2024
Description: context for the web socket service
*/

import { WebsocketService } from "../services/WebsocketService"
import { createContext } from "react";



export const WebSocketContext = createContext(WebsocketService);