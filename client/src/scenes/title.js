import Game from './game';
import Player from '../helpers/player';
import { CONSTANTS } from '../constants';

export default class Title extends Phaser.Scene {
  constructor() {
    super({
      key: CONSTANTS.SCENES.MENU,
    });
  }

  preload() {
    // this.load.image('andyFlop', 'src/assets/andyFlop.png');
    // this.load.image('clown', 'src/assets/clown.png');
    this.load.image('layer0', 'src/assets/background/Layer_0000_9.png');
    this.load.image('layer1', 'src/assets/background/Layer_0001_8.png');
    this.load.image('layer2', 'src/assets/background/Layer_0002_7.png');
    this.load.image('layer3', 'src/assets/background/Layer_0003_6.png');
    this.load.image('layer4', 'src/assets/background/Layer_0004_lights.png');
    this.load.image('layer5', 'src/assets/background/Layer_0005_5.png');
    this.load.image('layer6', 'src/assets/background/Layer_0006_4.png');
    this.load.image('layer7', 'src/assets/background/Layer_0007_lights.png');
    this.load.image('layer8', 'src/assets/background/Layer_0008_3.png');
    this.load.image('layer9', 'src/assets/background/Layer_0009_2.png');
    this.load.image('layer10', 'src/assets/background/Layer_0010_1.png');
  }

  create() {
    let self = this;

    this.background = this.add
      .image(0, 0, 'layer0')
      .setOrigin(0)
      .setDepth(10)
      .setScale(1.3, 1.3);
    this.add.image(0, 0, 'layer1').setOrigin(0).setDepth(9).setScale(1.3, 1.3);
    this.add.image(0, 0, 'layer2').setOrigin(0).setDepth(8).setScale(1.3, 1.3);
    this.add.image(0, 0, 'layer3').setOrigin(0).setDepth(7).setScale(1.3, 1.3);
    this.add.image(0, 0, 'layer4').setOrigin(0).setDepth(6).setScale(1.3, 1.3);
    this.add.image(0, 0, 'layer5').setOrigin(0).setDepth(5).setScale(1.3, 1.3);
    this.add.image(0, 0, 'layer6').setOrigin(0).setDepth(4).setScale(1.3, 1.3);
    this.add.image(0, 0, 'layer7').setOrigin(0).setDepth(3).setScale(1.3, 1.3);
    this.add.image(0, 0, 'layer8').setOrigin(0).setDepth(2).setScale(1.3, 1.3);
    this.add.image(0, 0, 'layer9').setOrigin(0).setDepth(1).setScale(1.3, 1.3);
    this.add.image(0, 0, 'layer10').setOrigin(0).setDepth(0).setScale(1.3, 1.3);

    // this.clown = this.add.image(400, 400, 'clown').setScale(0.5, 0.5).setInteractive();

    // this.doThis = () => {};
    // this.input.setDraggable(this.clown);

    this.startGameText = this.add
      .text(this.game.renderer.width / 2, this.game.renderer.height * 0.55, ['Play'])
      .setDepth(11)
      .setFontSize(20)
      // .setFontFamily('Bold')
      .setColor('#00ff22')
      .setInteractive();

    this.startGameText.on(
      'pointerdown',
      function () {
        // self.doThis();
        this.scene.start(CONSTANTS.SCENES.PLAYING);
      },
      this
    );

    this.startGameText.on('pointerover', () => {
      self.startGameText.setColor('#ff69b4');
      self.startGameText.setFontSize(21);
    });

    this.startGameText.on('pointerout', () => {
      self.startGameText.setColor('#00ff22');
      self.startGameText.setFontSize(20);
    });

    // this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
    //   gameObject.x = dragX;
    //   gameObject.y = dragY;
    // });
  }

  update() {
    this.background.x -= 0.1;
  }
}
