import { Button } from "@/components/ui/button";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import heroPerson from "@/assets/hero-person.webp";
import fox40Logo from "@/assets/media/fox40-logo.png";
import msnLogo from "@/assets/media/msn-logo.png";
import yahooFinanceLogo from "@/assets/media/yahoo-finance-logo.png";
import businessInsiderLogo from "@/assets/media/business-insider-logo.png";
import digitalJournalLogo from "@/assets/media/digital-journal-logo.png";
import chronicleJournalLogo from "@/assets/media/chronicle-journal-logo.png";
import ncnLogo from "@/assets/media/ncn-logo.png";
export const Hero = () => {
  const { openForm } = useMarketingForm();
  return <section className="relative isolate overflow-hidden min-h-screen flex items-center bg-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
      </div>
      
      {/* Split Screen Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 lg:gap-20 items-center min-h-screen py-24 lg:py-32">
          
          {/* Left Side - Text Content */}
          <div className="space-y-8 lg:space-y-10 animate-slide-up max-w-2xl">
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="relative z-30 overflow-visible text-4xl md:text-5xl xl:text-6xl font-black text-charcoal leading-[0.95] tracking-tight">
                <span className="block mb-3 lg:mb-4">Accelerate Your</span>
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent pb-2">
                  Digital Growth
                </span>
                <span className="block mt-3 lg:mt-4 text-3xl md:text-4xl xl:text-5xl">
                  With Strategic Marketing Excellence
                </span>
              </h1>
            </div>
            
            {/* Subtitle and Description */}
            <div className="space-y-6 lg:space-y-8">
              <h2 className="text-xl md:text-2xl lg:text-2xl text-charcoal/90 font-bold leading-tight max-w-2xl">
                Data-Driven Digital Marketing Solutions That Deliver Measurable Business Results
              </h2>
              
              <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed max-w-2xl font-light">
                At Odin Digital, we partner with ambitious businesses to develop and execute comprehensive digital marketing strategies that drive sustainable growth. Our evidence-based approach and proven methodologies have contributed to generating over $574 million in client revenue across diverse industries.
              </p>
            </div>
            
            {/* Action Button */}
            <div className="pt-2">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-12 py-6 shadow-glow"
                onClick={openForm}
              >
                Get Your FREE Marketing Strategy
              </Button>
            </div>
            
            {/* As Seen In Media Logos */}
            <div className="pt-8 mt-8 border-t border-charcoal/10">
              <div className="text-center mb-6">
                <h3 className="text-sm font-semibold text-charcoal/70 uppercase tracking-wider mb-4">
                  As Featured In
                </h3>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                <div className="flex items-center justify-center h-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={fox40Logo}
                    alt="FOX40 News"
                    className="h-6 w-auto max-w-[100px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center h-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={msnLogo}
                    alt="MSN"
                    className="h-6 w-auto max-w-[100px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center h-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={yahooFinanceLogo}
                    alt="Yahoo Finance"
                    className="h-6 w-auto max-w-[100px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center h-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={businessInsiderLogo}
                    alt="Business Insider"
                    className="h-6 w-auto max-w-[100px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center h-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={digitalJournalLogo}
                    alt="Digital Journal"
                    className="h-6 w-auto max-w-[100px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center h-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={chronicleJournalLogo}
                    alt="The Chronicle Journal"
                    className="h-6 w-auto max-w-[100px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center h-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={ncnLogo}
                    alt="NCN"
                    className="h-6 w-auto max-w-[100px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Person Image */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Person Image */}
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white shadow-lg">
                <img src={heroPerson} alt="Alexa Blake, Odin Digital General Manager" className="w-full h-full object-cover object-center" />
              </div>
              
              {/* Floating Glassy Banner */}
              <div className="absolute bottom-8 -left-4 right-8 bg-white/80 backdrop-blur-lg border border-white/40 rounded-xl shadow-lg p-4 z-10">
                <div className="text-charcoal">
                  <h3 className="font-bold text-lg">Alexa Blake</h3>
                  <p className="text-sm text-charcoal/70">Odin Digital General Manager</p>
                </div>
              </div>
              
              {/* Decorative elements around image */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-secondary/20 rounded-lg animate-float" style={{
              animationDelay: '2s'
            }}></div>
              <div className="absolute top-1/3 -left-8 w-6 h-6 bg-accent/30 rounded-full animate-float" style={{
              animationDelay: '4s'
            }}></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>;
};