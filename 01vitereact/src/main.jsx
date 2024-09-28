import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// A custom functional component that renders a title
function MyApp(){
  return (
    <div>
      <h1>Custom App | Chai</h1>
    </div>
  );
}

// Create a React element using React.createElement
const anotherElement = React.createElement(
  'a', // The type of element to create (anchor tag)
  {
    href: 'https://google.com', // Link to Google
    target: '_blank' // Open link in a new tab
  },
  'Click me bsdk to visit Google' // Text to display inside the link
);

// Create another React element using React.createElement
const reactElement = React.createElement(
  'a', // The type of element to create (anchor tag)
  { href: "https://google.com", target: '_blank' }, // Link props
  'Click here to visit Google do' // Text to display inside the link
);

// Render the elements to the root DOM node
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {reactElement} {/* Render the first anchor element */}
    {anotherElement} {/* Render the second anchor element */}
    <App /> {/* Render the main App component */}
  </>
);
