// pages/billing.js
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router';
import { TinyLoader } from '@/components/utils/tiny-loader';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const Billing = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const { sessionId } = await res.json();

      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Subscribe to LawnLinkPro</h1>
      <p className="mb-4">Get access to all features for just $10 per month.</p>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200"
      >
        {loading ? <TinyLoader color="white" size={20} stroke={2} /> : 'Subscribe'}
      </button>
    </div>
  );
};

export default Billing;