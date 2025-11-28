import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactData {
  name: string;
  phone: string;
  email?: string;
  message?: string;
  language: string;
}

Deno.serve(async (req: Request) => {
  try {
    if (req.method === "OPTIONS") {
      return new Response(null, {
        status: 200,
        headers: corsHeaders,
      });
    }

    const contactData: ContactData = await req.json();

    const emailBody = `
New Contact Form Submission
=============================

Name: ${contactData.name}
Phone: ${contactData.phone}
Email: ${contactData.email || 'Not provided'}
Language: ${contactData.language}

Message:
${contactData.message || 'No message provided'}

=============================
Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `;

    const recipients = ['imperialsayan@gmail.com', 'roy956326@gmail.com'];

    const emailPromises = recipients.map(async (recipient) => {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        },
        body: JSON.stringify({
          from: 'Contact Form <onboarding@resend.dev>',
          to: recipient,
          subject: `New Contact Form Submission from ${contactData.name}`,
          text: emailBody,
        }),
      });

      if (!response.ok) {
        console.error(`Failed to send email to ${recipient}:`, await response.text());
      }
      
      return response.ok;
    });

    await Promise.all(emailPromises);

    return new Response(
      JSON.stringify({ success: true, message: 'Emails sent successfully' }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Internal server error' }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});