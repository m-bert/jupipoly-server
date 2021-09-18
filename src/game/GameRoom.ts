import { Server, Socket } from "socket.io";
import Player from "./Player";
import Settings from "../Settings";
import Game from "./Game";

export default class GameRoom {
  private readonly io: Server;
  private readonly players: Array<Player>;
  private readonly game: Game;

  constructor(io: Server) {
    this.io = io;
    this.handleRequests();

    this.players = new Array();
    this.game = new Game();
  }

  private handleRequests(): void {
    this.io.on("connection", (socket: Socket): void => {
      console.log(`Client connected`.blue);

      //Client requests
      socket.on("test-emit", (message): void => {
        console.log(`Test message: ${message}`.blue);
      });

      socket.on("add-player", (nick: string): void => {
        if (this.checkIfPlayerExists(nick)) {
          this.io.emit("add-player-status", false);
        } else {
          this.players.push(new Player(nick));
          this.io.emit("add-player-status", true);
        }
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
}
