import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    window.location.href = 'https://www.amazon.com/Generic-LEMURKIT-3D/dp/B0DPV2PYBP';
  }, []);

  return (
    <div className="App">
      <p>Redirecting to Amazon...</p>
    </div>
  );
}

export default App;
