export default class PreloaderScene extends Phaser.Scene{
  constructor() {
    super('Preloader');
  }
  preload() {
     this.add.image(400, 200, 'logo');

     var progressBar = this.add.graphics();
     var progressBox = this.add.graphics();
     progressBar.fillStyle(0x222222, 0.8);
     progressBox.fillRect(240, 270, 320, 50);
     var dealText = this.add.text(350, 10, ['DEAL CARDS'])
  }
  create() {

  }
}