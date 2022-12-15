import * as PIXI from "pixi.js";
import { Map } from "./map";
import { Character } from "./character";
import { CharacterController } from "./characterController";
import { getPlayerAssetPath } from "../utils";
import { TemporaryDisplayObject } from "pixi.js";

/**
 * Contains application setup methods & Loads assets
 *
 * @See: Pixi.Application
 */
export class Game {
  private app: PIXI.Application;
  private player: Character | null = null;
  private map: Map | null = null;
  private controller: CharacterController | null = null;

  private PLAYER_WALKING_SPEED: number = 0.5;

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
   * run the game and "binds" the setup() function in this class to the loader. 
   * Contains a callback which is the setup() function in this class that is called when the initial loading is complete. 
   *
   */
  public play(): void {
    PIXI.Loader.shared
      .add("assets/map.png")
      .add("assets/player.png")
      .load(this.setup.bind(this));
  }

  
  /**
   * Essentially the game loop
   * @Speed ~60 Iterations / Second
   *
   * @See PIXI.Ticker
   */
  private start(delta: number): void {
    this.controller?.moveCheck();
    this.player?.setSpriteCoordinate({
      x: this.player.getSprite().x + this.player.getVelocity().x,
      y: this.player.getSprite().y + this.player.getVelocity().y,
    });
    if(!this.player?.moving){
      this.player!.getSprite().gotoAndStop(0);
    }else if(this.player?.moving){
      this.player!.getSprite().play();
    }
    //console.log(this.player?.getSprite().playing);
  }

  /**
   * Creates new map and character object and loads them. 
   * Also creates a new character controller. 
   *  Bound to the loader
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
    this.controller = playerController;

    playerController.addKeyboardListeners();

    this.app.ticker.add((delta: number) => this.start(delta));
  }
}
