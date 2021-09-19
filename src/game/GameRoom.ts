import { Server, Socket } from "socket.io";
import Player from "./Player";
import Settings from "../Settings";
import Game from "./Game";
import { GameStatus } from "./enums/GameStatus";
import RequestHandler from "./../RequestHandler";

export default class GameRoom {
  private readonly io: Server;
  private readonly connectionsIDs: Array<string>;
  private readonly players: Array<Player>;
  private readonly game: Game;

  constructor(io: Server) {
    this.connectionsIDs = new Array(); //Because socket id and players are added in the same time, the index of connection is the index of given player in players array
    this.players = new Array();

    this.game = new Game();

    RequestHandler.setAttribs(this, io);
    RequestHandler.listen();
  }

  public addPlayer(nick: string, connectionID: string): void {
    this.connectionsIDs.push(connectionID);
    this.players.push(new Player(nick));

    this.logPlayers();
  }

  public removePlayer(connectionID: string): void {
    if (this.game.getGameStatus() === GameStatus.LOBBY) {
      const index = this.connectionsIDs.indexOf(connectionID);

      if (index > -1) {
        this.connectionsIDs.splice(index, 1);
        this.players.splice(index, 1);
      }
    }

    this.logPlayers();
  }

  public checkIfPlayerExists(nick: string): boolean {
    for (let player of this.players) {
      if (nick === player.getNick()) {
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

  private logPlayers(): void {
    this.players.forEach((player, index) => {
      let obj = {
        nick: player.getNick(),
        connID: this.connectionsIDs[index]
      };

      console.log(obj);
    });
  }
}
