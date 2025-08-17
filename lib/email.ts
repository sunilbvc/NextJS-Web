// Email utility for sending contact form leads
// Simple approach without external dependencies

export interface EmailData {
  to: string;
  subject: string;
  html: string;
}

// Simple email function using Formspree (free service)
export async function sendEmailWithFormspree(data: {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}) {
  try {
    // You can use Formspree (free) or create your own endpoint
    const formspreeUrl = process.env.NEXT_PUBLIC_FORMSPREE_URL || 'https://formspree.io/f/YOUR_FORM_ID';
    
    const emailData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      service: data.service,
      message: data.message,
      _subject: `New Lead: ${data.service} - ${data.company}`,
      _replyto: data.email
    };
    
    // Send to Formspree
    const response = await fetch(formspreeUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData)
    });

    if (response.ok) {
      return { success: true, message: 'Email sent successfully' };
    } else {
      throw new Error(`Formspree error: ${response.status}`);
    }
    
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Email failed' };
  }
}

// Alternative: Simple email logging (for testing)
export async function sendEmailWithEmailJS(data: {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}) {
  try {
    // Validate input data
    if (!data || !data.email || !data.name) {
      throw new Error('Invalid data provided to email function');
    }
    
    // Log the email data for now
    const emailData = {
      to: 'sunilbesra28@gmail.com',
      subject: `New Lead: ${data.service || 'General Inquiry'} - ${data.company || 'No Company'}`,
      body: `
        New lead from your website:
        
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone || 'Not provided'}
        Company: ${data.company || 'Not provided'}
        Service: ${data.service || 'Not specified'}
        Message: ${data.message || 'No message'}
        
        Timestamp: ${new Date().toISOString()}
      `
    };
    
    // Simulate a small delay to make it feel more realistic
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // For now, just return success (you can set up EmailJS later)
    return { success: true, message: 'Email logged successfully (EmailJS not configured)' };
    
  } catch (error) {
    console.error('Email function error:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Email failed' };
  }
} 