import * as PIXI from "pixi.js";
import {
  getCharacterMovementAnimation,
  getPlayerAssetPath,
  getZoomLevel,
} from "../utils";
import { CharacterController } from "./characterController";

//You can put export before the class template
export class Character {
  private app: PIXI.Application;

  constructor(app: PIXI.Application) {
    this.app = app;
  }

  //loads the character
  public load(): void {
    //animated sprite object in pixi. 
    //what is getCharacterMovementAnimation(getPlayerAsset.Path).down. 
    const player = new PIXI.AnimatedSprite(
      getCharacterMovementAnimation(getPlayerAssetPath()).down
    );

    //creates a container for the character
    const playerContainer = new PIXI.Container();

    //Sets the dimensions of the player scaled by the zoom level
    player.width = player.width * getZoomLevel();
    player.height = player.height * getZoomLevel();
    //loops the animation I'm assuming?
    player.loop = true;

    //Ad the character to its conatiner
    playerContainer.addChild(player);

    //add the character container to the stage of the app.
    this.app.stage.addChild(playerContainer);

    //Instance of character controller class in seperate module
    const characterController = new CharacterController(player, 10);
    characterController.addKeyboardListeners();
  }
}
