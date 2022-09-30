import * as PIXI from "pixi.js";

export class Game {
  private app: PIXI.Application;

  constructor() {
    this.app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      resizeTo: window,
    });

    document.body.appendChild(this.app.view);
  }

  public start(): void {
    this.loadAssets();
  }

  private loadAssets(): void {
    PIXI.Loader.shared.add("assets/gamemap.png").load(this.setup.bind(this));
  }

  private setup(): void {
    const gamemap = new PIXI.Sprite(
      PIXI.Loader.shared.resources["assets/gamemap.png"].texture
    );

    const gamemapContainer = new PIXI.Container();

    gamemapContainer.addChild(gamemap);
    this.app.stage.addChild(gamemapContainer);
  }
}
