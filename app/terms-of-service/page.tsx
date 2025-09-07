import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Digital Marketing & Web Development Services',
  description: 'Terms of Service for our digital marketing and web development services. Read our terms and conditions for using our services.',
  keywords: 'terms of service, terms and conditions, legal terms, digital marketing services, web development terms',
  openGraph: {
    title: 'Terms of Service | Digital Marketing & Web Development Services',
    description: 'Terms of Service for our digital marketing and web development services. Read our terms and conditions for using our services.',
    type: 'website',
  },
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using our digital marketing and web development services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-gray-700 mb-4">
                These Terms of Service ("Terms") govern your use of our website and services provided by our company. By using our services, you agree to these terms in full.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Services</h2>
              <p className="text-gray-700 mb-4">We provide the following services:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Website design and development (WordPress, Laravel, custom solutions)</li>
                <li>E-commerce website development and integration</li>
                <li>Digital marketing services (SEO, social media, PPC)</li>
                <li>Google Analytics setup and optimization</li>
                <li>WhatsApp integration and communication services</li>
                <li>Call center and customer support solutions</li>
                <li>Hosting and domain services</li>
                <li>Maintenance and support services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
              <p className="text-gray-700 mb-4">As a user of our services, you agree to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide accurate and complete information when requested</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not interfere with or disrupt our services or servers</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Respect intellectual property rights</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Pay all fees and charges in a timely manner</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payment Terms</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">4.1 Pricing and Payment</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>All prices are as listed on our website and are subject to change with notice</li>
                <li>Payment is due according to the terms specified in your service agreement</li>
                <li>We accept various payment methods including bank transfers, UPI, and online payments</li>
                <li>Late payments may incur additional charges</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">4.2 Refund Policy</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Refunds are considered on a case-by-case basis</li>
                <li>No refunds for completed work or services already delivered</li>
                <li>Partial refunds may be available for cancelled projects before work begins</li>
                <li>Refund requests must be submitted in writing within 30 days</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property Rights</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">5.1 Our Intellectual Property</h3>
              <p className="text-gray-700 mb-4">
                All content, designs, code, and materials created by us remain our intellectual property unless otherwise specified in a written agreement.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.2 Client Content</h3>
              <p className="text-gray-700 mb-4">
                You retain ownership of your content, including text, images, logos, and other materials you provide to us. By using our services, you grant us a license to use your content for the purpose of providing our services.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.3 Third-Party Content</h3>
              <p className="text-gray-700 mb-4">
                We respect third-party intellectual property rights. If you believe your rights have been violated, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Service Level Agreement</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">6.1 Project Timeline</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Project timelines are estimates and may vary based on complexity</li>
                <li>Delays caused by client feedback or content provision may extend timelines</li>
                <li>We will communicate any significant delays promptly</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">6.2 Support and Maintenance</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Support periods are specified in individual service agreements</li>
                <li>Emergency support may be available for additional fees</li>
                <li>Regular maintenance includes security updates and performance monitoring</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, arising from your use of our services.
              </p>
              <p className="text-gray-700 mb-4">
                Our total liability for any claims arising from our services shall not exceed the amount paid by you for the specific service giving rise to the claim.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Indemnification</h2>
              <p className="text-gray-700 mb-4">
                You agree to indemnify and hold us harmless from any claims, damages, losses, or expenses (including attorney's fees) arising from:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Your use of our services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Content you provide to us</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Privacy and Data Protection</h2>
              <p className="text-gray-700 mb-4">
                Your privacy is important to us. Our collection and use of personal information is governed by our <a href="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</a>, which is incorporated into these Terms by reference.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Termination</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">10.1 Termination by You</h3>
              <p className="text-gray-700 mb-4">
                You may terminate your use of our services at any time by providing written notice. Termination does not relieve you of any payment obligations for services already provided.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">10.2 Termination by Us</h3>
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your access to our services immediately, without prior notice, for any reason, including breach of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Force Majeure</h2>
              <p className="text-gray-700 mb-4">
                We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, government actions, or technical failures.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Governing Law and Dispute Resolution</h2>
              <p className="text-gray-700 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
              </p>
              <p className="text-gray-700 mb-4">
                We encourage resolving disputes through good faith negotiations before pursuing legal action.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Severability</h2>
              <p className="text-gray-700 mb-4">
                If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on our website. Your continued use of our services after such changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> legal@yourcompany.com</p>
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91-XXXXX-XXXXX</p>
                <p className="text-gray-700 mb-2"><strong>Address:</strong> Mumbai, Maharashtra, India</p>
                <p className="text-gray-700"><strong>Website:</strong> <a href="/" className="text-blue-600 hover:text-blue-800 underline">yourwebsite.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
