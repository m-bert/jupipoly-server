import Settings from "../Settings";
import { FieldTypes } from "./enums/FieldTypes";

export default class Game {
  constructor() {}

  public init(): void {}

  private rollDice(): number {
    let stDie: number = Settings.getRandomNumber(1, 6);
    let ndDie: number = Settings.getRandomNumber(1, 6);

    return stDie + ndDie;
  }
}
