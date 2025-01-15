import React, { useEffect } from 'react';
import '../App.css';

const DeepLinkRedirect = () => {

  console.log("DeepLinkRedirect")
  useEffect(() => {
    const deepLinkUrl = 'neodisha://opensdk/?url=https%3A%2F%2Fmywebsite.com%2Fapp-deeplink';
    const fallbackUrl = 'http://192.168.29.246:5173/my-app/'; 

    window.location.href = deepLinkUrl;

    const meta = document.createElement('meta');
    meta.httpEquiv = 'refresh';
    meta.content = `0; url=${deepLinkUrl}`;
    document.head.appendChild(meta);

    setTimeout(() => {
      window.location.href = fallbackUrl;
    }, 5000); 

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
