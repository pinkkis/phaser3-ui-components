import { BaseScene } from "./BaseScene";

export class GameScene extends BaseScene {
	stuffArray: Array<number>;

	constructor(key: string, options: any) {
		super('GameScene');

		console.info('GameScene - constructor()');


	}

	preload() {
		console.info('GameScene - preload()');
	}

	init(data: any) {

		console.info('GameScene - init()', data);

		this.scene.launch('UiScene');
	}

	create(data: any) {
		console.info('GameScene - create()', data);

		this.events
			.on('pause', (data:any) => console.log(this.sys.config, 'pause', data), this)
			.on('resume', (data:any) => console.log(this.sys.config, 'resume', data), this)
			.on('sleep', (data:any) => console.log(this.sys.config, 'sleep', data), this)
			.on('wake', (data:any) => console.log(this.sys.config, 'wake', data), this)
			.on('shutdown', (data:any) => console.log(this.sys.config, 'shutdown', data), this);

		this.add.text(100, 100, 'GameScene');

		this.input.on('pointerup', () => {
			this.scene.start('MenuScene', {});
		}, this);

	}

	update(time: number, delta: number) {

	}

}
