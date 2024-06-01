// pages/canceled.js
import Link from 'next/link';

const Canceled = () => {
  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-2xl font-bold mb-6">Subscription Canceled</h1>
      <p className="mb-4">We&apos;re sorry to see you go. If you change your mind, you can subscribe again at any time.</p>
      <Link href="/billing">
        <a className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200">
          Try Again
        </a>
      </Link>
    </div>
  );
};

export default Canceled;