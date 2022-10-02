import * as PIXI from "pixi.js";
import { getZoomLevel } from "../utils";

export class Map {
  private app: PIXI.Application;

  constructor(app: PIXI.Application) {
    this.app = app;
  }

  public construct(): void {
    const gameMap = new PIXI.Sprite(
      PIXI.Loader.shared.resources["assets/map.png"].texture
    );

    const gameMapContainer = new PIXI.Container();

    gameMap.width = gameMap.width * getZoomLevel();
    gameMap.height = gameMap.height * getZoomLevel();

    gameMapContainer.addChild(gameMap);
    this.app.stage.addChild(gameMapContainer);
  }
}
