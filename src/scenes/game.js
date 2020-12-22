import BootScene from '../scenes/BootScene.js';
import PreloaderScene from '../scenes/PreloaderScene.js';

export default class Game extends Phaser.Scene {
  constructor() {
    super({
      key: 'Game',
    });
  };

  preload() {
    /*
    this.load.image('cardBack', 'src/assets/red_joker.svg');
    this.load.image('cardFront2', 'src/assets/2_of_clubs.svg');
    this.load.image('cardFront3', 'src/assets/3_of_clubs.svg');
    this.load.image('cardFront4', 'src/assets/4_of_clubs.svg');
    this.load.image('cardFront5', 'src/assets/5_of_clubs.svg');
    this.load.image('cardFront6', 'src/assets/5_of_clubs.svg');
    this.load.image('brand', 'src/assets/images/logo.png');
    this.load.image('loading', 'src/assets/images/loading.png');
    this.load.image('stars', 'src/assets/images/stars.jpg');
    */
  }

  create() {
    let self = this;
    //this.isPlayerA = false;
    //this.opponentCards = [];
    //this.totalCards = 52;
    //self.startGameText.destroy();
    self.scene.add('Boot', BootScene);
    self.scene.add('Preloader', PreloaderScene);
    self.scene.start('Boot')
    //this.dealText = this.add.text(450, 10, ['DEAL CARDS'])
  }

  update() {

  }

};

