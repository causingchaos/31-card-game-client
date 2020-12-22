import { html, LitElement } from 'lit-element';
import Phaser from 'phaser';
import Game from '../scenes/game.js';
//import BootScene from '../scenes/BootScene.js';
//import PreloaderScene from '../scenes/PreloaderScene.js';

export const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 800,
  scene: [
    Game,
  ]
};

const game = new Phaser.Game(config);

class CardGame extends LitElement{
  render() {
    return html`
    <style>
      h1{
        color: white;
      }
    </style>
    <h1>Multiplayer 31 Client</h1>
    <div id="phaser-example"></div>
    `;
  };
};

customElements.define('card-game', CardGame);