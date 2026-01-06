import { supabase } from './supabase';

const hashIP = async (ip: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(ip);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex.substring(0, 16);
};

export const trackResumeDownload = async () => {
  try {
    const userAgent = navigator.userAgent;

    const ipResponse = await fetch('https://api.ipify.org?format=json');
    const { ip } = await ipResponse.json();
    const ipHash = await hashIP(ip);

    await supabase.from('resume_downloads').insert({
      user_agent: userAgent,
      ip_hash: ipHash,
    });
  } catch (error) {
    console.error('Failed to track resume download:', error);
  }
};

export const submitContactForm = async (
  name: string,
  email: string,
  subject: string,
  message: string
) => {
  try {
    const { error } = await supabase.from('contact_submissions').insert({
      name,
      email,
      subject,
      message,
    });

    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Failed to submit contact form:', error);
    return { success: false, error };
  }
};
