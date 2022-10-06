import { getCharacterMovementAnimation, getPlayerAssetPath } from "../utils";
import { Character } from "./character";
import * as PIXI from "pixi.js";


/**Event liseners and move methods tied to the character
 * 
 */
export class CharacterController {
  private character: Character;
  private velocity: number;

  constructor(character: Character, velocity: number = 500) {
    this.character = character;
    this.velocity = velocity;
  }

  private isMoving: boolean = false;
  private rightActive: boolean = false;
  private leftActive: boolean = false;
  private upActive: boolean = false;
  private downActive: boolean = false;
  /**
   * Event listener method for player movement keydown events
   */
  public addKeyboardListeners(): void {
    window.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowUp":
        case "w":
          this.leftActive = false;
          this.downActive = false;
          this.rightActive = false;
          this.isMoving = true;
          this.upActive = true;
          //this.moveUp();
          break;
        case "ArrowDown":
        case "s":
          this.upActive = false;
          this.leftActive = false;
          this.rightActive = false;
          this.isMoving = true;
          this.downActive = true;
          //this.moveDown();
          break;
        case "ArrowLeft":
        case "a":
          this.upActive = false;
          this.downActive = false;
          this.rightActive = false;
          this.isMoving = true;
          this.leftActive = true;
          //this.moveLeft();
          break;
        case "ArrowRight":
        case "d":
          this.upActive = false;
          this.downActive = false;
          this.leftActive = false;
          this.isMoving = true;
          this.rightActive = true;
          //this.moveRight();
          break;
      }
    });

    /** WIP event listener for key up events
     * 
     */
    window.addEventListener("keyup", (event) => {
      switch (event.key) {
        case "ArrowUp":
        case "w":
          this.upActive = false;
          break;
        case "ArrowDown":
        case "s":
          this.downActive = false;
          break;
        case "ArrowLeft":
        case "a":
          this.leftActive = false;
          break;
        case "ArrowRight":
        case "d":
          this.rightActive = false;
          break;
      }
    });

  }

  public moveCheck():void{
    if(!this.rightActive && !this.leftActive && !this.upActive && !this.downActive){
        this.isMoving = false;
        this.stopMoving();
      }else {
        if(this.rightActive){
          this.isMoving = true;
          this.moveRight();
        }else if(this.leftActive){
          this.isMoving = true;
          this.moveLeft();
        }else if(this.upActive){
          this.isMoving = true;
          this.moveUp();
        }else if(this.downActive){
          this.isMoving = true;
          this.moveDown();
        }
      }
  }

  /**
   * Moves the character up
   *
   * @See character.setVelocity()
   */
  public moveUp(): void {
    // changes sprite for character animation
    this.character.setSpriteTextures(
      getCharacterMovementAnimation(getPlayerAssetPath()).up
    );


    //This ties in with the character class velocity, which is then accessed by the game loop. So all in all it ties back to the event listeners which have a delay. 
    this.character.setVelocity({
      x: 0,
      y: -5,
    });
  }

  /**Moves the character down
   * 
   * @See character.setVelocity()
   */
  public moveDown(): void {
    this.character.setSpriteTextures(
      getCharacterMovementAnimation(getPlayerAssetPath()).down
    );

    this.character.setVelocity({
      x: 0,
      y: 5,
    });
  }

  /**Moves the character left
   * 
   * @See character.setVelocity()
   */
  public moveLeft(): void {
    this.character.setSpriteTextures(
      getCharacterMovementAnimation(getPlayerAssetPath()).left
    );

    this.character.setVelocity({
      x: -5,
      y: 0,
    });
  }

  /**Moves the character right
   * 
   * @See character.setVelocity()
   */
  public moveRight(): void {
    this.character.setSpriteTextures(
      getCharacterMovementAnimation(getPlayerAssetPath()).right
    );

    this.character.setVelocity({
      x: 5,
      y: 0,
    });
  }

  public stopMoving():void{
    this.character.setVelocity({
      x: 0,
      y: 0
    });
  }
}
