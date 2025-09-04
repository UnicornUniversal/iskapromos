import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req) {
    const { email } = await req.json();
    const sheetUrl = process.env.NEXT_PUBLIC_HOMES_SHEET_URL;
  
    try {
      await axios.post(sheetUrl, { email });
      return NextResponse.json({ message: 'Email submitted successfully' }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: 'Failed to submit email', error: error.message }, { status: 500 });
    }
}


