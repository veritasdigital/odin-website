import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import contentMatrixImage from "@/assets/content-marketing-matrix.jpg";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <article className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              The Content Marketing Matrix: A Simple Framework for Creating Content That Attracts, Engages, and Converts
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground mb-8">
              <span>By Odin Digital</span>
              <span>•</span>
              <time>Marketing Strategy</time>
            </div>
            <img 
              src={contentMatrixImage} 
              alt="Content Marketing Matrix Framework" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Content marketing can often feel like a chaotic, never-ending treadmill. You're constantly creating, publishing, and promoting, but are you getting the results you deserve? For many businesses, the answer is a frustrating "no." The problem isn't a lack of effort; it's a lack of strategy.
            </p>

            <p className="mb-6">
              Without a clear framework, content creation becomes a reactive, tactical exercise rather than a strategic, results-driven one. To solve this, we at Odin Digital have developed <strong>The Content Marketing Matrix</strong>, a simple yet powerful framework designed to bring clarity, focus, and strategic intent to your content efforts.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Understanding the Two Dimensions of the Matrix</h2>
            
            <p className="mb-4">The Content Marketing Matrix is built on two key dimensions:</p>
            
            <ol className="list-decimal list-inside mb-6 space-y-2">
              <li><strong>The Customer Journey:</strong> This axis maps the stages a potential customer goes through, from initial awareness of a problem to the final purchase decision and beyond. We break this down into four key stages: Awareness, Consideration, Decision, and Loyalty.</li>
              <li><strong>The Content Format:</strong> This axis represents the different types of content you can create, categorized by their primary purpose. We simplify this into two broad categories: Emotional (content that connects and builds brand) and Rational (content that educates and provides logical reasons to buy).</li>
            </ol>

            <p className="mb-8">By plotting these two dimensions on a grid, we create a powerful tool for strategic content planning.</p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">The Four Quadrants of the Content Marketing Matrix</h2>

            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold text-primary mb-3">Quadrant 1: Attract (Awareness + Emotional)</h3>
                <p className="text-sm text-muted-foreground mb-4"><strong>Goal:</strong> To capture the attention of a broad audience and make them aware of your brand.</p>
                <p className="mb-4">In this quadrant, the goal is to create highly shareable, emotionally resonant content that introduces your brand to new audiences.</p>
                <p className="text-sm font-medium">Content Examples:</p>
                <ul className="text-sm list-disc list-inside space-y-1 mt-2">
                  <li>Viral Videos</li>
                  <li>Inspirational Social Media Posts</li>
                  <li>Brand Storytelling</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold text-primary mb-3">Quadrant 2: Educate (Awareness + Rational)</h3>
                <p className="text-sm text-muted-foreground mb-4"><strong>Goal:</strong> To provide value and establish your brand as a credible authority.</p>
                <p className="mb-4">Here, you are still targeting a top-of-funnel audience, but the approach is more educational.</p>
                <p className="text-sm font-medium">Content Examples:</p>
                <ul className="text-sm list-disc list-inside space-y-1 mt-2">
                  <li>Comprehensive "How-To" Guides</li>
                  <li>Informative Infographics</li>
                  <li>Educational Webinars</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold text-primary mb-3">Quadrant 3: Convince (Consideration/Decision + Rational)</h3>
                <p className="text-sm text-muted-foreground mb-4"><strong>Goal:</strong> To help potential customers logically justify a purchase decision.</p>
                <p className="mb-4">As prospects move deeper into the funnel, they need proof. This quadrant provides hard data and logical arguments.</p>
                <p className="text-sm font-medium">Content Examples:</p>
                <ul className="text-sm list-disc list-inside space-y-1 mt-2">
                  <li>Detailed Case Studies</li>
                  <li>Product Comparison Guides</li>
                  <li>ROI Calculators</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold text-primary mb-3">Quadrant 4: Delight (Decision/Loyalty + Emotional)</h3>
                <p className="text-sm text-muted-foreground mb-4"><strong>Goal:</strong> To turn customers into loyal fans and brand advocates.</p>
                <p className="mb-4">Your content marketing doesn't stop after the sale. This quadrant focuses on reinforcing the customer's decision.</p>
                <p className="text-sm font-medium">Content Examples:</p>
                <ul className="text-sm list-disc list-inside space-y-1 mt-2">
                  <li>Exclusive Customer-Only Content</li>
                  <li>Customer Success Stories</li>
                  <li>Personalized Thank-You Videos</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">How to Use the Matrix</h2>
            
            <ol className="list-decimal list-inside mb-6 space-y-4">
              <li><strong>Audit Your Existing Content:</strong> Take all of your existing content and plot it on the matrix. This will quickly reveal gaps in your strategy. Are you creating a lot of "Attract" content but nothing to "Convince"? Are you neglecting your existing customers in the "Delight" quadrant?</li>
              <li><strong>Brainstorm New Content Ideas:</strong> Use the matrix as a brainstorming tool. Challenge your team to come up with at least three new content ideas for each of the four quadrants.</li>
              <li><strong>Build a Balanced Content Calendar:</strong> As you plan your content calendar, ensure you have a healthy mix of content from all four quadrants. This will ensure you are constantly attracting new prospects, nurturing them through the funnel, and delighting your existing customers.</li>
            </ol>

            <div className="bg-primary/5 border-l-4 border-primary p-6 my-8">
              <p className="text-foreground">
                The Content Marketing Matrix is not a rigid set of rules; it's a flexible framework for strategic thinking. By using it to guide your content creation, you can move from a state of chaotic content creation to one of strategic, purposeful, and ultimately, profitable content marketing.
              </p>
            </div>

            <div className="text-center bg-card p-8 rounded-lg border mt-12">
              <h3 className="text-xl font-semibold text-foreground mb-4">Ready to build a content strategy that drives real results?</h3>
              <p className="text-muted-foreground mb-6">Contact Odin Digital today, and let's map out your matrix for success.</p>
              <a 
                href="/#contact" 
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90 transition-colors"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;