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

    this.load.spritesheet('minotaur', 'src/assets/minotaur_spritesheet.png', {
      frameWidth: 95.5,
      frameHeight: 96,
    });
  }

  create() {
    // let self = this;

    this.keyboard = this.input.keyboard.addKeys('W,A,S,D, SPACE');

    this.scout = this.physics.add
      .sprite(150, this.scale.height - 150, 'scout')
      .setScale(0.3, 0.3)
      .setInteractive()
      .setCollideWorldBounds(true);

    this.minotaur = this.physics.add
      .sprite(800, this.scale.height - 150, 'minotaur')
      .setScale(2, 2)
      .setOrigin(0, 1)
      .setInteractive()
      .setCollideWorldBounds(true);

    this.makeAnimations();
    // console.log(this.textures.get('scout').getFrameNames());

    this.scout.play('idle');
    this.minotaur.play('mIdle');

    window.scout = this.scout;
    window.minotaur = this.minotaur;
  }

  makeAnimations() {
    // FOR GOBLIN
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

    // FOIR MINOTAIRUR
    // idle
    this.anims.create({
      key: 'mIdle',
      frames: this.anims.generateFrameNumbers('minotaur', { start: 0, end: 4 }),
      frameRate: 8,
      repeat: -1,
    });
    // move
    this.anims.create({
      key: 'move',
      frames: this.anims.generateFrameNumbers('minotaur', { start: 1, end: 4 }),
      frameRate: 8,
      // repeat: 1,
    });
    // attack
    this.anims.create({
      key: 'mAttack1',
      frames: this.anims.generateFrameNumbers('minotaur', { start: 30, end: 38 }),
      frameRate: 8,
      // repeat: 1,
    });
    // spin attack
    this.anims.create({
      key: 'mAttack4',
      frames: this.anims.generateFrameNumbers('minotaur', { start: 60, end: 68 }),
      frameRate: 8,
      // repeat: 1,
    });
  }

  update(time, delta) {
    // this.scout.setVelocity(0);

    if (
      !this.keyboard.W.isDown &&
      !this.keyboard.A.isDown &&
      !this.keyboard.S.isDown &&
      !this.keyboard.D.isDown &&
      !this.keyboard.SPACE.isDown
    ) {
      this.minotaur.play('mIdle', true);
      this.scout.play('idle', true);
      this.scout.setVelocityX(0);
      this.minotaur.setVelocityX(0);
    }
    // if (this.keyboard.SPACE.isDown) {
    //   this.scout.play('attack', true);
    //   this.minotaur.play('mAttack1', true);
    // }

    if (this.keyboard.D.isDown) {
      this.scout.play('walk', true);
      this.scout.setVelocityX(200);
      this.scout.flipX = false;
      this.minotaur.play('move', true);
      this.minotaur.setVelocityX(200);
      this.minotaur.flipX = false;
    } else if (this.keyboard.A.isDown) {
      this.scout.flipX = true;
      this.scout.play('walk', true);
      this.scout.setVelocityX(-200);

      // this.minotaur.play('mAttack4', true);
      this.minotaur.flipX = true;
      this.minotaur.play('move', true);
      this.minotaur.setVelocityX(-200);
    } else if (this.keyboard.SPACE.isDown) {
      this.scout.play('attack', true);
      this.minotaur.play('mAttack1', true);
    }
    // else {
    //   this.minotaur.play('mIdle', true);
    //   this.scout.play('idle', true);
    // }

    // if (this.keyboard.A.isUp && this.keyboard.D.isUp) {
    //   // not moving on X
    //   this.scout.setVelocityX(0);
    //   this.minotaur.setVelocityX(0);
    // }

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
