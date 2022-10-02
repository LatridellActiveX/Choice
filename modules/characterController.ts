import { getCharacterMovementAnimation, getPlayerAssetPath } from "../utils";
import { Character } from "./character";
import * as PIXI from "pixi.js";

export class CharacterController {
  private character: Character;
  private velocity: number;

  constructor(character: Character, velocity: number = 5) {
    this.character = character;
    this.velocity = velocity;
  }

  /**
   * Event listener method for player movement keydown events
   */
  public addKeyboardListeners(): void {
    window.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowUp":
        case "w":
          this.moveUp();
          break;
        case "ArrowDown":
        case "s":
          this.moveDown();
          break;
        case "ArrowLeft":
        case "a":
          this.moveLeft();
          break;
        case "ArrowRight":
        case "d":
          this.moveRight();
          break;
      }
    });

    window.addEventListener("keyup", (event) => {
      this.character.setVelocity({
        x: 0,
        y: 0,
      });
    });
  }

  /**
   * Moves the character up
   *
   * @See: ./utils/index.ts
   */
  public moveUp(): void {
    // changes sprite for character animation
    this.character.setSpriteTextures(
      getCharacterMovementAnimation(getPlayerAssetPath()).up
    );

    this.character.setVelocity({
      x: 0,
      y: this.character.getVelocity().y - this.velocity,
    });
  }

  public moveDown(): void {
    this.character.setSpriteTextures(
      getCharacterMovementAnimation(getPlayerAssetPath()).down
    );

    this.character.setVelocity({
      x: 0,
      y: this.character.getVelocity().y + this.velocity,
    });
  }

  public moveLeft(): void {
    this.character.setSpriteTextures(
      getCharacterMovementAnimation(getPlayerAssetPath()).left
    );

    this.character.setVelocity({
      x: this.character.getVelocity().x - this.velocity,
      y: 0,
    });
  }

  public moveRight(): void {
    this.character.setSpriteTextures(
      getCharacterMovementAnimation(getPlayerAssetPath()).right
    );

    this.character.setVelocity({
      x: this.character.getVelocity().x + this.velocity,
      y: 0,
    });
  }
}
