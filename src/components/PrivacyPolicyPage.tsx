export function PrivacyPolicyPage() {
  return (
    <div className="bg-white w-full">
      {/* Hero Section */}
      <div className="bg-white px-4 md:px-6 pt-8 md:pt-12 pb-8">
        <div className="max-w-[1240px] mx-auto text-center">
          <h1 className="font-['Barlow:Black',sans-serif] text-[36px] md:text-[48px] text-[#0c1733] mb-4">
            Privacy Policy
          </h1>
          <p className="font-['Barlow:Regular',sans-serif] text-[20px] md:text-[24px] text-[#0c1733] tracking-wide">
            Last Updated: October 26, 2025
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 md:px-6 pb-16 md:pb-20">
        <div className="max-w-[1240px] mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <p className="font-['Montserrat:Regular',sans-serif] text-[16px] md:text-[18px] text-[#807b7b] leading-[28px] tracking-[0.36px]">
              Welcome to EmpowerEd Nexus. We are committed to protecting your privacy and ensuring
              transparency in how we handle your information. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website and use our services. Please
              read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do
              not access the site.
            </p>
          </div>

          {/* Information we collect */}
          <div className="mb-12">
            <h2 className="font-['Barlow:SemiBold',sans-serif] text-[28px] md:text-[32px] text-[#0c1733] mb-6">
              Information we collect
            </h2>
            <p className="font-['Montserrat:Regular',sans-serif] text-[16px] md:text-[18px] text-[#807b7b] leading-[28px] tracking-[0.36px]">
              We may collect information about you in a variety of ways. The information we may collect on the Site 
              includes personally identifiable information, such as your name, shipping address, email address, and 
              telephone number, and demographic information, such as your age, gender, hometown, and interests, that 
              you voluntarily give to us when you register with the Site or when you choose to participate in various 
              activities related to the Site, such as online chat and message boards.
            </p>
          </div>

          {/* How we use your Information */}
          <div className="mb-12">
            <h2 className="font-['Barlow:SemiBold',sans-serif] text-[28px] md:text-[32px] text-[#0c1733] mb-6">
              How we use your Information
            </h2>
            <p className="font-['Montserrat:Regular',sans-serif] text-[16px] md:text-[18px] text-[#807b7b] leading-[28px] tracking-[0.36px] mb-6">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized 
              experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-2">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
                <p className="font-['Montserrat:Regular',sans-serif] text-[18px] md:text-[20px] text-black leading-[28px] tracking-[0.4px]">
                  Create and manage your account.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-2">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
                <p className="font-['Montserrat:Regular',sans-serif] text-[18px] md:text-[20px] text-black leading-[28px] tracking-[0.4px]">
                  Email you regarding your account or order.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-2">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
                <p className="font-['Montserrat:Regular',sans-serif] text-[18px] md:text-[20px] text-black leading-[28px] tracking-[0.4px]">
                  Enable user-to-user communications.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-2">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
                <p className="font-['Montserrat:Regular',sans-serif] text-[18px] md:text-[20px] text-black leading-[28px] tracking-[0.4px]">
                  Fulfill and manage purchases, orders, payments, and other transactions.
                </p>
              </li>
            </ul>
          </div>

          {/* Data security */}
          <div className="mb-12">
            <h2 className="font-['Barlow:SemiBold',sans-serif] text-[28px] md:text-[32px] text-[#0c1733] mb-6">
              Data security
            </h2>
            <p className="font-['Montserrat:Regular',sans-serif] text-[16px] md:text-[18px] text-[#807b7b] leading-[28px] tracking-[0.36px]">
              We use administrative, technical, and physical security measures to help protect your personal information. 
              While we have taken reasonable steps to secure the personal information you provide to us, please be aware 
              that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission 
              can be guaranteed against any interception or other type of misuse.
            </p>
          </div>

          {/* Contact Us */}
          <div className="mb-12">
            <h2 className="font-['Barlow:SemiBold',sans-serif] text-[28px] md:text-[32px] text-[#0c1733] mb-6">
              Contact Us
            </h2>
            <p className="font-['Montserrat:Regular',sans-serif] text-[16px] md:text-[18px] text-[#807b7b] leading-[28px] tracking-[0.36px]">
              If you have questions or comments about this Privacy Policy, please contact us at:{' '}
              <a 
                href="mailto:privacy@empowerednexus.com" 
                className="text-[#2e92c6] hover:underline transition-all"
              >
                privacy@empowerednexus.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
