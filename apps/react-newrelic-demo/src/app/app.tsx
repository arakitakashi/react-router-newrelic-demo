// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import React from 'react';

export function App() {
  // 意図的にTypeError: Failed to fetchを発生させる
  React.useEffect(() => {
    const triggerFetchError = async () => {
      // 存在しないURLにフェッチリクエストを送信
      const response = await fetch('https://non-existent-domain-12345.com/api');
      const data = await response.json();
      console.log(data);
    };

    triggerFetchError();
  }, []);

  return (
    <div>
      <NxWelcome title="react-newrelic-demo" />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
