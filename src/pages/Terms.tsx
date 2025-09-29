import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black text-charcoal mb-8">
            Terms of Service
          </h1>
          <div className="prose prose-lg max-w-none text-charcoal/80 space-y-6">
            <p className="text-sm text-charcoal/60 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing and using Odin Digital's website and services, you accept and agree to 
                be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">2. Services</h2>
              <p>
                Odin Digital provides digital marketing services including but not limited to paid 
                advertising, search engine optimization, social media marketing, and marketing strategy 
                consulting.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">3. Client Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Respond to requests for information in a timely manner</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">4. Payment Terms</h2>
              <p>
                Payment terms will be specified in individual service agreements. We operate on a 
                month-to-month basis with no long-term contracts unless otherwise specified.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">5. Limitation of Liability</h2>
              <p>
                Odin Digital shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
                or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">6. Termination</h2>
              <p>
                Either party may terminate services with 30 days written notice. All outstanding 
                payments will be due upon termination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">7. Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:legal@odindigital.com" className="text-primary hover:underline">
                  legal@odindigital.com
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

export default Terms;