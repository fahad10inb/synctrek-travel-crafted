import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Function to open legal documents in new window
  const openLegalDoc = (section) => {
    const legalDocsHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SyncTrek Legal Documents</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        .doc-section { scroll-margin-top: 100px; }
    </style>
</head>
<body class="bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-sm sticky top-0 z-50">
        <div class="container mx-auto px-4 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span class="text-white font-bold text-sm">ST</span>
                    </div>
                    <span class="text-xl font-bold text-gray-900">SyncTrek Legal</span>
                </div>
                <div class="flex space-x-6 text-sm">
                    <a href="#privacy" class="text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a>
                    <a href="#terms" class="text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</a>
                    <a href="#beta" class="text-gray-600 hover:text-blue-600 transition-colors">Beta Terms</a>
                </div>
            </div>
        </div>
    </nav>

    <div class="container mx-auto px-4 py-8 max-w-4xl">
        <!-- Privacy Policy -->
        <section id="privacy" class="doc-section mb-16">
            <div class="bg-white rounded-lg shadow-sm p-8">
                <h1 class="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
                <p class="text-gray-600 mb-8">Last updated: July 26, 2025</p>

                <div class="prose prose-gray max-w-none">
                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Introduction</h2>
                    <p class="mb-4">SyncTrek ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered travel planning application and services.</p>

                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
                    <h3 class="text-lg font-medium text-gray-800 mt-6 mb-3">Personal Information</h3>
                    <ul class="list-disc pl-6 mb-4 space-y-1">
                        <li>Email address and contact information</li>
                        <li>Profile information (name, preferences, travel history)</li>
                        <li>Travel preferences and requirements</li>
                        <li>Payment information (processed securely through third-party providers)</li>
                    </ul>

                    <h3 class="text-lg font-medium text-gray-800 mt-6 mb-3">Usage Data</h3>
                    <ul class="list-disc pl-6 mb-4 space-y-1">
                        <li>App usage patterns and interactions</li>
                        <li>Search queries and travel planning data</li>
                        <li>Device information and IP address</li>
                        <li>Location data (when permission is granted)</li>
                    </ul>

                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
                    <ul class="list-disc pl-6 mb-4 space-y-1">
                        <li>Provide personalized travel recommendations through AI analysis</li>
                        <li>Improve our AI algorithms and service quality</li>
                        <li>Send important updates about our beta program</li>
                        <li>Provide customer support and respond to inquiries</li>
                        <li>Ensure security and prevent fraud</li>
                    </ul>

                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Data Sharing and Disclosure</h2>
                    <p class="mb-4">We do not sell your personal information. We may share your information in the following circumstances:</p>
                    <ul class="list-disc pl-6 mb-4 space-y-1">
                        <li>With trusted service providers who assist in our operations</li>
                        <li>When required by law or to protect our rights</li>
                        <li>With your explicit consent</li>
                        <li>In case of business transfer or merger</li>
                    </ul>

                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Data Security</h2>
                    <p class="mb-4">We implement appropriate security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>

                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Your Rights</h2>
                    <p class="mb-4">You have the right to:</p>
                    <ul class="list-disc pl-6 mb-4 space-y-1">
                        <li>Access and update your personal information</li>
                        <li>Request deletion of your data</li>
                        <li>Opt out of marketing communications</li>
                        <li>Data portability</li>
                        <li>Withdraw consent at any time</li>
                    </ul>

                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Cookies and Tracking</h2>
                    <p class="mb-4">We use cookies and similar technologies to enhance your experience, analyze usage patterns, and improve our services. You can control cookie settings through your browser.</p>

                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">8. Third-Party Services</h2>
                    <p class="mb-4">Our app may integrate with third-party services for payments, analytics, and travel bookings. These services have their own privacy policies, and we encourage you to review them.</p>

                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">9. International Data Transfers</h2>
                    <p class="mb-4">Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.</p>

                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">10. Children's Privacy</h2>
                    <p class="mb-4">Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13.</p>

                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">11. Changes to This Policy</h2>
                    <p class="mb-4">We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.</p>

                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">12. Contact Us</h2>
                    <p class="mb-4">If you have any questions about this Privacy Policy, please contact us at:</p>
                    <p class="mb-2"><strong>Email:</strong> privacy@synctrek.ai</p>
                    <p class="mb-8"><strong>Address:</strong> SyncTrek Privacy Team, [Your Address]</p>
                </div>
            </div>
        </section>

        <!-- Terms of Service -->
        <section id="terms" class="doc-section mb-16">
            <div class="bg-white rounded-lg shadow-sm p-8">
                <h1 class="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
                <p class="text-gray-600 mb-8">Last updated: July 26, 2025</p>

                <div class="prose prose-gray max-w-none">
                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
                    <p class="mb-4">By accessing or using SyncTrek's AI travel planning services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>

                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Description of Service</h2>
                    <p class="mb-4">SyncTrek provides AI-powered travel planning services, including personalized recommendations, itinerary creation, and travel assistance. Our service is currently in beta development.</p>

                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">3. User Accounts</h2>
                    <p class="mb-4">To use our services, you must:</p>
                    <ul class="list-disc pl-6 mb-4 space-y-1">
                        <li>Provide accurate and complete information</li>
                        <li>Maintain the security of your account credentials</li>
                        <li>Be at least 18 years old or have parental consent</li>
                        <li>Use the service only for lawful purposes</li>
                    </ul>

                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Acceptable Use</h2>
                    <p class="mb-4">You agree not to:</p>
                    <ul class="list-disc pl-6 mb-4 space-y-1">
                        <li>Use the service for any illegal or unauthorized purpose</li>
                        <li>Interfere with or disrupt the service or servers</li>
                        <li>Attempt to gain unauthorized access to other accounts</li>
                        <li>Upload harmful or malicious content</li>
                        <li>Violate any applicable laws or regulations</li>
                    </ul>

                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Intellectual Property</h2>
                    <p class="mb-4">SyncTrek retains all rights to its AI technology, algorithms, and proprietary content. You retain rights to your personal travel data, but grant us license to use it for service improvement.</p>

                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">6. AI-Generated Recommendations</h2>
                    <p class="mb-4">Our AI provides travel suggestions based on available data. We do not guarantee the accuracy, completeness, or suitability of recommendations. Users should verify all travel information independently.</p>

                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Third-Party Services</h2>
                    <p class="mb-4">We may integrate with third-party booking platforms and services. We are not responsible for the quality, accuracy, or availability of third-party services.</p>

                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">8. Fees and Payment</h2>
                    <p class="mb-4">During beta, our core services are free. Future premium features may require payment. Any fees will be clearly disclosed before charging.</p>

                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">9. Disclaimers and Warranties</h2>
                    <p class="mb-4">SyncTrek is provided "as is" without warranties of any kind. We disclaim all warranties, express or implied, including merchantability and fitness for a particular purpose.</p>

                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">10. Limitation of Liability</h2>
                    <p class="mb-4">To the maximum extent permitted by law, SyncTrek shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service.</p>

                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">11. Termination</h2>
                    <p class="mb-4">We reserve the right to terminate or suspend your account at any time for violation of these terms or for any other reason with or without notice.</p>

                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">12. Governing Law</h2>
                    <p class="mb-4">These terms are governed by the laws of [Your Jurisdiction]. Any disputes will be resolved in the courts of [Your Jurisdiction].</p>

                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">13. Changes to Terms</h2>
                    <p class="mb-4">We may modify these terms at any time. Material changes will be communicated via email or in-app notification.</p>

                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">14. Contact Information</h2>
                    <p class="mb-8">For questions about these terms, contact us at: <strong>legal@synctrek.ai</strong></p>
                </div>
            </div>
        </section>

        <!-- Beta Terms -->
        <section id="beta" class="doc-section mb-16">
            <div class="bg-white rounded-lg shadow-sm p-8">
                <h1 class="text-3xl font-bold text-gray-900 mb-2">Beta Terms</h1>
                <p class="text-gray-600 mb-8">Last updated: July 26, 2025</p>

                <div class="prose prose-gray max-w-none">
                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Beta Program Overview</h2>
                    <p class="mb-4">SyncTrek is currently in beta development. By participating in our beta program, you acknowledge that you are testing pre-release software that may contain bugs, errors, or incomplete features.</p>

                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Beta Software Nature</h2>
                    <p class="mb-4">You understand and agree that:</p>
                    <ul class="list-disc pl-6 mb-4 space-y-1">
                        <li>The software is in development and may not function as intended</li>
                        <li>Features may be added, modified, or removed without notice</li>
                        <li>Service availability is not guaranteed</li>
                        <li>Performance may be slower or less reliable than final versions</li>
                    </ul>

                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">3. No Warranties</h2>
                    <p class="mb-4">Beta software is provided "AS IS" without any warranties, express or implied. We make no representations about the reliability, accuracy, or completeness of the beta service.</p>

                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Data and Content</h2>
                    <p class="mb-4"><strong>Important:</strong> Beta data may be:</p>
                    <ul class="list-disc pl-6 mb-4 space-y-1">
                        <li>Lost or corrupted during updates</li>
                        <li>Not preserved when transitioning to the final version</li>
                        <li>Reset or deleted without notice</li>
                        <li>Used for testing and improvement purposes</li>
                    </ul>
                    <p class="mb-4">We recommend not storing critical travel information solely in the beta version.</p>

                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Feedback and Testing</h2>
                    <p class="mb-4">As a beta user, you agree to:</p>
                    <ul class="list-disc pl-6 mb-4 space-y-1">
                        <li>Provide feedback about your experience</li>
                        <li>Report bugs and issues you encounter</li>
                        <li>Participate in surveys or user research when requested</li>
                        <li>Allow us to use your feedback to improve the service</li>
                    </ul>

                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Confidentiality</h2>
                    <p class="mb-4">While using our beta service, you may encounter features or information not yet public. You agree to:</p>
                    <ul class="list-disc pl-6 mb-4 space-y-1">
                        <li>Keep unreleased features confidential</li>
                        <li>Not share screenshots or details of beta-only features</li>
                        <li>Not reverse engineer or attempt to extract proprietary technology</li>
                    </ul>

                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Limited Support</h2>
                    <p class="mb-4">Beta users receive limited customer support. We will make reasonable efforts to address critical issues but cannot guarantee response times or resolution.</p>

                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">8. Access and Termination</h2>
                    <p class="mb-4">We reserve the right to:</p>
                    <ul class="list-disc pl-6 mb-4 space-y-1">
                        <li>Terminate beta access at any time without notice</li>
                        <li>Limit the number of beta participants</li>
                        <li>Require additional agreements for continued participation</li>
                        <li>End the beta program and transition to paid service</li>
                    </ul>

                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">9. Limitation of Liability</h2>
                    <p class="mb-4">Your participation in the beta program is at your own risk. We are not liable for any damages arising from beta software use, including but not limited to:</p>
                    <ul class="list-disc pl-6 mb-4 space-y-1">
                        <li>Data loss or corruption</li>
                        <li>Service interruptions</li>
                        <li>Incorrect travel recommendations</li>
                        <li>Any costs incurred from using beta features</li>
                    </ul>

                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">10. Future Commercial Terms</h2>
                    <p class="mb-4">When SyncTrek exits beta, different terms and pricing may apply. Beta participation does not guarantee:</p>
                    <ul class="list-disc pl-6 mb-4 space-y-1">
                        <li>Continued free access</li>
                        <li>Grandfathered pricing</li>
                        <li>Access to premium features</li>
                        <li>Data migration to commercial version</li>
                    </ul>

                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">11. Compliance with Other Terms</h2>
                    <p class="mb-4">These Beta Terms supplement our main Terms of Service and Privacy Policy. In case of conflict, these Beta Terms take precedence for beta-related matters.</p>

                    <h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">12. Contact for Beta Issues</h2>
                    <p class="mb-8">For beta-specific questions or issues, contact us at: <strong>beta@synctrek.ai</strong></p>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="text-center py-8 border-t border-gray-200">
            <p class="text-gray-600 text-sm">© 2025 SyncTrek. All rights reserved.</p>
            <p class="text-gray-500 text-xs mt-2">These documents are templates and should be reviewed by legal counsel before use.</p>
        </footer>
    </div>

    <script>
        // Auto-scroll to section based on hash
        if (window.location.hash) {
            const element = document.querySelector(window.location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    </script>
</body>
</html>`;

    const newWindow = window.open('', '_blank');
    newWindow.document.write(legalDocsHTML);
    newWindow.document.close();
    
    // Scroll to specific section if provided
    if (section) {
      setTimeout(() => {
        const element = newWindow.document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className="bg-synctrek-deep text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/40a10069-a4a6-4c86-872b-c6f391d229f6.png" 
                alt="SyncTrek Logo" 
                className="w-10 h-10 rounded-lg"
              />
              <span className="text-2xl font-bold">SyncTrek</span>
            </div>
            <p className="text-white/80 mb-6 max-w-md leading-relaxed">
              Revolutionizing travel planning through advanced AI technology. 
              SyncTrek is building the future of intelligent, personalized travel experiences.
            </p>
            <div className="text-sm text-white/60">
              <p className="mb-1">🚧 Currently in Beta Development</p>
              <p>Building world-class AI travel technology</p>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Product</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#download" className="hover:text-white transition-colors">Beta Download</a></li>
              <li><a href="#showcase" className="hover:text-white transition-colors">Showcase</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Connect</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span className="text-sm">ai.synctrek@gmail.com</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin size={16} />
                <span className="text-sm">Kochi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-white/60 mb-4 md:mb-0">
              © {currentYear} SyncTrek. All rights reserved. Built with advanced AI technology.
            </div>
            <div className="flex space-x-6 text-sm text-white/60">
              <button 
                onClick={() => openLegalDoc('privacy')} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => openLegalDoc('terms')} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => openLegalDoc('beta')} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                Beta Terms
              </button>
            </div>
          </div>
          
          {/* Development Notice */}
          <div className="mt-6 text-center">
            <p className="text-xs text-white/50">
              SyncTrek is in active development. This website showcases our vision for AI-powered travel planning.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;