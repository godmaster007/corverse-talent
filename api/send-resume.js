// Vercel Serverless Function: /api/send-resume
// Sends the uploaded resume to nick@corversetalent.com via Web3Forms

export default async function handler(req, res) {
  // Only accept POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { fileName, fileBase64, mimeType } = req.body;

    if (!fileName || !fileBase64) {
      return res.status(400).json({ error: 'Missing fileName or fileBase64' });
    }

    const accessKey = process.env.VITE_WEB3FORMS_KEY;
    if (!accessKey) {
      return res.status(500).json({ error: 'Web3Forms key not configured' });
    }

    // Reconstruct the file from base64 and send via Web3Forms as multipart/form-data
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
      return res.status(200).json({ success: true, message: 'Resume sent successfully' });
    }

    // If attachment failed (Pro feature), fall back to sending just the notification
    console.warn('Web3Forms attachment may have failed, trying without attachment:', result);
    
    const fallbackResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        subject: 'New Resume Submitted via AI Matcher',
        from_name: 'Corverse Talent AI Matcher',
        message: `A candidate uploaded their resume for AI assessment.\n\nFilename: ${fileName}\nFile Type: ${mimeType || 'unknown'}\n\nNote: The resume file is attached as base64-encoded data below. Copy this text and use a base64 decoder to retrieve the file.\n\n--- BEGIN RESUME (BASE64) ---\n${fileBase64}\n--- END RESUME (BASE64) ---`,
      }),
    });

    const fallbackResult = await fallbackResponse.json();
    
    if (fallbackResult.success) {
      return res.status(200).json({ success: true, message: 'Resume notification sent (base64 in body)' });
    }

    return res.status(500).json({ error: 'Failed to send resume', details: fallbackResult });
  } catch (error) {
    console.error('Error in send-resume API:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
