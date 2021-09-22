import { FieldType, FieldColor } from "./Enums";
import Player from "../Player";

export interface Field {
  name: string;
  type: FieldType;
  color?: FieldColor;
  cost?: number;
  amount?: number;
  currentPlayers: Player[];
}

export interface OwnedPropertiesAmount {
  brown: number;
  light_blue: number;
  pink: number;
  orange: number;
  red: number;
  yellow: number;
  green: number;
  dark_blue: number;
  railway: number;
  utilities: number;
}
