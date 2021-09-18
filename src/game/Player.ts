import Settings from "../Settings";

export default class Player {
  private readonly nick: string;
  private money: number;

  constructor(nick: string) {
    this.nick = nick;
  }

  init() {
    this.money = Settings.INITIAL_MONEY;
  }

  //Getters and setters
  getNick(): string {
    return this.nick;
  }
}
