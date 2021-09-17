import express, { Request, Response, Application } from "express";
import { Socket, Server } from "socket.io";
import cors from "cors";
import "colors";

//Setting app
const app: Application = express();
app.use(cors());

app.get("/", (req: Request, res: Response): void => {
  res.send("This server works only as an API");
});

//
const server = app.listen(Settings.PORT, (): void => {
  console.log(`Server listening on the port ${Settings.PORT}`.green);
});

//
const io: Server = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket): void => {
  console.log(`Client connected`.blue);

  socket.on("test-emit", (message): void => {
    console.log(`Test message: ${message}`.blue);
  });
});
