// Google Sheets integration for contact form leads
// This will send form data to a Google Sheet

export interface GoogleSheetsData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  timestamp: string;
}

// Option 1: Using Google Apps Script (Recommended)
export async function sendToGoogleSheets(data: GoogleSheetsData) {
  try {
    // You'll need to create a Google Apps Script and deploy it as a web app
    // The script URL will look like: https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
    
    const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || 'YOUR_GOOGLE_SCRIPT_URL_HERE';
    
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'addLead',
        data: data
      })
    });

    const result = await response.json();
    console.log('📊 Google Sheets result:', result);
    
    return { success: true, message: 'Lead sent to Google Sheets' };
  } catch (error) {
    console.error('❌ Google Sheets error:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Google Sheets failed' };
  }
}

// Option 2: Using Google Forms (Alternative)
export async function sendToGoogleForms(data: GoogleSheetsData) {
  try {
    // You can also create a Google Form and submit data programmatically
    // This is simpler but less customizable
    
    const formUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || 'YOUR_GOOGLE_FORM_URL_HERE';
    
    // Google Forms submission
    const formData = new FormData();
    formData.append('entry.123456789', data.name); // Replace with actual form field IDs
    formData.append('entry.987654321', data.email);
    formData.append('entry.111222333', data.phone);
    formData.append('entry.444555666', data.company);
    formData.append('entry.777888999', data.service);
    formData.append('entry.000111222', data.message);
    
    const response = await fetch(formUrl, {
      method: 'POST',
      body: formData
    });

    console.log('📊 Google Forms result:', response.status);
    
    return { success: true, message: 'Lead sent to Google Forms' };
  } catch (error) {
    console.error('❌ Google Forms error:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Google Forms failed' };
  }
} 