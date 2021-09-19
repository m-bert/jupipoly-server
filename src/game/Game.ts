import Settings from "../Settings";
import { GameStatus } from "./Enums";

export default class Game {
  private gameStatus: GameStatus;

  constructor() {
    this.gameStatus = GameStatus.LOBBY;
  }

  public init(): void {
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
