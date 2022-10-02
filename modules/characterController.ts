import { AnimatedSprite } from "pixi.js";
import { getCharacterMovementAnimation, getPlayerAssetPath } from "../utils";

export class CharacterController {
  private character: AnimatedSprite;
  private velocity: number;

  constructor(character: AnimatedSprite, velocity: number = 5) {
    this.character = character;
    this.velocity = velocity;
  }


  //Supports arrows and wasd 
  public addKeyboardListeners(): void {
    this.character.play();
    window.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowUp":
          this.moveUp();
          break;
        case "ArrowDown":
          this.moveDown();
          break;
        case "ArrowLeft":
          this.moveLeft();
          break;
        case "ArrowRight":
          this.moveRight();
          break;
        case "w":
          this.moveUp();
          break;
        case "a":
          this.moveLeft();
          break;
        case "s":
          this.moveDown();
          break;
        case "d":
          this.moveRight();
          break;
      }
    });
  }


  //We need to determine if this is the source of the pause in the character movement. 
  public moveUp(): void {
    this.character.textures = getCharacterMovementAnimation(
      getPlayerAssetPath()
    ).up;
    this.character.y -= this.velocity;
    console.log('moving');
  }

  public moveDown(): void {
    this.character.textures = getCharacterMovementAnimation(
      getPlayerAssetPath()
    ).down;
    this.character.y += this.velocity;
    console.log('moving');
  }

  public moveLeft(): void {
    this.character.textures = getCharacterMovementAnimation(
      getPlayerAssetPath()
    ).left;
    this.character.x -= this.velocity;
    console.log('moving');
  }

  public moveRight(): void {
    this.character.textures = getCharacterMovementAnimation(
      getPlayerAssetPath()
    ).right;
    this.character.x += this.velocity;
    console.log('moving');
  }
}
