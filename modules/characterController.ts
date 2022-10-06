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

  //it says that isMoving is never read but I reference it all over the code, not sure why this bug is here. 
  private isMoving: boolean = false;
  private rightActive: boolean = false;
  private leftActive: boolean = false;
  private upActive: boolean = false;
  private downActive: boolean = false;
  private directionChange = false;
  private keyDownCode: number = 0;
  //Key codes that I have come up with: 1-right, 2-left, 3-up, 4-down
  /**
   * Event listener method for player movement keydown events
   */
  public addKeyboardListeners(): void {
    window.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowUp":
        case "w":
          if(this.keyDownCode != 3){
            this.keyDownCode = 3;
            this.character.setSpriteTextures(
              getCharacterMovementAnimation(getPlayerAssetPath()).up
            );
          }
          this.leftActive = false;
          this.downActive = false;
          this.rightActive = false;
          this.isMoving = true;
          this.upActive = true;  
          break;
        case "ArrowDown":
        case "s":
          if(this.keyDownCode != 4){
            this.keyDownCode = 4;
            this.character.setSpriteTextures(
              getCharacterMovementAnimation(getPlayerAssetPath()).down
            );
          }
          this.upActive = false;
          this.leftActive = false;
          this.rightActive = false;
          this.isMoving = true;
          this.downActive = true;  
          break;
        case "ArrowLeft":
        case "a":
          if(this.keyDownCode != 2){
            this.keyDownCode = 2;
            this.character.setSpriteTextures(
              getCharacterMovementAnimation(getPlayerAssetPath()).left
            );
          }
          this.upActive = false;
          this.downActive = false;
          this.rightActive = false;
          this.isMoving = true;
          this.leftActive = true;
          break;
        case "ArrowRight":
        case "d":
          if(this.keyDownCode != 1){
            this.keyDownCode = 1;
            this.character.setSpriteTextures(
              getCharacterMovementAnimation(getPlayerAssetPath()).right
            );
          }
          this.upActive = false;
          this.downActive = false;
          this.leftActive = false;
          this.isMoving = true;
          this.rightActive = true;
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
          //gets called at 60fps
          this.isMoving = true;
          this.moveRight();
        }else if(this.leftActive){
          //gets called at 60fps
          console.log("leftActive");
          this.isMoving = true;
          this.moveLeft();
        }else if(this.upActive){
          console.log("upActive");
          //gets called at 60fps
          this.isMoving = true;
          this.moveUp();
        }else if(this.downActive){
          //gets called at 60fps
          console.log("downActive");
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
    this.character.moving = true;
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
    this.character.moving = true;
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
    this.character.moving = true;
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
    this.character.moving = true;
    this.character.setVelocity({
      x: 5,
      y: 0,
    });
  }

  public stopMoving():void{
    this.character.moving = false;
    this.character.setVelocity({
      x: 0,
      y: 0
    });
  }
}
