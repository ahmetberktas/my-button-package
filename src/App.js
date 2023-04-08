import React from 'react';
import './App.css';
import Button from './Button'; // "Button" bileşenini import ettik.

const App = () => {
  return (
    <div>
      <Button type="primary" onClick={() => console.log('Primary button clicked')}>
        Primary Button
      </Button>
      <Button type="default" onClick={() => console.log('Default button clicked')}>
        Default Button
      </Button>
      <Button type="dashed" onClick={() => console.log('Dashed button clicked')}>
        Dashed Button
      </Button>
      <Button type="text" onClick={() => console.log('Text button clicked')}>
        Text Button
      </Button>
      <Button type="link" onClick={() => console.log('Link button clicked')}>
        Link Button
      </Button>
    </div>
  );
};

export default App;