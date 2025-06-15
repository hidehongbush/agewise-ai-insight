import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from "@/lib/LanguageContext";

const TermsOfService = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#171717]">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-emerald-100 text-lg">Last updated: January 2025</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 space-y-8">
            
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-white/80 leading-relaxed">
                By accessing and using AgeWise AI platform, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to these terms, you should not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Use License</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Permission is granted to temporarily access and use AgeWise for personal, non-commercial transitory viewing only. 
                This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to reverse engineer any software contained on the platform</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Medical Disclaimer</h2>
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <p className="text-red-300 font-semibold mb-2">⚠️ Important Medical Disclaimer</p>
                <p className="text-white/80 leading-relaxed">
                  The information provided by AgeWise is for educational and informational purposes only. 
                  It is not intended as a substitute for professional medical advice, diagnosis, or treatment. 
                  Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. AI-Generated Content</h2>
              <p className="text-white/80 leading-relaxed">
                AgeWise uses artificial intelligence to provide information about aging and longevity. 
                While we strive to provide accurate and up-to-date information based on scientific research, 
                AI-generated content may contain errors or inaccuracies. Users should verify information independently 
                and consult with healthcare professionals before making any health-related decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. User Responsibilities</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Users are responsible for:
              </p>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                <li>Using the service in accordance with applicable laws and regulations</li>
                <li>Not sharing false or misleading information</li>
                <li>Respecting the intellectual property rights of others</li>
                <li>Not attempting to harm or disrupt the service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Privacy and Data</h2>
              <p className="text-white/80 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, 
                which also governs your use of the service, to understand our practices regarding 
                the collection and use of your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Limitation of Liability</h2>
              <p className="text-white/80 leading-relaxed">
                In no event shall AgeWise or its suppliers be liable for any damages 
                (including, without limitation, damages for loss of data or profit, or due to business interruption) 
                arising out of the use or inability to use the materials on AgeWise's platform, 
                even if AgeWise or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Revisions and Errata</h2>
              <p className="text-white/80 leading-relaxed">
                The materials appearing on AgeWise could include technical, typographical, or photographic errors. 
                AgeWise does not warrant that any of the materials on its platform are accurate, complete, or current. 
                AgeWise may make changes to the materials contained on its platform at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Contact Information</h2>
              <p className="text-white/80 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at: 
                <a href="mailto:hjs031117@unist.ac.kr" className="text-emerald-400 hover:text-emerald-300 underline ml-1">
                  hjs031117@unist.ac.kr
                </a>
              </p>
            </section>

          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 