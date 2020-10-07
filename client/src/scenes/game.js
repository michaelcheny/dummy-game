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

    this.keyboard = this.input.keyboard.addKeys('W,A,S,D, SPACE');

    this.scout = this.physics.add
      .sprite(150, this.scale.height - 150, 'scout')
      .setScale(0.3, 0.3)
      .setInteractive()
      .setCollideWorldBounds(true);

    this.makeAnimations();
    // console.log(this.textures.get('scout').getFrameNames());

    this.scout.play('idle');

    window.scout = this.scout;
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
      repeat: 1,
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
      repeat: 1,
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
      repeat: 0,
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

  update(time, delta) {
    // this.scout.setVelocity(0);
    if (this.keyboard.D.isDown) {
      this.scout.play('walk', true);
      this.scout.setVelocityX(200);
    }
    if (this.keyboard.A.isDown) {
      this.scout.anims.playReverse('walk', true);
      this.scout.setVelocityX(-200);
    }
    if (this.keyboard.A.isUp && this.keyboard.D.isUp) {
      // not moving on X
      this.scout.setVelocityX(0);
    }
    if (this.keyboard.SPACE.isDown) {
      this.scout.play('attack', true);
    }

    if (this.keyboard.S.isDown) {
      this.scout.play('die', true);
      this.scout.setVelocityX(0);
    }

    // this.scout.play('idle');
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
