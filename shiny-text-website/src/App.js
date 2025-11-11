import React from 'react';
import ShinyText from './components/ShinyText';

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to the Shiny Text Website</h1>
      <ShinyText 
        text="Just some shiny text!" 
        disabled={false} 
        speed={3} 
        className='custom-class' 
      />
    </div>
  );
};

export default App;