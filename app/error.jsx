'use client';

import { useEffect } from 'react';

const ErrorPage = () => {
  useEffect(() => {
    console.error('An error occurred!', error);
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>An error occurred!</h1>
      <p>Try Again Later</p>
    </div>
  );
};

export default ErrorPage;
