import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = () => (
  <div style={{ background: '#121212', color: 'lime', padding: '2rem', fontSize: '1.5rem' }}>
    ✅ Router working — Home Loaded
  </div>
);

const Fallback = () => (
  <div style={{ background: '#330000', color: 'red', padding: '2rem', fontSize: '1.5rem' }}>
    ⚠️ No route matched. This is fallback route.
  </div>
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Fallback />} />
    </Routes>
  );
};

export default App;
