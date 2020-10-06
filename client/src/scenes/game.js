import Player from '../helpers/player';
import { CONSTANTS } from '../Constants';

export default class Game extends Phaser.Scene {
  constructor() {
    super({
      key: CONSTANTS.SCENES.PLAYING,
      // active: true,
    });
  }

  preload() {
    // this.load.image('andyFlop', 'src/assets/andyFlop.png');
    this.load.atlas(
      'archer',
      'src/assets/goblinArcher/goblinArcherSprites.png',
      'src/assets/goblinArcher/goblinArcherSprites.json'
    );
    // this.load.image('clown', 'src/assets/clown.png');
  }

  create() {
    let self = this;
    this.cursors = this.input.keyboard.createCursorKeys();

    this.archer = this.add
      .sprite(
        100,
        this.scale.height - 150,
        'archer',
        'src/assets/goblinArcher/GoblinArcher-Sheet_01.png'
      )
      .setScale(0.3, 0.3);

    this.anims.create({
      key: 'walk',
      repeat: -1,
      frameRate: 10,
      frames: this.anims.generateFrameNames('archer', {
        prefix: 'GoblinArcher-Sheet_',
        suffix: '.png',
        start: 1,
        end: 8,
        zeroPad: 2,
      }),
    });

    this.archer.play('walk');

    // this.clown = this.physics.add.

    // console.log(this);

    // this.clown = this.physics.add
    //   .sprite(100, this.game.renderer.height - 200, 'clown')
    //   .setScale(0.4, 0.7)
    //   .setInteractive()
    //   .setCollideWorldBounds(true);

    // this.clown.setGravityY(10000);

    // this.flopper = this.add
    //   .image(this.game.renderer.width * 0.33, this.game.renderer.height / 2, 'andyFlop')
    //   .setInteractive();

    // this.physics.startSystem(Phaser.Physics.ARCADE);

    // this.physics.arcade.gravity.y = 100;

    this.input.setDraggable(this.clown);
    // this.input.setDraggable(this.flopper);

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });
  }

  update() {
    // this.clown.setVelocity(0);
    // if (this.cursors.left.isDown) this.clown.setVelocityX(-300);
    // if (this.cursors.right.isDown) this.clown.setVelocityX(300);
    // if (this.cursors.space.isDown) this.clown.setVelocityY(-1000);
  }
}
