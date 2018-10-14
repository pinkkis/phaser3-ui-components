import { BaseScene } from "./BaseScene";
import { MenuContainer } from "../classes/MenuContainer";

export class UiScene extends BaseScene {
	menu: MenuContainer;

	constructor(key: string, options: any) {
		super('UiScene');

		console.info('UiScene - constructor()');
	}

	preload() {
		console.info('UiScene - preload()');
	}

	init(data: any) {
		console.info('UiScene - init()', data);
	}

	create(data: any) {
		console.info('UiScene - create()', data);

		let sceneText = this.add.text(200, 200, 'UiScene');
		let menuText = this.add.text(300, 200, 'MenuContainer');

		this.menu = new MenuContainer(this);
		this.add.existing(this.menu);

		this.menu.add(menuText);

		this.events
			.on('pause', (data:any) => console.log(this.sys.config, 'pause', data), this)
			.on('resume', (data:any) => console.log(this.sys.config, 'resume', data), this)
			.on('sleep', (data:any) => console.log(this.sys.config, 'sleep', data), this)
			.on('wake', (data:any) => console.log(this.sys.config, 'wake', data), this)
			.on('shutdown', (data:any) => console.log(this.sys.config, 'shutdown', data), this);
	}

	update(time: number, delta: number) {

	}
}
