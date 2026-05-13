// Vercel Serverless Function: /api/send-resume
// Sends the uploaded resume to nick@corversetalent.com via Web3Forms

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { fileName, fileBase64, mimeType } = req.body;

    if (!fileName || !fileBase64) {
      return res.status(400).json({ error: 'Missing fileName or fileBase64' });
    }

    // Vercel exposes env vars set in the dashboard via process.env
    // Check both the VITE_ prefixed version and a plain version
    const accessKey = process.env.VITE_WEB3FORMS_KEY || process.env.WEB3FORMS_KEY;
    if (!accessKey) {
      console.error('Web3Forms key not found in environment');
      return res.status(500).json({ error: 'Email service not configured' });
    }

    // First try: send with the file as a multipart/form-data attachment
    try {
      const fileBuffer = Buffer.from(fileBase64, 'base64');
      const blob = new Blob([fileBuffer], { type: mimeType || 'application/pdf' });

      const formData = new FormData();
      formData.append('access_key', accessKey);
      formData.append('subject', 'New Resume Submitted via AI Matcher');
      formData.append('from_name', 'Corverse Talent AI Matcher');
      formData.append('message', `A candidate uploaded their resume (${fileName}) for AI assessment via the Corverse Talent website.`);
      formData.append('attachment', blob, fileName);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        return res.status(200).json({ success: true, message: 'Resume sent with attachment' });
      }
      console.warn('Attachment send failed, trying fallback:', result);
    } catch (attachErr) {
      console.warn('Attachment approach failed:', attachErr.message);
    }

    // Fallback: send as JSON with resume content encoded in the message body
    const fallbackResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New Resume Submitted: ${fileName}`,
        from_name: 'Corverse Talent AI Matcher',
        message: [
          'A candidate uploaded their resume for AI assessment on the Corverse Talent website.',
          '',
          `Filename: ${fileName}`,
          `File Type: ${mimeType || 'unknown'}`,
          '',
          'The resume file is encoded below as base64. Save the text between the markers to a file and decode it to retrieve the original document.',
          '',
          '--- BEGIN RESUME (BASE64) ---',
          fileBase64,
          '--- END RESUME (BASE64) ---',
        ].join('\n'),
      }),
    });

    const fallbackResult = await fallbackResponse.json();

    if (fallbackResult.success) {
      return res.status(200).json({ success: true, message: 'Resume sent as base64 in message body' });
    }

    return res.status(500).json({ error: 'Failed to send resume', details: fallbackResult });
  } catch (error) {
    console.error('Error in send-resume API:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
