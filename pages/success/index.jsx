// pages/success.js
import Link from 'next/link';

const Success = () => {
  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-2xl font-bold mb-6">Subscription Successful</h1>
      <p className="mb-4">Thank you for subscribing to LawnLinkPro! Your subscription was successful.</p>
      <Link href="/admin">
        <a className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200">
          Go to Dashboard
        </a>
      </Link>
    </div>
  );
};

export default Success;