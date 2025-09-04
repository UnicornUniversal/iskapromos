import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(req) {
  // console.log("Email submitted");
  const { email } = await req.json();
  const sheetUrl = process.env.NEXT_PUBLIC_SHOP_SHEET_URL;

  try {
    await axios.post(sheetUrl, { email });
    return NextResponse.json({ message: 'Email submitted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to submit email', error: error.message }, { status: 500 });
  }
}
