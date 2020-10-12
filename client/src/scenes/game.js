import Player from '../helpers/player';
import { CONSTANTS } from '../Constants';

export default class Game extends Phaser.Scene {
  constructor() {
    super({
      key: CONSTANTS.SCENES.PLAYING,
      // active: true,
      // debug: true
    });
  }

  preload() {
    // this.load.atlas(
    //   'scout',
    //   'src/assets/goblinScout/sprites.png',
    //   'src/assets/goblinScout/sprites.json'
    // );
    this.load.image('arrow', 'src/assets/goblinArcher/Arrow.png');

    this.load.spritesheet('minotaur', 'src/assets/minotaur_spritesheet.png', {
      frameWidth: 95.5,
      frameHeight: 96,
    });

    this.load.spritesheet('archer', 'src/assets/goblinArcher/GoblinArcher-Sheet.png', {
      frameWidth: 600,
      frameHeight: 500,
    });
  }

  create() {
    // let self = this;

    this.keyboard = this.input.keyboard.addKeys('W,A,S,D, SPACE');

    let customBounds = new Phaser.Geom.Rectangle(20, 20, 150, 0);

    let group = this.physics.add.group({
      key: '',
    });

    this.archer = this.physics.add
      .sprite(350, this.scale.height - 150, 'archer')
      .setScale(0.3, 0.3)
      .setInteractive()
      .setCollideWorldBounds(true);

    // this.scout = this.physics.add
    //   .sprite(150, this.scale.height - 150, 'scout')
    //   .setScale(0.3, 0.3)
    //   .setInteractive()
    //   .setCollideWorldBounds(true);

    this.minotaur = this.physics.add
      .sprite(800, this.scale.height - 150, 'minotaur')
      .setScale(2, 2)
      .setOrigin(0, 1)
      .setInteractive()
      .setCollideWorldBounds(true);

    this.makeAnimations();

    // if (this.input.activePointer.isDown) {
    //   this.arrow = this.add.sprite(
    //     this.input.activePointer.x,
    //     this.input.activePointer.y,
    //     'arrow',
    //     'src/assets/goblinArcher/Arrow.png'
    //   );
    // }

    this.input.on('pointermove', (pointer) => {
      console.log(pointer.x, pointer.y);
    });

    // if (pointer.isDown) {
    //   this.arrow = this.add.sprite(
    //     pointer.x,
    //     pointer.y,
    //     'arrow',
    //     'src/assets/goblinArcher/Arrow.png'
    //   );

    // }

    // this.scout.play('idle');
    this.minotaur.play('mIdle');
    this.archer.play('archerIdle');

    // this.input;

    this.physics.world.addCollider(this.minotaur, this.arrow, (minotaur, arrow) => {
      minotaur.destroy();
      arrow.destroy();
    });

    window.archer = this.archer;
    window.minotaur = this.minotaur;
  }

  update(time, delta) {
    // this.scout.setVelocity(0)

    let mousedownID = -1; //Global ID of mouse down interval

    // function mouseup(event) {
    //   if (mousedownID != -1) {
    //     //Only stop if exists
    //     clearInterval(mousedownID);
    //     mousedownID = -1;
    //   }
    // }
    if (this.input.activePointer.isDown) {
      this.archer.play('archerAttack', true);
      this.minotaur.play('mAttack4', true);
      ////////////////

      // if (mousedownID == -1) {
      //   mousedownID =
      // }
      setInterval(whilemousedown, 200 /*execute every 100ms*/);
      //Prevent multimple loops!

      const whilemousedown = () => {
        /*here put your code*/
        this.arrow = this.physics.add
          .sprite(
            // this.input.activePointer.x,
            // this.input.activePointer.y,
            this.archer.x + 100,
            this.archer.y,
            'arrow',
            'src/assets/goblinArcher/Arrow.png'
          )
          .setScale(0.15, 0.15)
          .setVelocityX(1500);
        // .setVelocityY(-100);
        // .setGravity(0, 0);
        console.log('shot');
        this.arrow.body.allowGravity = false;
      };
      //////////////////////
    } else if (this.keyboard.D.isDown) {
      // this.scout.play('walk', true);
      // this.scout.setVelocityX(200);
      // this.scout.flipX = false;

      this.minotaur.play('move', true);
      this.minotaur.setVelocityX(200);
      // this.minotaur.flipX = false;

      this.archer.play('archerWalk', true);
      this.archer.setVelocityX(200);
    } else if (this.keyboard.A.isDown) {
      // this.scout.flipX = true;
      // this.scout.play('walk', true);
      // this.scout.setVelocityX(-200);

      this.minotaur.play('move', true);
      this.minotaur.setVelocityX(-200);

      this.archer.play('archerWalk', true);
      this.archer.setVelocityX(-200);
    }
    if (this.keyboard.SPACE.isDown) {
      // this.scout.play('attack', true);
      // this.minotaur.play('mAttack1', true);
    }
    if (
      this.input.on('pointermove', (pointer) => {
        // if (pointer.isDown) {
        //   this.archer.play('archerAttack', true);
        // }

        if (pointer.x > this.minotaur.x) {
          this.minotaur.flipX = false;
        } else if (pointer.x < this.minotaur.x) {
          this.minotaur.flipX = true;
        } else if (pointer.isDown) this.minotaur.play('mAttack4', true);

        if (pointer.x > this.archer.x) {
          this.archer.flipX = false;
        } else if (pointer.x < this.archer.x) {
          this.archer.flipX = true;
        }
      })
    )
      if (
        !this.keyboard.W.isDown &&
        !this.keyboard.A.isDown &&
        !this.keyboard.S.isDown &&
        !this.keyboard.D.isDown &&
        !this.keyboard.SPACE.isDown &&
        !this.input.activePointer.isDown
      ) {
        this.minotaur.play('mIdle', true);
        this.minotaur.setVelocityX(0);
        this.archer.play('archerIdle', true);
        this.archer.setVelocityX(0);
      }
  
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

    // ARCHERRRRRRR
    this.anims.create({
      key: 'archerIdle',
      frames: this.anims.generateFrameNumbers('archer', { start: 0, end: 7 }),
      frameRate: 8,
      repeat: -1,
    });

    this.anims.create({
      key: 'archerAttack',
      frames: this.anims.generateFrameNumbers('archer', { start: 9, end: 17 }),
      frameRate: 8,
    });

    this.anims.create({
      key: 'archerWalk',
      frames: this.anims.generateFrameNumbers('archer', { start: 27, end: 32 }),
      frameRate: 8,
    });
  }
}
