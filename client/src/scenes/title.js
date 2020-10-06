import Game from './game';
import Player from '../helpers/player';
import { CONSTANTS } from '../constants';

const createLoopedBG = (scene, totalWidth, texture, scale, scrollFactor, depth) => {
  const w = scene.textures.get(texture).getSourceImage().width;
  const count = Math.ceil(totalWidth / w) * scrollFactor;

  let x = 0;

  for (let i = 0; i < count; ++i) {
    const m = scene.add
      .image(x, scene.scale.height, texture)
      .setOrigin(0, 1)
      .setDepth(depth)
      .setScale(scale, scale)
      .setScrollFactor(scrollFactor);

    x += m.width;
  }
};

export default class Title extends Phaser.Scene {
  constructor() {
    super({
      key: CONSTANTS.SCENES.MENU,
      active: true,
    });
  }

  preload() {
    this.load.image('ground-shadow', 'src/assets/background/Layer_0000_9.png');
    this.load.image('ground', 'src/assets/background/Layer_0001_8.png');
    this.load.image('trees-top', 'src/assets/background/Layer_0002_7.png');
    this.load.image('trees-bottom', 'src/assets/background/Layer_0003_6.png');
    this.load.image('lights', 'src/assets/background/Layer_0004_lights.png');
    this.load.image('trees-bottom-shadow', 'src/assets/background/Layer_0005_5.png');
    this.load.image('trees-sill', 'src/assets/background/Layer_0006_4.png');
    this.load.image('lights-2', 'src/assets/background/Layer_0007_lights.png');
    this.load.image('trees-shadows', 'src/assets/background/Layer_0008_3.png');
    this.load.image('shadows', 'src/assets/background/Layer_0009_2.png');
    this.load.image('sky', 'src/assets/background/Layer_0010_1.png');
    this.cursors = this.input.keyboard.createCursorKeys();

    // this.upKey = this.input.keyboard.addKey('w');
    // this.downKey = this.input.keyboard.addKey('s');
    this.leftKey = this.input.keyboard.addKey('a');
    this.rightKey = this.input.keyboard.addKey('d');
  }

  create() {
    const width = this.scale.width;
    const height = this.scale.height;
    const totalWidth = width * 10;

    // (scene, totalWidth, texture, scale, scrollFactor, depth)
    createLoopedBG(this, totalWidth, 'ground-shadow', 1.5, 1.1, 10);
    createLoopedBG(this, totalWidth, 'ground', 1.5, 1, 9);
    createLoopedBG(this, totalWidth, 'trees-top', 1.5, 0.3, 8);
    createLoopedBG(this, totalWidth, 'trees-bottom', 1.5, 0.3, 7);
    createLoopedBG(this, totalWidth, 'lights', 1.5, 0.35, 6);
    createLoopedBG(this, totalWidth, 'trees-bottom-shadow', 1.5, 0.4, 5);
    createLoopedBG(this, totalWidth, 'trees-sill', 1.5, 0.4, 4);
    createLoopedBG(this, totalWidth, 'lights-2', 1.5, 0.3, 3);
    createLoopedBG(this, totalWidth, 'trees-shadows', 1.5, 0.4, 2);

    this.add
      .image(width * 0.5, height * 0.5, 'sky')
      .setDepth(0)
      .setScale(2, 2)
      .setScrollFactor(0);

    this.startGameText = this.add
      .text(this.game.renderer.width / 2, this.game.renderer.height * 0.55, ['Play'])
      .setDepth(11)
      .setFontSize(20)
      .setColor('#00ff22')
      .setInteractive();

    this.startGameText.on(
      'pointerdown',
      function () {
        this.scene.launch(CONSTANTS.SCENES.PLAYING);
        // this.startGameText.destroy();
        this.startGameText.visible = false;
      },
      this
    );

    this.startGameText.on('pointerover', () => {
      this.startGameText.setColor('#ff69b4');
      this.startGameText.setFontSize(21);
    });

    this.startGameText.on('pointerout', () => {
      this.startGameText.setColor('#00ff22');
      this.startGameText.setFontSize(20);
    });

    this.cameras.main.setBounds(0, 0, width * 10, height);
  }

  update() {
    const cam = this.cameras.main;
    const speed = 5;
    if (this.leftKey.isDown) {
      // move left
      cam.scrollX -= speed;
    } else if (this.rightKey.isDown) {
      // move right
      cam.scrollX += speed;
    }
  }
}
