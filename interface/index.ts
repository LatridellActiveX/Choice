import * as PIXI from "pixi.js";

interface ICharacterMovementAnimation {
  down: PIXI.Texture[];
  up: PIXI.Texture[];
  left: PIXI.Texture[];
  right: PIXI.Texture[];
}

export { ICharacterMovementAnimation };
