import Player from '../helpers/player';
import { CONSTANTS } from '../Constants';

export default class Game extends Phaser.Scene {
  constructor() {
    super({
      key: CONSTANTS.SCENES.PLAYING,
    });
  }

  preload() {
    this.load.image('andyFlop', 'src/assets/andyFlop.png');
    this.load.image('clown', 'src/assets/clown.png');
  }

  create() {
    let self = this;

    // console.log(this);

    this.clown = this.add
      .image(this.game.renderer.width * 0.66, this.game.renderer.height / 2, 'clown')
      .setScale(0.4, 0.7)
      .setInteractive();

    this.flopper = this.add
      .image(this.game.renderer.width * 0.33, this.game.renderer.height / 2, 'andyFlop')
      .setInteractive();

    // this.physics.startSystem(Phaser.Physics.ARCADE);

    // this.physics.arcade.gravity.y = 100;

    this.input.setDraggable(this.clown);
    this.input.setDraggable(this.flopper);

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });
  }

  update() {}
}
