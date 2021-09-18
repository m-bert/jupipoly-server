import express = require("express");
import cors = require("cors");
import { Request, Response, Application } from "express";
import { Socket, Server } from "socket.io";
import "colors";

import Player from "./game/Player";
import Settings from "./Settings";
import GameRoom from "./game/GameRoom";

//////////Setting app////////////
const app: Application = express();
app.use(cors());

app.get("/", (req: Request, res: Response): void => {
  res.send("<i>Note: This server works only as an API</i>");
});

const server: any = app.listen(Settings.PORT, (): void => {
  console.log(`Server listening on the port ${Settings.PORT}`.green);
});

const io: Server = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

const gameRoom = new GameRoom(io);
