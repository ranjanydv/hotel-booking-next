import { NextResponse } from 'next/server';
import getCurrentUser from '@/app/actions/getCurrentUser';
import axios from 'axios';

export async function POST(
  request: Request
) {
  const currentUser = await getCurrentUser();
  console.log('==============================Khalti');

  if (!currentUser) {
    console.log('========== No User');
    return NextResponse.error();
  }

  const body = await request.json();
  const payload  = body;
  console.log("-----------",payload);
  'use client';
  const khaltiResponse = await axios.post(
    'https://a.khalti.com/api/v2/epayment/initiate/',
    payload,
    {
      headers: {
        Authorization: 'Key 44ec79f3318345abb14c41eefb7c2d73',
        'Content-Type': 'application/json',
      },
    }
  );
  if (khaltiResponse) {
    return NextResponse.json({ success: true, data: khaltiResponse?.data });
  }
  return NextResponse.json({ success: false, message: 'Error processing payment' });
}
