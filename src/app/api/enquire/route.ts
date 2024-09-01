import type { NextRequest } from 'next/server';
import { saveEnquiry } from '../../supabaseClient';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    const result = await saveEnquiry(formData);

    if (result.success) {
      return new Response(JSON.stringify({ message: 'Enquiry submitted successfully!' }), {
        status: 200,
      });
    } else {
      return new Response(JSON.stringify({ error: result.message }), {
        status: 500,
      });
    }
  } catch (error) {
    console.error('Error handling request:', error);
    return new Response(JSON.stringify({ error: 'Error saving enquiry' }), {
      status: 500,
    });
  }
}
