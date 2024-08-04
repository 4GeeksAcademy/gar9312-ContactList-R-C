//import react into the bundle
import React from 'react';
import { createRoot } from 'react-dom/client';

//include your index.css file into the bundle
import "../styles/index.css";

//import your own components
import Layout from './layout.js';

// Make sure the root element exists in your HTML
const rootElement = document.querySelector("#app");
if (!rootElement) {
    throw new Error('The root element with id "app" does not exist.');
}

// Create the root and render your react application
const root = createRoot(rootElement);
root.render(<Layout />);

