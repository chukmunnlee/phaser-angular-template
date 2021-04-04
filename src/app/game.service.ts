import {Injectable} from "@angular/core";

import {Game} from "phaser";
import {PARENT} from "./utils/constants";
import {CreateGameOptions} from "./utils/types";

@Injectable()
export class GameService {
	game: Game
	debug = false

	createGame(opt: CreateGameOptions) {

		if (this.game)
			return

		this.debug = ('debug' in opt)? opt.debug: false

		this.game = new Game({
			width: opt.width,
			height: opt.height,
			parent: PARENT,
			scene: opt.scenes,
			physics: {
				default: 'arcade',
				arcade: {
					debug: this.debug
				}
			}
		})
	}
}
