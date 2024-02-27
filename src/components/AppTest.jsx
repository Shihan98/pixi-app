import React, { useEffect, useState, useRef } from 'react';
import { Application, Texture, TilingSprite } from 'pixi.js';
import Grid from './Grid';
import backgroundImage from '../images/background.png';

const AppTest = () => {
  const [app, setApp] = useState(null);
  const appContainerRef = useRef(null);

  useEffect(() => {
    const newApp = new Application({ width: window.innerWidth, height: window.innerHeight });
    setApp(newApp);

    return () => {
      newApp.destroy();
    };
  }, []);

  useEffect(() => {
    if (app) {
      const backgroundTexture = Texture.from(backgroundImage);
      const background = new TilingSprite(backgroundTexture, window.innerWidth, window.innerHeight);
      app.stage.addChild(background);
      appContainerRef.current.appendChild(app.view);
    }
  }, [app]);

  return (
    <div className='app'>
      <div ref={appContainerRef}>
        {app && <Grid app={app} />}
      </div>
    </div>
  );
};

export default AppTest;
