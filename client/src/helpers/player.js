export default class Player {
  constructor(scene) {
    this.render = (x, y, sprite) => {
      let player = scene.add.image(x, y, sprite).setScale(0.5, 0.5).setInteractive();
      return player;
    };
  }
}
