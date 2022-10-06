import * as PIXI from "pixi.js";
import { Coordinate, Velocity } from "../interface";
import {
  getCharacterMovementAnimation,
  getPlayerAssetPath,
  getZoomLevel,
} from "../utils";
import { CharacterController } from "./characterController";

/** Represents a character
 * 
 * 
 * 
 */
export class Character {
  private app: PIXI.Application;
  private sprite: PIXI.AnimatedSprite | undefined;
  public moving:boolean = false;
  private velocity: Velocity = {
    x: 0,
    y: 0,
  };

  constructor(app: PIXI.Application) {
    this.app = app;
  }

  /** Sets up the dimensions of the character. Creates a character container, and adds it to the stage. 
   * 
   * @param assetPath The path for the character animation
   */
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

  /** Returns the sprite
   * 
   * @returns sprite as PIXI.AnimatedSprite
   */
  public getSprite(): PIXI.AnimatedSprite {
    return this.sprite as PIXI.AnimatedSprite;
  }


  /**Setter for the sprite coordinates
   * 
   * @param coordinate (Coordinate Object)
   */
  public setSpriteCoordinate(coordinate: Coordinate) {
    this.sprite!.x = coordinate.x;
    this.sprite!.y = coordinate.y;
  }

  /**Setter for the character textures
   * @NOTE Not working at the moment, needs a fix
   * @param textures <PIXI.Texture>[] 
   */
  
  public setSpriteTextures(textures: PIXI.Texture[]): void {
    try{
      this.sprite!.textures = textures;
      this.sprite!.animationSpeed = 0.1;
    }catch(e){
      console.log(`Fucked up because ${e}`)
    }
    
  }

  /** Getter for character velocity
   * 
   * @returns velocity (Object)
   */

  public getVelocity(): Velocity {
    return this.velocity;
  }

  /** Setter for the character velocity
   * 
   * @param velocity (Object)
   */
  public setVelocity(velocity: Velocity): void {
    this.velocity = velocity;
  }
}
