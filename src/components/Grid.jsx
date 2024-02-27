/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Sprite, Texture } from 'pixi.js';
import image from '../images/scratchCard.png';

const Grid = ({ app }) => {
  const numRows = 4;
  const numCols = 3;
  const gridSizeX = numCols * 150; 
  const gridSizeY = numRows * 150; 

  useEffect(() => {
    const grid = [];
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const startX = (windowWidth - gridSizeX) / 2;
    const startY = (windowHeight - gridSizeY) / 2;

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const x = startX + col * 150; 
        const y = startY + row * 150;
        const texture = Texture.from(image);
        const sprite = new Sprite(texture);
        sprite.anchor.set(0.5);
        sprite.position.set(x, y);
        sprite.interactive = true;
        sprite.on('pointerdown', () => {
          console.log(`Clicked image at index: ${row * numCols + col}`);
        });
        grid.push(sprite);
        app.stage.addChild(sprite);
      }
    }
    return () => {
      grid.forEach((sprite) => {
        app.stage.removeChild(sprite);
        sprite.destroy();
      });
    };
  }, [app, numRows, numCols, gridSizeX, gridSizeY]);

  return null;
};

export default Grid;
