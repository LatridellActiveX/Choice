import * as PIXI from "pixi.js";
import { Map } from "./map";
import { Character } from "./character";

export class Game {
  private app: PIXI.Application;

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

  private loadAssets(): void {
    PIXI.Loader.shared
      .add("assets/map.png")
      .add("assets/player.png")
      .load(this.setup.bind(this));
  }

  private setup(): void {
    const map = new Map(this.app);
    map.load();

    const player = new Character(this.app);
    player.load();
  }
}
