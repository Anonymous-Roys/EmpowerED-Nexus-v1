import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    inquiryType: '',
    message: ''
  });

  useEffect(() => {
    const type = searchParams.get('type');
    if (type === 'demo') {
      setFormData(prev => ({ ...prev, inquiryType: 'demo' }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      organization: '',
      inquiryType: '',
      message: ''
    });
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white min-h-screen w-full">
      {/* Hero Section */}
      <div className="pt-8 md:pt-12 pb-12 md:pb-16 px-4 md:px-6">
        <div className="max-w-[1375px] mx-auto">
          <h1 className="font-['Barlow:Bold',sans-serif] text-[32px] md:text-[40px] lg:text-[48px] text-black text-center mb-6">
            Let's build the future together
          </h1>
          <div className="font-['Montserrat:SemiBold',sans-serif] text-[#868181] text-[16px] md:text-[18px] text-center max-w-[800px] mx-auto">
            <p className="mb-2">
              We're here to answer your questions and explore how we can collaborate. Fill out the form
            </p>
            <p>below or use our contact details to get in touch.</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1375px] mx-auto px-4 md:px-6 pb-16 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-[20px] border border-black shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-6 md:p-8 lg:p-10">
            <h2 className="font-['Barlow:SemiBold',sans-serif] text-[28px] md:text-[32px] text-black mb-8">
              Get in Touch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label 
                    htmlFor="fullName"
                    className="font-['Inter:Medium',sans-serif] text-[14px] text-[#101010]"
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="bg-white border border-[#ededed] rounded-[8px] px-4 py-3 font-['Inter:Medium',sans-serif] text-[14px] text-black placeholder:text-[#878787] focus:outline-none focus:border-[#4eba86] transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label 
                    htmlFor="email"
                    className="font-['Inter:Medium',sans-serif] text-[14px] text-[#101010]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                    className="bg-white border border-[#ededed] rounded-[8px] px-4 py-3 font-['Inter:Medium',sans-serif] text-[14px] text-black placeholder:text-[#878787] focus:outline-none focus:border-[#4eba86] transition-colors"
                  />
                </div>
              </div>

              {/* Organization & Inquiry Type Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Organization */}
                <div className="flex flex-col gap-2">
                  <label 
                    htmlFor="organization"
                    className="font-['Inter:Medium',sans-serif] text-[14px] text-[#101010]"
                  >
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Enter your organization's name"
                    className="bg-white border border-[#ededed] rounded-[8px] px-4 py-3 font-['Inter:Medium',sans-serif] text-[14px] text-black placeholder:text-[#878787] focus:outline-none focus:border-[#4eba86] transition-colors"
                  />
                </div>

                {/* Inquiry Type */}
                <div className="flex flex-col gap-2">
                  <label 
                    htmlFor="inquiryType"
                    className="font-['Inter:Medium',sans-serif] text-[14px] text-[#101010]"
                  >
                    Inquiry type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className="bg-white border border-[#ededed] rounded-[8px] px-4 py-3 font-['Inter:Medium',sans-serif] text-[14px] text-black placeholder:text-[#878787] focus:outline-none focus:border-[#4eba86] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">General inquiry</option>
                    <option value="demo">Request a Demo</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label 
                  htmlFor="message"
                  className="font-['Inter:Medium',sans-serif] text-[14px] text-[#101010]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  rows={4}
                  className="bg-white border border-[#ededed] rounded-[8px] px-4 py-3 font-['Inter:Medium',sans-serif] text-[14px] text-black placeholder:text-[#878787] focus:outline-none focus:border-[#4eba86] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#4eba86] text-white font-['Montserrat:Medium',sans-serif] text-[18px] py-4 rounded-[8px] transition-all duration-300 hover:bg-[#45a878] hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details Card */}
          <div className="bg-white rounded-[20px] border border-black shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-6 md:p-8 lg:p-10 h-fit">
            <h2 className="font-['Barlow:SemiBold',sans-serif] text-[28px] md:text-[32px] text-black mb-8">
              Contact Details
            </h2>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-[50px] h-[50px] rounded-full bg-[rgba(78,186,134,0.5)] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 20 16">
                    <path 
                      d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" 
                      fill="#4EBA86"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-['Barlow:Medium',sans-serif] text-[18px] text-black mb-1">
                    Email
                  </p>
                  <p className="font-['Montserrat:Medium',sans-serif] text-[18px] text-[#878787]">
                    info@empowerednexus.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-[50px] h-[50px] rounded-full bg-[rgba(78,186,134,0.5)] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 18 18">
                    <path 
                      d="M17.01 12.38C15.78 12.38 14.59 12.18 13.48 11.82C13.13 11.7 12.74 11.79 12.47 12.06L10.9 14.03C8.07 12.68 5.42 10.13 4.01 7.2L5.96 5.54C6.23 5.26 6.31 4.87 6.2 4.52C5.83 3.41 5.64 2.22 5.64 0.99C5.64 0.45 5.19 0 4.65 0H1.19C0.65 0 0 0.24 0 0.99C0 10.28 7.73 18 17.01 18C17.72 18 18 17.37 18 16.82V13.37C18 12.83 17.55 12.38 17.01 12.38Z" 
                      fill="#14AE5C"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-['Barlow:Medium',sans-serif] text-[18px] text-black mb-1">
                    Phone
                  </p>
                  <p className="font-['Montserrat:Medium',sans-serif] text-[18px] text-[#878787]">
                    +237 694 54 1618
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-[50px] h-[50px] rounded-full bg-[rgba(78,186,134,0.5)] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 14 20">
                    <path 
                      d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z" 
                      fill="#14AE5C"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-['Barlow:Medium',sans-serif] text-[18px] text-black mb-1">
                    Location
                  </p>
                  <p className="font-['Montserrat:Medium',sans-serif] text-[14px] text-[#878787]">
                    Yaounde, Cameroon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
