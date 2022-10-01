import { AnimatedSprite } from "pixi.js";
import { getCharacterMovementAnimation, getPlayerAssetPath } from "../utils";

export class CharacterController {
  private character: AnimatedSprite;
  private velocity: number;

  constructor(character: AnimatedSprite, velocity: number = 5) {
    this.character = character;
    this.velocity = velocity;
  }

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
      }
    });
  }

  public moveUp(): void {
    this.character.textures = getCharacterMovementAnimation(
      getPlayerAssetPath()
    ).up;
    this.character.y -= this.velocity;
  }

  public moveDown(): void {
    this.character.textures = getCharacterMovementAnimation(
      getPlayerAssetPath()
    ).down;
    this.character.y += this.velocity;
  }

  public moveLeft(): void {
    this.character.textures = getCharacterMovementAnimation(
      getPlayerAssetPath()
    ).left;
    this.character.x -= this.velocity;
  }

  public moveRight(): void {
    this.character.textures = getCharacterMovementAnimation(
      getPlayerAssetPath()
    ).right;
    this.character.x += this.velocity;
  }
}
