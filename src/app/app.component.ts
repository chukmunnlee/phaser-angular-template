import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {GameService} from './game.service';
import {PreloadScene} from './scenes/preload';
import {TitleScene} from './scenes/title.scene';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	constructor(private title: Title, private gameSvc: GameService) {
	}

	ngOnInit() {
		this.title.setTitle('My Game')

		this.gameSvc.createGame({
			width: 900,
			height: 700,
			// @ts-ignore
			scenes: [ PreloadScene, TitleScene ]
		})
	}
}
