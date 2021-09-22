import { OwnedPropertiesAmount } from "./game/Utils/Interfaces";

export default class Settings {
  public static readonly PORT: number = 3300;

  public static readonly PLAYERS_TO_START: number = 2;

  public static readonly INITIAL_MONEY: number = 1500;
  public static readonly START_FIELD: number = 0;
  public static readonly INITIAL_OWNED_PROPERTIES_AMOUNT: OwnedPropertiesAmount =
    {
      brown: 0,
      light_blue: 0,
      pink: 0,
      orange: 0,
      red: 0,
      yellow: 0,
      green: 0,
      dark_blue: 0,
      railway: 0,
      utilities: 0
    };

  public static getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
