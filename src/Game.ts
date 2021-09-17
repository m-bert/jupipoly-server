import Settings from "./Settings";

export default class Game {
  constructor() {}

  rollDice(): number {
    let stDie: number = Settings.getRandomNumber(1, 6);
    let ndDie: number = Settings.getRandomNumber(1, 6);

    return stDie + ndDie;
  }
}
