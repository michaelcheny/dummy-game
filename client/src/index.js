import Phaser from 'phaser';
import Game from './scenes/game';
import Title from './scenes/title';
// import logoImg from "./assets/logo.png";

const config = {
  type: Phaser.AUTO,
  // parent: 'phaser-example',
  width: 1400,
  height: 1200,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 8000 },
      debug: true,
    },
  },
  scene: [Title, Game],
};

const game = new Phaser.Game(config);

// console.log(game);
