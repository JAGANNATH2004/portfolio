import React, { useRef, useState } from 'react';
import { Send, Linkedin } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [cooldown, setCooldown] = useState(0);

  const startCooldown = () => {
    setCooldown(60);
    const interval = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
    setSubmitError('');
  };
  
  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    } else if (formData.name.trim().length > 100) {
      newErrors.name = 'Name is too long';
      valid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    } else if (formData.email.trim().length > 254) {
      newErrors.email = 'Email is too long';
      valid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      valid = false;
    } else if (formData.message.trim().length > 2000) {
      newErrors.message = 'Message is too long (max 2000 characters)';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (cooldown > 0) return;

    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitError('');

      try {
        const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`;
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          if (response.status === 429) {
            setSubmitError(data.error || 'Too many messages. Please try again later.');
          } else {
            setSubmitError(data.error || 'Failed to send message. Please try again later.');
          }
          startCooldown();
          return;
        }

        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        startCooldown();

        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } catch (error) {
        setSubmitError('Failed to send message. Please try again later.');
        startCooldown();
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative"
    >
      <div className="absolute inset-0 bg-gradient-to-l from-cyan-900/10 via-blue-900/10 to-purple-900/10"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-center transform transition-all duration-700 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          } gradient-text`}>
            Contact
          </h2>
          
          <p className={`text-gray-400 text-lg text-center mb-12 max-w-2xl mx-auto transform transition-all duration-700 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Let's connect and collaborate on innovative ventures.
          </p>
          
          <div className={`grid md:grid-cols-2 gap-8 transform transition-all duration-700 delay-400 glass rounded-xl p-8 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Get in Touch</h3>
              <p className="text-gray-300 mb-6">
                Whether you have a project idea, research opportunity, or just want to say hello, 
                feel free to reach out. I'm always open to discussing new possibilities and connections.
              </p>
              
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <a 
                    href="https://www.linkedin.com/in/jagannath-vungarala-437345250/" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 mr-3" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 bg-gray-800/50 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white ${
                      errors.name ? 'border-red-500' : 'border-gray-600'
                    } glass`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 bg-gray-800/50 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white ${
                      errors.email ? 'border-red-500' : 'border-gray-600'
                    } glass`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 bg-gray-800/50 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white ${
                      errors.message ? 'border-red-500' : 'border-gray-600'
                    } glass`}
                  maxLength={2000}
                  ></textarea>
                  <div className="mt-1 flex justify-between items-center">
                    {errors.message ? <p className="text-sm text-red-600">{errors.message}</p> : <span />}
                    <span className="text-xs text-gray-500">{formData.message.length}/2000</span>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting || cooldown > 0}
                  className={`w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all neon-glow ${
                    isSubmitting || cooldown > 0 ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                        <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
                
                {submitSuccess && (
                  <div className="mt-4 p-3 bg-green-900/50 text-green-300 rounded-md border border-green-500/30">
                    Your message has been sent successfully!
                  </div>
                )}
                
                {submitError && (
                  <div className="mt-4 p-3 bg-red-900/50 text-red-300 rounded-md border border-red-500/30">
                    {submitError}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;