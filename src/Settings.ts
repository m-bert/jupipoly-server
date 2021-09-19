export default class Settings {
  public static readonly PORT: number = 3300;

  public static readonly INITIAL_MONEY = 1500;
  public static readonly PLAYERS_TO_START = 2;

  public static getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
