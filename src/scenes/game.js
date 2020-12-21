export default class Game extends Phaser.Scene {
  constructor() {
    super({
      key: 'Game'
    });
  };

  preload() {

  }

  create() {
    let self = this;
    this.total = 0;

    this.dealText = this.add.text(350, 10, ['DEAL CARDS'])
  }

  update() {

  }
};