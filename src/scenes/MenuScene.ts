import { BaseScene } from "./BaseScene";

export class MenuScene extends BaseScene {
	constructor(key: string, options: any) {
		super('MenuScene');

		console.info('MenuScene - constructor()');
	}

	preload() {
		console.info('MenuScene - preload()');
	}

	init(data: any) {
		console.info('MenuScene - init()', data);
	}

	create(data: any) {
		console.info('MenuScene - create()', data);

		this.events
			.on('pause', (data:any) => console.log(this.sys.config, 'pause', data), this)
			.on('resume', (data:any) => console.log(this.sys.config, 'resume', data), this)
			.on('sleep', (data:any) => console.log(this.sys.config, 'sleep', data), this)
			.on('wake', (data:any) => console.log(this.sys.config, 'wake', data), this)
			.on('shutdown', (data:any) => console.log(this.sys.config, 'shutdown', data), this);

		this.add.text(150, 150, 'MenuScene');

		this.input.on('pointerup', () => {
			this.scene.start('GameScene', {});
		}, this);
	}

	update(time: number, delta: number) {

	}
}
