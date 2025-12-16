import { GameScene } from './scenes/GameScene.js';

const config = {
    type: Phaser.AUTO,
    width: 448,
    height: 496,
    parent: 'game-container',
    backgroundColor: '#000000',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [GameScene]
};

const game = new Phaser.Game(config);

