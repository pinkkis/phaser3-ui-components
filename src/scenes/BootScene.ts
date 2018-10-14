import { BaseScene } from "./BaseScene";

export class BootScene extends BaseScene{
	constructor(key: string, options: any) {
		super('BootScene');

		console.info('BootScene - constructor()');
	}

	preload() {
		console.info('BootScene - preload()');
	}

	init() {
		console.info('BootScene - init()');
	}

	create() {
		console.info('BootScene - create()');

		this.scene.start('MenuScene', {});
	}

	update(time: number, delta: number) {

	}
}
