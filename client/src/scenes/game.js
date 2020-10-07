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
    this.load.atlas(
      'scout',
      'src/assets/goblinScout/sprites.png',
      'src/assets/goblinScout/sprites.json'
    );

    // this.load.atlas(
    //   'minotaur',
    //   'src/assets/minotaur/sprites.png',
    //   'src/assets/minotaur/sprites.json'
    // );
    // this.load.atlas(
    //   'archer',
    //   'src/assets/goblinArcher/goblinArcherSprites.png',
    //   'src/assets/goblinArcher/goblinArcherSprites.json'
    // );
    // this.load.image('clown', 'src/assets/clown.png');
  }

  create() {
    // let self = this;
    this.cursors = this.input.keyboard.createCursorKeys();

    this.upKey = this.input.keyboard.addKey('w');
    this.downKey = this.input.keyboard.addKey('s');
    this.leftKey = this.input.keyboard.addKey('a');
    this.rightKey = this.input.keyboard.addKey('d');

    this.scout = this.add
      .sprite(150, this.scale.height - 150, 'scout')
      .setScale(0.3, 0.3)
      .setInteractive();
    // .setCollideWorldBounds(true);

    this.makeAnimations();
    console.log(this.textures.get('scout').getFrameNames());

    this.scout.play('idle');
    // this.minotaur = this.add
    //   .sprite(
    //     150,
    //     this.scale.height - 150,
    //     'minotaur',
    //     'src/assets/minotaur/Minotaur - Sprite Sheet_01.png'
    //   )
    //   .setScale(3, 3)
    //   .setInteractive()
    //   .setCollideWorldBounds(true);

    // this.anims.create({
    //   key: 'walk',
    //   repeat: -1,
    //   frameRate: 10,
    //   frames: this.anims.generateFrameNames('minotaur', {
    //     prefix: 'Minotaur - Sprite Sheet_',
    //     suffix: '.png',
    //     start: 6,
    //     end: 13,
    //     zeroPad: 2,
    //   }),
    // });

    // this.minotaur.play('idle');

    // this.archer = this.physics.add
    //   .sprite(
    //     100,
    //     this.scale.height - 150,
    //     'archer',
    //     'src/assets/goblinArcher/GoblinArcher-Sheet_01.png'
    //   )
    //   .setScale(0.3, 0.3)
    //   .setInteractive()
    //   .setCollideWorldBounds(true);

    // this.anims.create({
    //   key: 'idle',
    //   repeat: -1,
    //   frameRate: 10,
    //   frames: this.anims.generateFrameNames('archer', {
    //     prefix: 'GoblinArcher-Sheet_',
    //     suffix: '.png',
    //     start: 1,
    //     end: 8,
    //     zeroPad: 2,
    //   }),
    // });

    // this.anims.create({
    //   key: 'walk',
    //   repeat: -1,
    //   frameRate: 10,
    //   frames: this.anims.generateFrameNames('archer', {
    //     prefix: 'GoblinArcher-Sheet_',
    //     suffix: '.png',
    //     start: 22,
    //     end: 27,
    //     zeroPad: 2,
    //   }),
    // });

    // this.anims.create({
    //   key: 'receive damage',
    //   repeat: -1,
    //   frameRate: 10,
    //   frames: this.anims.generateFrameNames('archer', {
    //     prefix: 'GoblinArcher-Sheet_',
    //     suffix: '.png',
    //     start: 18,
    //     end: 21,
    //     zeroPad: 2,
    //   }),
    // });
    // this.anims.create({
    //   key: 'die',
    //   repeat: 10,
    //   frameRate: 10,
    //   frames: this.anims.generateFrameNames('archer', {
    //     prefix: 'GoblinArcher-Sheet_',
    //     suffix: '.png',
    //     start: 27,
    //     end: 36,
    //     zeroPad: 2,
    //   }),
    // });

    // this.archer.play('idle');

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

    // this.input.setDraggable(this.clown);
    // this.input.setDraggable(this.flopper);

    // this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
    //   gameObject.x = dragX;
    //   gameObject.y = dragY;
    // });
  }

  makeAnimations() {
    // idle
    this.anims.create({
      key: 'idle',
      repeat: -1,
      frameRate: 7,
      frames: this.anims.generateFrameNames('scout', {
        start: 1,
        end: 8,
        zeroPad: 2,
        prefix: 'goblinScout_idle_',
        suffix: '.png',
      }),
    });

    // attack
    this.anims.create({
      key: 'attack',
      repeat: -1,
      frameRate: 7,
      frames: this.anims.generateFrameNames('scout', {
        start: 1,
        end: 6,
        zeroPad: 2,
        prefix: 'goblinScout_attack_',
        suffix: '.png',
      }),
    });

    // walk
    this.anims.create({
      key: 'walk',
      repeat: -1,
      frameRate: 7,
      frames: this.anims.generateFrameNames('scout', {
        start: 1,
        end: 6,
        zeroPad: 2,
        prefix: 'goblinScout_walk_',
        suffix: '.png',
      }),
    });

    // hurt
    this.anims.create({
      key: 'hurt',
      repeat: -1,
      frameRate: 7,
      frames: this.anims.generateFrameNames('scout', {
        start: 1,
        end: 4,
        zeroPad: 2,
        prefix: 'goblinScout_hurt_',
        suffix: '.png',
      }),
    });

    // die
    this.anims.create({
      key: 'die',
      repeat: -1,
      frameRate: 7,
      frames: this.anims.generateFrameNames('scout', {
        start: 1,
        end: 9,
        zeroPad: 2,
        prefix: 'goblinScout_die_',
        suffix: '.png',
      }),
    });
  }

  update() {
    // this.clown.setVelocity(0);
    // if (this.cursors.left.isDown) this.clown.setVelocityX(-300);
    // if (this.cursors.right.isDown) this.clown.setVelocityX(300);
    // if (this.cursors.space.isDown) this.clown.setVelocityY(-1000);
    // console.log(this.archer.height);
    // this.archer.play('idle');
    // this.archer.setVelocity(0);
    // if (this.leftKey.isDown) {
    //   this.archer.setVelocityX(-300);
    //   this.archer.play('walk', true, 5);
    // }
    // // if (this.leftKey.isUp) {
    // //   this.archer.play('idle', true, 5);
    // // }
    // if (this.rightKey.isDown) {
    //   this.archer.setVelocityX(300);
    //   this.archer.play('walk', true, 5);
    // this.minotaur.play('walk', true, 10);
    // }
    // if (this.rightKey.isUp) {
    //   this.archer.play('idle', true, 5);
    // }
    // if (this.upKey.isDown && this.archer.y > 900) this.archer.setVelocityY(-1000);
    // // if (this.downKey.isDown) this.archer.setVelocityY(1000);
    // if (this.downKey.isDown) console.log(this.archer);
    // if (this.cursors.up.isDown) {
    //   this.archer.play('receive damage', true, 10);
    // }
    // if (this.cursors.down.isDown) {
    //   this.archer.play('die');
    // }
  }
}
