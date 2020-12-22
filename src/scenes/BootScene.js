export default class BootScene extends Phaser.Scene {
  constructor () {
    super('Boot');
  }

  preload() {
    this.load.image('logo', 'src/assets/images/logo.png');
  }

  create() {
    var dealText2 = this.add.text(500, 50, ['Fuck'])
    this.scene.start('Preloader'); // comment out this and dealer text loads
    //this.dealText = this.add.text(350, 10, ['DEAL CARDS'])
    // https://phasertutorials.com/creating-a-phaser-3-template-part-1/
  }
}