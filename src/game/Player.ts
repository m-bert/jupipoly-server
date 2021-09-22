import Settings from "../Settings";
import { PlayerStatus } from "./Utils/Enums";
import { Field, OwnedPropertiesAmount } from "./Utils/Interfaces";

export default class Player {
  private readonly nick: string;
  private status: PlayerStatus;

  private currentField: number;
  private money: number;
  private properties: Array<Field>;
  private ownedAmount: OwnedPropertiesAmount;

  constructor(nick: string) {
    this.nick = nick;
    this.status = PlayerStatus.WAITING;
  }

  public init() {
    this.money = Settings.INITIAL_MONEY;
    this.currentField = Settings.START_FIELD;
    this.ownedAmount = Settings.INITIAL_OWNED_PROPERTIES_AMOUNT;
  }

  //Getters and setters
  public getNick(): string {
    return this.nick;
  }

  public getStatus(): PlayerStatus {
    return this.status;
  }

  public setStatus(status: PlayerStatus): void {
    this.status = status;
  }
}
