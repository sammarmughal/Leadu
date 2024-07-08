// pages/404.js
import Link from 'next/link';

export default function Custom404() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Looks like you've followed a broken link or entered a URL that doesn't exist on this site.</p>
      <Link href="/">
        <a>Go back to Home</a>
      </Link>
    </div>
  );
}