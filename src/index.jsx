// Bring React in to build a component.
import React from 'react';
// Import from react-dom the ability to create a root render
import { createRoot } from 'react-dom/client';
import ViewMap from './components/ViewMap.jsx';

const root = createRoot(document.getElementById('root'));

// Huzzah for jsx!
function App() {
  return (
    <div>
      <ViewMap />
    </div>
  );
}

root.render(<App />);
