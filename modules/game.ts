import * as PIXI from "pixi.js";
import { Map } from "./map";
import { Character } from "./character";
import { CharacterController } from "./characterController";
import { getPlayerAssetPath } from "../utils";

/**
 * Contains application setup methods & Loads assets
 *
 * @See: Pixi.Application
 */
export class Game {
  private app: PIXI.Application;
  private player: Character | null = null;
  private map: Map | null = null;

  private PLAYER_WALKING_SPEED: number = 0.05;

  //The map doesn't size to the full width on edge, however the app itself does here?
  constructor() {
    this.app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      resizeTo: window,
      resolution: window.devicePixelRatio || 1,
      autoDensity: true,
    });

    document.body.appendChild(this.app.view);
  }

  /**
   * run the game
   *
   *
   */
  public play(): void {
    PIXI.Loader.shared
      .add("assets/map.png")
      .add("assets/player.png")
      .load(this.setup.bind(this));
  }

  /**
   * Loads assets
   *
   * @See: loadAssets() method of this class
   */
  private start(delta: number): void {
    this.player?.setSpriteCoordinate({
      x: this.player.getSprite().x + this.player.getVelocity().x,
      y: this.player.getSprite().y + this.player.getVelocity().y,
    });
  }

  /**
   * Creates new map and character object and loads them
   *  @See: map.ts & character.ts
   *
   */
  private setup(): void {
    const map = new Map(this.app);
    map.construct();

    //Character class in another module, passess application to the character instance
    const player = new Character(this.app);
    player.construct(getPlayerAssetPath());

    this.player = player;
    this.map = map;

    const playerController = new CharacterController(
      this.player,
      this.PLAYER_WALKING_SPEED
    );

    playerController.addKeyboardListeners();

    this.app.ticker.add((delta: number) => this.start(delta));
  }
}
