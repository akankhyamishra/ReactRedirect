import React, { useEffect } from 'react';
import '../App.css';

const DeepLinkRedirect = () => {
  useEffect(() => {
    const deepLinkUrl = 'myapp://open/?url=https%3A%2F%2Fmywebsite.com%2Fapp-deeplink';

    window.location.href = deepLinkUrl;

    const meta = document.createElement('meta');
    meta.httpEquiv = 'refresh';
    meta.content = `0; url=${deepLinkUrl}`;
    document.head.appendChild(meta);
  }, []);

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1 className="header-title">NeoICR</h1>
      </header>

      {/* Main Content */}
      <main className="main">
        <div className="content">
          <h1 className="content-title">Welcome to NeoICR</h1>
          <div className="underline"></div>
          <div className="loader-container">
            <div className="loader"></div>
          </div>
          <h3 className="content-subtitle">Redirecting to App...</h3>
          <p className="content-text">
            Please wait while we open the app. If nothing happens, ensure the app is installed.
          </p>
        </div>
      </main>
    </div>
  );
};

export default DeepLinkRedirect;
