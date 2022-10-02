import * as PIXI from "pixi.js";
import { Map } from "./map";
import { Character } from "./character";

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

  public start(): void {
    this.loadAssets();
  }

  //The map asset and the player asset is loaded through this
  private loadAssets(): void {
    PIXI.Loader.shared
      .add("assets/map.png")
      .add("assets/player.png")
      .load(this.setup.bind(this));
  }

  //why do we call this.app here?
  private setup(): void {
    const map = new Map(this.app);
    map.load();

  //Character class in another module, passess application to the character instance
    const player = new Character(this.app);
    player.load();
  }
}
