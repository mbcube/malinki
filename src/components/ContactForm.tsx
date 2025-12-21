import { useState } from 'react';
import { toast } from 'sonner';
import { Toaster } from './ui/sonner';

interface ContactFormProps {
  labels: {
    name: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
    submitting: string;
  };
  placeholders: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  messages: {
    success: string;
    error: string;
  };
}

export default function ContactForm({ labels, placeholders, messages }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast.success(messages.success);
        form.reset();
      } else {
        console.error('API Error:', result.error);
        toast.error(result.error || messages.error);
      }
    } catch (error) {
      console.error('Fetch Error:', error);
      toast.error(messages.error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Toaster position="top-right" richColors />
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-[#083e44] mb-2"
          >
            {labels.name}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border-2 border-[#E6F5F7] rounded-lg focus:border-[#083e44] focus:outline-none transition-colors duration-200 text-[#083e44]"
            placeholder={placeholders.name}
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-[#083e44] mb-2"
          >
            {labels.email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border-2 border-[#E6F5F7] rounded-lg focus:border-[#083e44] focus:outline-none transition-colors duration-200 text-[#083e44]"
            placeholder={placeholders.email}
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-[#083e44] mb-2"
          >
            {labels.phone}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 border-2 border-[#E6F5F7] rounded-lg focus:border-[#083e44] focus:outline-none transition-colors duration-200 text-[#083e44]"
            placeholder={placeholders.phone}
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-[#083e44] mb-2"
          >
            {labels.message}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full px-4 py-3 border-2 border-[#E6F5F7] rounded-lg focus:border-[#083e44] focus:outline-none transition-colors duration-200 resize-none text-[#083e44]"
            placeholder={placeholders.message}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#083e44] text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-[#0a4d56] transition-all duration-200 uppercase tracking-wide transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? labels.submitting : labels.submit}
        </button>
      </form>
    </>
  );
}

