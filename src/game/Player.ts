import Settings from "../Settings";
import { PlayerStatus } from "./Enums";

export default class Player {
  private readonly nick: string;
  private status: PlayerStatus;
  private money: number;

  constructor(nick: string) {
    this.nick = nick;
    this.status = PlayerStatus.WAITING;
  }

  public init() {
    this.money = Settings.INITIAL_MONEY;
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
