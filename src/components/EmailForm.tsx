import React, { useState } from 'react';
    import type { CakeDesign } from '../types/cake';
    import { generateEmailTemplate } from '../utils/emailTemplate';

    interface EmailFormProps {
      design: CakeDesign;
    }

    export function EmailForm({ design }: EmailFormProps) {
      const [email, setEmail] = useState('');
      const [sending, setSending] = useState(false);
      const [message, setMessage] = useState('');
      const copyEmail = 'buddhikaf1@gmail.com';

      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        setMessage('');

        try {
          const emailContent = generateEmailTemplate(design);
          const response = await fetch('https://send-any-foam.indunissanka.workers.dev/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              to: email,
              copy: copyEmail,
              subject: 'Cake Design',
              design: emailContent,
            }),
          });

          if (response.ok) {
            setMessage('Design sent successfully! Check your email.');
            setEmail('');
          } else {
            const errorData = await response.json();
            setMessage(`Failed to send email. Please try again. ${errorData.message || ''}`);
          }
        } catch (error) {
          setMessage('Failed to send email. Please try again.');
        } finally {
          setSending(false);
        }
      };

      return (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
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
          
          <button
            type="submit"
            disabled={sending}
            className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition-colors disabled:opacity-50"
          >
            {sending ? 'Sending...' : 'Send Design to Email'}
          </button>
          
          {message && (
            <p className={`text-sm ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          )}
        </form>
      );
    }
