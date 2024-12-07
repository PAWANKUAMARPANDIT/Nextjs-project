import bcrypt from 'bcrypt';
import User from '@/models/User';
import { NextResponse } from 'next/server';
export const authenticateUser = async (email, password) => {
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: 'User doe not exists' },
        { status: 400 }
      );;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      return {
        id: user._id,
        email: user.email,
        username: user.username,
        buyingOption: user.buyingOption || false,
      };
    }

    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};
