import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'demo' | 'contact';
}

export const DemoModal: React.FC<DemoModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'demo',
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    businessEmail: '',
    phone: '',
    industry: 'Public Safety',
    country: 'Australia',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.company.trim()) newErrors.company = 'Company / Agency is required';
    
    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.businessEmail.trim() || !emailRegex.test(formData.businessEmail)) {
      newErrors.businessEmail = 'Valid business email is required';
    }

    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const industries = [
    'Public Safety',
    'Industrial',
    'Construction',
    'Mining',
    'Energy',
    'Agriculture',
    'Logistics',
    'Commercial Security',
    'Other',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-xl transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Dialog Content */}
      <div className="relative z-10 w-full max-w-2xl rounded-3xl bg-[#151819] border border-white/15 p-6 sm:p-10 shadow-2xl overflow-hidden my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-12 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#B7FF45]/15 text-[#B7FF45] mx-auto flex items-center justify-center mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-medium text-white mb-3">Request Received</h3>
            <p className="text-lg text-[#F1F0EA]/85 font-light max-w-md mx-auto mb-8">
              Thank you. The AmazingFly team will be in touch.
            </p>
            <div className="p-4 rounded-2xl bg-black/40 border border-white/5 text-xs text-[#A6AAA9] font-mono-tech max-w-md mx-auto mb-8">
              A systems specialist will follow up at <strong className="text-white">{formData.businessEmail}</strong> regarding your requested deployment.
            </div>
            <button
              onClick={onClose}
              className="px-8 py-3 rounded-full bg-[#B7FF45] text-black font-semibold text-sm hover:bg-[#CEFF70] transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="mb-8">
              <div className="tech-label text-[#B7FF45] mb-2">
                {initialMode === 'demo' ? 'AUTONOMOUS SYSTEMS DEMONSTRATION' : 'DIRECT OPERATIONS ENQUIRY'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-medium text-white">
                {initialMode === 'demo' ? 'Request an AmazingFly Demonstration' : 'Contact Operations & Engineering'}
              </h2>
              <p className="text-xs sm:text-sm text-[#A6AAA9] mt-2 font-light">
                Please complete the form below or contact us directly at{' '}
                <a href="mailto:support@amazingorganics.co" className="text-[#B7FF45] hover:underline">
                  support@amazingorganics.co
                </a>
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <label className="block text-xs font-mono-tech text-[#A6AAA9] mb-1.5 uppercase">First Name *</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-black/50 border ${
                      errors.firstName ? 'border-red-500' : 'border-white/10'
                    } text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#B7FF45]`}
                    placeholder="Jane"
                  />
                  {errors.firstName && <span className="text-[10px] text-red-400 mt-1 block">{errors.firstName}</span>}
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-xs font-mono-tech text-[#A6AAA9] mb-1.5 uppercase">Last Name *</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-black/50 border ${
                      errors.lastName ? 'border-red-500' : 'border-white/10'
                    } text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#B7FF45]`}
                    placeholder="Doe"
                  />
                  {errors.lastName && <span className="text-[10px] text-red-400 mt-1 block">{errors.lastName}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Company */}
                <div>
                  <label className="block text-xs font-mono-tech text-[#A6AAA9] mb-1.5 uppercase">Company / Agency *</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-black/50 border ${
                      errors.company ? 'border-red-500' : 'border-white/10'
                    } text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#B7FF45]`}
                    placeholder="Acme Industrial Corp"
                  />
                  {errors.company && <span className="text-[10px] text-red-400 mt-1 block">{errors.company}</span>}
                </div>

                {/* Business Email */}
                <div>
                  <label className="block text-xs font-mono-tech text-[#A6AAA9] mb-1.5 uppercase">Business Email *</label>
                  <input
                    type="email"
                    value={formData.businessEmail}
                    onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-black/50 border ${
                      errors.businessEmail ? 'border-red-500' : 'border-white/10'
                    } text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#B7FF45]`}
                    placeholder="jane@company.com"
                  />
                  {errors.businessEmail && <span className="text-[10px] text-red-400 mt-1 block">{errors.businessEmail}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div>
                  <label className="block text-xs font-mono-tech text-[#A6AAA9] mb-1.5 uppercase">Phone *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-black/50 border ${
                      errors.phone ? 'border-red-500' : 'border-white/10'
                    } text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#B7FF45]`}
                    placeholder="+61 400 000 000"
                  />
                  {errors.phone && <span className="text-[10px] text-red-400 mt-1 block">{errors.phone}</span>}
                </div>

                {/* Industry */}
                <div>
                  <label className="block text-xs font-mono-tech text-[#A6AAA9] mb-1.5 uppercase">Industry</label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-[#B7FF45]"
                  >
                    {industries.map((ind) => (
                      <option key={ind} value={ind} className="bg-[#151819] text-white">
                        {ind}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Country */}
              <div>
                <label className="block text-xs font-mono-tech text-[#A6AAA9] mb-1.5 uppercase">Country</label>
                <input
                  type="text"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-[#B7FF45]"
                  placeholder="Australia"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono-tech text-[#A6AAA9] mb-1.5 uppercase">Operational Requirements / Message</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#B7FF45] resize-none"
                  placeholder="Briefly describe your site, deployment area, or mission objectives..."
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#B7FF45] text-black font-semibold text-sm hover:bg-[#CEFF70] transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'PROCESSING...' : 'REQUEST A DEMO'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-[11px] text-center text-[#A6AAA9] font-mono-tech">
                An Amazing Organics technology initiative • ABN 77 680 690 993
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
