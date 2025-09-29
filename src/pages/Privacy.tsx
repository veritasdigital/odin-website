import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black text-charcoal mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-lg max-w-none text-charcoal/80 space-y-6">
            <p className="text-sm text-charcoal/60 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">Information We Collect</h2>
              <p>
                When you contact us through our website forms, we collect information such as your name, 
                email address, phone number, and any message you provide. This information is used solely 
                to respond to your inquiry and provide you with our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to your inquiries and provide customer service</li>
                <li>To send you information about our services that you have requested</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">Cookies</h2>
              <p>
                Our website may use cookies to enhance your experience. You can choose to disable cookies 
                through your browser settings, though this may affect website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@odindigital.com" className="text-primary hover:underline">
                  privacy@odindigital.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;