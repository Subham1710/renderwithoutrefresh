//How to do render page  without refreshing:::


import React, { useState } from 'react';

function App() {
  const [content, setContent] = useState('');

  // Function to fetch and render the page content
  const renderPage = (url) => {
    fetch(url)
      .then(response => response.text())
      .then(html => {
        // Update the content state with the fetched HTML
        setContent(html);
      })
      .catch(error => {
        // Handle any errors that occur during the fetch
        console.error('Error:', error);
      });
  };

  // Example usage: render the initial page
  useEffect(() => {
    renderPage('initial-page.html');
  }, []);

  // Example usage: render a different page when a link is clicked
  const handleLinkClick = (event) => {
    event.preventDefault(); // Prevent the default link behavior

    const targetUrl = event.target.href;
    renderPage(targetUrl);
  };

  return (
    <div>
      <div id="content" dangerouslySetInnerHTML={{ __html: content }}></div>
      <a href="page1.html" onClick={handleLinkClick}>Page 1</a>
      <a href="page2.html" onClick={handleLinkClick}>Page 2</a>
    </div>
  );
}

export default App;
