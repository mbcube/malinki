export async function onRequestPost(context: any) {
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    };

    try {
        // Debug: Log the entire context structure
        console.log('Env:', JSON.stringify(context.env));

        const env = context.env;

        if (!env?.RESEND_API_KEY) {
            return new Response(
                JSON.stringify({
                    success: false,
                    error: 'API key not configured',
                    debug: {
                        contextKeys: Object.keys(context),
                        envKeys: Object.keys(env || {}),
                        envType: typeof env
                    }
                }),
                { status: 500, headers }
            );
        }

        const formData = await context.request.formData();
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string || 'Not provided';
        const message = formData.get('message') as string;

        console.log('Sending email via Resend API');

        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${env.RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'Malinki Contact <notifications@malinki.ca>',
                to: 'mouad@mbcubeconsulting.ca',
                reply_to: email,
                subject: `New message from ${name}`,
                html: `
                    <h2>New Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message.replace(/\n/g, '<br>')}</p>
                `,
            }),
        });

        const result = await response.json();
        console.log('Resend response:', JSON.stringify(result));

        if (!response.ok) {
            return new Response(
                JSON.stringify({ success: false, error: result.message || 'Failed to send email' }),
                { status: 500, headers }
            );
        }

        return new Response(
            JSON.stringify({ success: true, id: result.id }),
            { status: 200, headers }
        );

    } catch (err) {
        console.error('Unexpected error:', err);
        return new Response(
            JSON.stringify({ success: false, error: String(err) }),
            { status: 500, headers }
        );
    }
}
