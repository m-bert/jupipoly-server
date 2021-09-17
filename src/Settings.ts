import Player from "./Player";

export default class Settings {
  public static readonly PORT: number = 3300;
  public static readonly INITIAL_MONEY = 1500;
  public static readonly PLAYERS_TO_START = 2;

  public static getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public static checkIfPlayerExists(
    nick: string,
    players: Array<Player>
  ): boolean {
    for (let player of players) {
      if (nick == player.getNick()) {
        return true;
      }
    }

    return false;
  }

  public static checkIfPlayersAreReady(players: Array<Player>): boolean {
    return true;
  }
}
