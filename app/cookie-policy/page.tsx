import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | Digital Marketing & Web Development Services',
  description: 'Cookie Policy for our digital marketing and web development services. Learn about how we use cookies and similar technologies.',
  keywords: 'cookie policy, cookies, tracking, analytics, digital marketing, web development',
  openGraph: {
    title: 'Cookie Policy | Digital Marketing & Web Development Services',
    description: 'Cookie Policy for our digital marketing and web development services. Learn about how we use cookies and similar technologies.',
    type: 'website',
  },
}

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What Are Cookies?</h2>
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
              <p className="text-gray-700 mb-4">
                Cookies allow a website to recognize a user's device and remember information about their visit, such as their preferred language and other settings. This can make your next visit easier and the site more useful to you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. Our use of cookies falls into the following categories:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Essential Cookies</h3>
                  <p className="text-gray-700 mb-3">These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.</p>
                  <ul className="list-disc pl-6 text-gray-700 text-sm">
                    <li>Session management</li>
                    <li>Security features</li>
                    <li>Load balancing</li>
                    <li>User authentication</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Analytics Cookies</h3>
                  <p className="text-gray-700 mb-3">These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
                  <ul className="list-disc pl-6 text-gray-700 text-sm">
                    <li>Google Analytics</li>
                    <li>Page views and sessions</li>
                    <li>User behavior tracking</li>
                    <li>Performance monitoring</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Functional Cookies</h3>
                  <p className="text-gray-700 mb-3">These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.</p>
                  <ul className="list-disc pl-6 text-gray-700 text-sm">
                    <li>Language preferences</li>
                    <li>Theme settings</li>
                    <li>Form data retention</li>
                    <li>User preferences</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Marketing Cookies</h3>
                  <p className="text-gray-700 mb-3">These cookies are used to track visitors across websites to display relevant and engaging advertisements.</p>
                  <ul className="list-disc pl-6 text-gray-700 text-sm">
                    <li>Ad targeting</li>
                    <li>Social media integration</li>
                    <li>Remarketing campaigns</li>
                    <li>Conversion tracking</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cookie Type</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Purpose</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Session Cookies</td>
                      <td className="border border-gray-300 px-4 py-3">Maintain your session while browsing</td>
                      <td className="border border-gray-300 px-4 py-3">Until browser closes</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">Persistent Cookies</td>
                      <td className="border border-gray-300 px-4 py-3">Remember your preferences</td>
                      <td className="border border-gray-300 px-4 py-3">Up to 2 years</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Google Analytics</td>
                      <td className="border border-gray-300 px-4 py-3">Website analytics and performance</td>
                      <td className="border border-gray-300 px-4 py-3">Up to 2 years</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">Social Media</td>
                      <td className="border border-gray-300 px-4 py-3">Social sharing and integration</td>
                      <td className="border border-gray-300 px-4 py-3">Up to 1 year</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Marketing</td>
                      <td className="border border-gray-300 px-4 py-3">Ad targeting and remarketing</td>
                      <td className="border border-gray-300 px-4 py-3">Up to 1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-700 mb-4">
                We may also use third-party services that set cookies on our website. These include:
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-medium text-gray-900">Google Analytics</h3>
                  <p className="text-gray-700">We use Google Analytics to analyze website traffic and user behavior. Google Analytics uses cookies to collect information about how visitors use our site.</p>
                  <p className="text-sm text-gray-600 mt-2">
                    <a href="https://policies.google.com/privacy" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-medium text-gray-900">Social Media Platforms</h3>
                  <p className="text-gray-700">We integrate with social media platforms like Facebook, Twitter, and LinkedIn, which may set their own cookies when you interact with social features.</p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-lg font-medium text-gray-900">Marketing Tools</h3>
                  <p className="text-gray-700">We may use marketing and advertising tools that set cookies to track conversions and optimize ad campaigns.</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Managing Your Cookie Preferences</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">5.1 Browser Settings</h3>
              <p className="text-gray-700 mb-4">
                You can control and manage cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>View and delete cookies</li>
                <li>Block cookies from specific websites</li>
                <li>Block third-party cookies</li>
                <li>Clear all cookies when you close your browser</li>
                <li>Receive notifications when cookies are set</li>
              </ul>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <p className="text-yellow-800">
                  <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website and your user experience.
                </p>
              </div>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.2 Browser-Specific Instructions</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Chrome</h4>
                  <p className="text-sm text-gray-700">Settings → Privacy and security → Cookies and other site data</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Firefox</h4>
                  <p className="text-sm text-gray-700">Options → Privacy & Security → Cookies and Site Data</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Safari</h4>
                  <p className="text-sm text-gray-700">Preferences → Privacy → Manage Website Data</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Edge</h4>
                  <p className="text-sm text-gray-700">Settings → Cookies and site permissions → Cookies and site data</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookie Consent</h2>
              <p className="text-gray-700 mb-4">
                When you first visit our website, you may see a cookie consent banner. By continuing to use our website after seeing this banner, you consent to our use of cookies as described in this policy.
              </p>
              <p className="text-gray-700 mb-4">
                You can withdraw your consent at any time by adjusting your browser settings or contacting us directly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Updates to This Cookie Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> support@digisolence.in</p>
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91 8949648309</p>
                <p className="text-gray-700 mb-2"><strong>Address:</strong> Mumbai, Maharashtra, India</p>
                <p className="text-gray-700"><strong>Website:</strong> <a href="https://www.digisolence.in" className="text-blue-600 hover:text-blue-800 underline">www.digisolence.in</a></p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Related Policies</h2>
              <p className="text-gray-700 mb-4">
                For more information about how we handle your personal information, please review our:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li><a href="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</a></li>
                <li><a href="/terms-of-service" className="text-blue-600 hover:text-blue-800 underline">Terms of Service</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
