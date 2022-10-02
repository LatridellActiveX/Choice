import * as PIXI from "pixi.js";

interface ICharacterMovementAnimation {
  down: PIXI.Texture[];
  up: PIXI.Texture[];
  left: PIXI.Texture[];
  right: PIXI.Texture[];
}

interface Velocity {
  x: number;
  y: number;
}

interface Coordinate {
  x: number;
  y: number;
}

export { ICharacterMovementAnimation, Velocity, Coordinate };
