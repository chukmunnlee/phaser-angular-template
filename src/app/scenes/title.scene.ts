import {Scene} from "phaser";

import {GameService} from "../game.service";
import {IMG_GAME_TITLE, IMG_PHASER, SCENE_TITLE} from "../utils/constants";
import {Globals} from "../utils/globals";
import {gameHeight, gameWidth, scaleToGameHeight} from "../utils/helpers";

export class TitleScene extends Scene {

	gameSvc: GameService

	constructor() {
		super(SCENE_TITLE)
		this.gameSvc = Globals.injector.get(GameService)
	}

	preload() {
	}

	create() {
		const height = gameHeight(this.game) / 4
		const centX = gameWidth(this.game) / 2
		const centY = height * 2.5
		let img = this.add.image(centX, centY, IMG_PHASER)
		scaleToGameHeight(img, this.game, .6)
		img = this.add.image(centX, height * .8, IMG_GAME_TITLE)
		scaleToGameHeight(img, this.game, .09)
	}
}
