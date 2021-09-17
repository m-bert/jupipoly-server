import express = require("express");
import cors = require("cors");
import { Request, Response, Application } from "express";
import { Socket, Server } from "socket.io";
import "colors";

import Player from "./Player";
import Settings from "./Settings";

//////////Setting app////////////
const app: Application = express();
app.use(cors());

app.get("/", (req: Request, res: Response): void => {
  res.send("<i>Note: This server works only as an API</i>");
});

const server: any = app.listen(Settings.PORT, (): void => {
  console.log(`Server listening on the port ${Settings.PORT}`.green);
});
////////////////////////////////

//Main logic
const Players: Array<Player> = new Array();

const io: Server = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket: Socket): void => {
  console.log(`Client connected`.blue);

  socket.on("test-emit", (message): void => {
    console.log(`Test message: ${message}`.blue);
  });

  socket.on("add-player", (nick: string): void => {
    if (Settings.checkIfPlayerExists(nick, Players)) {
      io.emit("player-exists", "This nickname is already in use");
      console.error(`USER ALREADY EXISTS`.red);
    } else {
      Players.push(new Player(nick));

      const response: any = {
        message: "Player has been added",
        players: Players
      };

      io.emit("player-added", JSON.stringify(response, null, 4));
      console.log(Players);
    }
  });
});
