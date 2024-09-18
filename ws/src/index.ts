import { WebSocketServer } from 'ws';
import { GameManager } from './GameManager';

const wss = new WebSocketServer({port: 8080});
//A new instance of WebSocketServer is created, listening on port 8080. This will handle all WebSocket connections on this port.

const gameManager = new GameManager();


//when websocket connection establish the this callback function will execute
wss.on('connection',function connection(ws){
    //ws parameter represent websocket connection
    
    gameManager.addUser(ws); //adds the new WebSocket connection (ws)
    ws.on("disconnect", () => gameManager.removeUser(ws))
});