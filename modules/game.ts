import * as PIXI from "pixi.js";
import { Map } from "./map";
import { Character } from "./character";

/**
 * Contains application setup methods & Loads assets
 * 
 * @See: Pixi.Application
 */
export class Game {
  private app: PIXI.Application;

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
   * Loads assets
   * 
   * @See: loadAssets() method of this class
   */
  public start(): void {
    this.loadAssets();
  }


  /**
   * Calls PIXI.Loader and .add's the map and player assets
   *  
   * @See: PIXI.Loader of Pixi.js & setup() method of this class
   */
  private loadAssets(): void {
    PIXI.Loader.shared
      .add("assets/map.png")
      .add("assets/player.png")
      .load(this.setup.bind(this));
  }

  /**
   * Creates new map and character object and loads them
   *  @See: map.ts & character.ts   
   *
   */
  private setup(): void {
    const map = new Map(this.app);
    map.load();

  //Character class in another module, passess application to the character instance
    const player = new Character(this.app);
    player.load();
  }
}
