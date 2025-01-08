import React, { useState } from 'react';
    import { Phone, MapPin, Mail } from 'lucide-react';

    export function Contact() {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [message, setMessage] = useState('');
      const [formMessage, setFormMessage] = useState('');
      const [isSending, setIsSending] = useState(false);

      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);
        setFormMessage('');

        try {
          const response = await fetch('https://send-any-foam.indunissanka.workers.dev/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              to: 'indunissanka@gmail.com',
              subject: 'Contact Form Submission',
              design: `
                Name: ${name}
                Email: ${email}
                Message: ${message}
              `,
            }),
          });

          if (response.ok) {
            setFormMessage('Message sent successfully!');
            setName('');
            setEmail('');
            setMessage('');
          } else {
            const errorData = await response.json();
            setFormMessage(`Failed to send message. Please try again. ${errorData.message || ''}`);
          }
        } catch (error) {
          setFormMessage('Failed to send message. Please try again.');
        } finally {
          setIsSending(false);
        }
      };

      return (
        <section className="bg-pink-100 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-serif text-gray-900 mb-8 text-center">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-gray-700">
                  We'd love to hear from you! Please use the contact form below or reach out to us using the contact information provided.
                </p>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700">+94 72 368 4367</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700">36/3 Jambugasmulla Mawatha, Nugegoda</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700">indunissanka@gmail.com</span>
                </div>
              </div>
              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Enter your message"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                      rows={4}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition-colors disabled:opacity-50"
                  >
                    {isSending ? 'Sending...' : 'Send Message'}
                  </button>
                  {formMessage && (
                    <p className={`text-sm ${formMessage.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                      {formMessage}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      );
    }
