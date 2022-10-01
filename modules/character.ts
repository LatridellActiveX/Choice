import * as PIXI from "pixi.js";
import {
  getCharacterMovementAnimation,
  getPlayerAssetPath,
  getZoomLevel,
} from "../utils";
import { CharacterController } from "./characterController";

export class Character {
  private app: PIXI.Application;

  constructor(app: PIXI.Application) {
    this.app = app;
  }

  public load(): void {
    const player = new PIXI.AnimatedSprite(
      getCharacterMovementAnimation(getPlayerAssetPath()).down
    );

    const playerContainer = new PIXI.Container();

    player.width = player.width * getZoomLevel();
    player.height = player.height * getZoomLevel();
    player.loop = true;

    playerContainer.addChild(player);
    this.app.stage.addChild(playerContainer);

    const characterController = new CharacterController(player, 10);
    characterController.addKeyboardListeners();
  }
}
