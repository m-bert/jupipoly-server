export enum FieldType {
  PROPERTY = 0,
  RAILWAY, //1
  UTILITY, //2
  CHANCE, //3
  TAX, //4
  START, //5
  FISHING, //6
  JAIL, //7
  GO_TO_JAIL //8
}

export enum FieldColor {
  BROWN,
  LIGHT_BLUE,
  PINK,
  ORANGE,
  RED,
  YELLOW,
  GREEN,
  DARK_BLUE
}

export enum GameStatus {
  LOBBY,
  RUNNING
}

export enum PlayerStatus {
  WAITING,
  READY
}
