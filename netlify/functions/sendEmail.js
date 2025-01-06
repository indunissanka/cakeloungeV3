exports.handler = async (event) => {
      if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
      }

      try {
        const { to, subject, design, copy } = JSON.parse(event.body);

        await fetch('https://api.netlify.com/api/v1/sites/YOUR_SITE_ID/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NETLIFY_AUTH_TOKEN}`,
          },
          body: JSON.stringify({
            to: [to, copy],
            subject: subject,
            html: design,
          }),
        });

        return {
          statusCode: 200,
          body: JSON.stringify({ message: 'Email sent successfully' }),
        };
      } catch (error) {
        console.error('Error sending email:', error);
        return {
          statusCode: 500,
          body: JSON.stringify({ message: 'Failed to send email', error: error.message }),
        };
      }
    };
