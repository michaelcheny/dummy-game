import Phaser from 'phaser';
import Game from './scenes/game';
import Title from './scenes/title';
// import logoImg from "./assets/logo.png";

const config = {
  type: Phaser.AUTO,
  // parent: 'phaser-example',
  width: 1200,
  height: 1020,
  scene: [Title, Game],
};

const game = new Phaser.Game(config);

// console.log(game);
