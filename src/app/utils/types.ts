import {Scene} from "phaser";

export interface CreateGameOptions {
	scenes: Scene[]
	width: number
	height: number
	debug?: boolean
}
