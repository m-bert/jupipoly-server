import { Server, Socket } from "socket.io";
import Player from "./Player";
import Settings from "../Settings";
import Game from "./Game";
import { GameStatus } from "./enums/GameStatus";

export default class GameRoom {
  private readonly io: Server;
  private readonly connectionsIDs: Array<string>;
  private readonly players: Array<Player>;
  private readonly game: Game;

  constructor(io: Server) {
    this.connectionsIDs = new Array(); //Because socket id and players are added in the same time, the index of connection is the index of given player in players array
    this.players = new Array();

    this.game = new Game();

    this.io = io;
    this.handleRequests();
  }

  private handleRequests(): void {
    this.io.on("connection", (socket: Socket): void => {
      console.log(`Client connected. Connection id: ${socket.id}`.blue);

      //Client requests
      socket.on("add-player", (nick: string): void => {
        if (this.checkIfPlayerExists(nick)) {
          this.io.emit("add-player-status", false);
        } else {
          this.connectionsIDs.push(socket.id);
          this.players.push(new Player(nick));

          this.io.emit("add-player-status", true);

          console.log(this.connectionsIDs);
          console.log(this.players);
        }
      });

      //
      socket.on("disconnect", () => {
        console.log(`Client disconnected: ${socket.id}`.red);

        if (this.game.getGameStatus() === GameStatus.LOBBY) {
          const index = this.connectionsIDs.indexOf(socket.id);

          if (index > -1) {
            this.connectionsIDs.splice(index, 1);
            this.players.splice(index, 1);
          }
        }

        console.log(this.connectionsIDs);
        console.log(this.players);
      });
    });
  }

  private checkIfPlayerExists(nick: string): boolean {
    for (let player of this.players) {
      if (nick == player.getNick()) {
        return true;
      }
    }

    return false;
  }

  private checkIfPlayersAreReady(players: Array<Player>): boolean {
    return true;
  }

  private getActivePlayer(connectionID: string): Player {
    let activePlayerIndex: number = this.connectionsIDs.indexOf(connectionID);

    return this.players[activePlayerIndex];
  }
}
