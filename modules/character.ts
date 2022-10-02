import * as PIXI from "pixi.js";
import { Coordinate, Velocity } from "../interface";
import {
  getCharacterMovementAnimation,
  getPlayerAssetPath,
  getZoomLevel,
} from "../utils";
import { CharacterController } from "./characterController";

//You can put export before the class template
export class Character {
  private app: PIXI.Application;
  private sprite: PIXI.AnimatedSprite | undefined;

  private velocity: Velocity = {
    x: 0,
    y: 0,
  };

  constructor(app: PIXI.Application) {
    this.app = app;
  }

  //loads the character
  public construct(assetPath: string): void {
    //animated sprite object in pixi.
    const character = new PIXI.AnimatedSprite(
      getCharacterMovementAnimation(assetPath).down
    );

    //creates a container for the character
    const characterContainer = new PIXI.Container();

    //Sets the dimensions of the player scaled by the zoom level
    character.width = character.width * getZoomLevel();
    character.height = character.height * getZoomLevel();
    //loops the animation I'm assuming?
    character.loop = true;

    //Ad the character to its conatiner
    characterContainer.addChild(character);

    //add the character container to the stage of the app.
    this.app.stage.addChild(characterContainer);

    //sets the sprite to the player
    this.sprite = character;
  }

  //returns the sprite
  public getSprite(): PIXI.AnimatedSprite {
    return this.sprite as PIXI.AnimatedSprite;
  }

  public setSpriteCoordinate(coordinate: Coordinate) {
    this.sprite!.x = coordinate.x;
    this.sprite!.y = coordinate.y;
  }

  public setSpriteTextures(textures: PIXI.Texture[]): void {
    this.sprite!.textures = textures;
  }

  public getVelocity(): Velocity {
    return this.velocity;
  }

  public setVelocity(velocity: Velocity): void {
    this.velocity = velocity;
  }
}
