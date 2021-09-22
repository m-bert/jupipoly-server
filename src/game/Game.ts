import Settings from "../Settings";
import { GameStatus } from "./Utils/Enums";
import { Field } from "./Utils/Interfaces";
import Player from "./Player";

import Fields from "./JSON/Fields.json";
import RequiredAmounts from "./JSON/RequiredAmount.json";

export default class Game {
  private gameStatus: GameStatus;

  private board: Array<Field>;
  private players: Array<Player>;

  constructor() {
    this.gameStatus = GameStatus.LOBBY;
    this.board = new Array();
  }

  public init(players: Array<Player>): void {
    this.players = players;
    this.board = Fields.fields;
    this.players.forEach((player: Player) => {
      this.board[0].currentPlayers.push(player);
    });

    //
    this.gameStatus = GameStatus.RUNNING;
  }

  private rollDice(): number {
    let stDie: number = Settings.getRandomNumber(1, 6);
    let ndDie: number = Settings.getRandomNumber(1, 6);

    return stDie + ndDie;
  }

  //Getters and setters
  public getGameStatus(): GameStatus {
    return this.gameStatus;
  }
}
