import fs from 'fs';

async function testUpload() {
  const formData = new FormData();
  formData.append("access_key", "08e5d7aa-0c92-4467-b7bf-413c7a710db5");
  formData.append("subject", "Test Attachment");
  formData.append("email", "nick@corversetalent.com");
  formData.append("message", "This is a test message.");
  
  // Create a dummy file blob
  const fileBlob = new Blob(['dummy content'], { type: 'text/plain' });
  formData.append("attachment", fileBlob, "dummy.txt");

  console.log("Sending...");
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });
    
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

testUpload();
