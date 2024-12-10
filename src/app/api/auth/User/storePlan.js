import connectDB from '@/lib/dbConnect';
import User from '@/models/User';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'POST') {
    const { username, email, selectedPlan } = req.body;

    if (!username || !email || !selectedPlan || !selectedPlan.planName || !selectedPlan.price) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    try {
      let user = await User.findOne({ email });
      if (user) {
        user.selectedPlan = selectedPlan;
        await user.save();
      } else {
        user = new User({ username, email, selectedPlan });
        await user.save();
      }

      return res.status(200).json({ message: 'Plan stored successfully', user });
    } catch (error) {
      return res.status(500).json({ error: 'Something went wrong' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
