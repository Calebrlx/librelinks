// pages/api/create-billing-portal-session.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { customer_id } = req.body;

  try {
    const session = await stripe.billingPortal.sessions.create({
      customer: customer_id,
      return_url: `${req.headers.origin}/settings`,
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};