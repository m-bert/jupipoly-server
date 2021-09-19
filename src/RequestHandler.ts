import GameRoom from "./game/GameRoom";
import { Server, Socket } from "socket.io";

export default class RequestHandler {
  private static gameRoom: GameRoom;
  private static io: Server;

  public static setAttribs(gameRoom: GameRoom, io: Server): void {
    this.gameRoom = gameRoom;
    this.io = io;
  }

  public static listen(): void {
    this.io.on("connection", (socket: Socket): void => {
      console.log(`Client connected. Connection id: ${socket.id}`.blue);

      //Client requests
      socket.on("add-player", (nick: string): void => {
        if (this.gameRoom.checkIfPlayerExists(nick)) {
          this.io.emit("add-player-status", false);
        } else {
          this.gameRoom.addPlayer(nick, socket.id);
          this.io.emit("add-player-status", true);
        }
      });

      //
      socket.on("disconnect", () => {
        console.log(`Client disconnected: ${socket.id}`.red);

        this.gameRoom.removePlayer(socket.id);
      });
    });
  }
}
