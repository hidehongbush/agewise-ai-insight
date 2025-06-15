import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from "@/lib/LanguageContext";

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#171717]">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-blue-100 text-lg">Last updated: January 2025</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 space-y-8">
            
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white/90 mb-2">Personal Information</h3>
                  <p className="text-white/80 leading-relaxed">
                    We may collect personal information that you voluntarily provide when using our AI chat service, 
                    such as your age, health concerns, and lifestyle information to provide personalized recommendations.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white/90 mb-2">Usage Data</h3>
                  <p className="text-white/80 leading-relaxed">
                    We automatically collect information about how you interact with our platform, 
                    including pages visited, features used, and the time and duration of your activities.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                <li>Provide personalized AI-powered aging and longevity recommendations</li>
                <li>Improve our service and develop new features</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Communicate with you about service updates and important information</li>
                <li>Ensure the security and integrity of our platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Data Storage and Security</h2>
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                <p className="text-emerald-300 font-semibold mb-2">🔒 Data Security</p>
                <p className="text-white/80 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. Your data is encrypted both in transit and at rest.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Information Sharing</h2>
              <p className="text-white/80 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties. 
                We may share aggregated, anonymized data for research purposes to advance the field of aging and longevity science. 
                We may also share information when required by law or to protect our rights and safety.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. AI and Research Data</h2>
              <p className="text-white/80 leading-relaxed">
                Our AI system accesses publicly available scientific research and databases to provide you with evidence-based information. 
                We do not share your personal queries or health information with external research databases or AI training systems.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Cookies and Tracking</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze how you use our service</li>
                <li>Provide personalized content and recommendations</li>
                <li>Ensure the security of your session</li>
              </ul>
              <p className="text-white/80 leading-relaxed mt-4">
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Your Rights</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict processing of your information</li>
                <li>Data portability (receive your data in a structured format)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Children's Privacy</h2>
              <p className="text-white/80 leading-relaxed">
                Our service is not intended for children under 18 years of age. 
                We do not knowingly collect personal information from children under 18. 
                If we discover that we have collected information from a child under 18, we will delete it immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Changes to This Policy</h2>
              <p className="text-white/80 leading-relaxed">
                We may update this Privacy Policy from time to time. 
                We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. 
                We encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Contact Information</h2>
              <p className="text-white/80 leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us at: 
                <a href="mailto:hjs031117@unist.ac.kr" className="text-blue-400 hover:text-blue-300 underline ml-1">
                  hjs031117@unist.ac.kr
                </a>
              </p>
            </section>

          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 