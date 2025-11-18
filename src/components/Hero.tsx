import { Button } from "@/components/ui/button";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import heroPerson from "@/assets/hero-person-new.png";
import brandIconVibrant from "@/assets/brand-icon-vibrant.png";
import brandIconSubtle from "@/assets/brand-icon-subtle.png";
import fox40Logo from "@/assets/media/fox40-logo.png";
import msnLogo from "@/assets/media/msn-logo.png";
import yahooFinanceLogo from "@/assets/media/yahoo-finance-logo.png";
import businessInsiderLogo from "@/assets/media/business-insider-logo.png";
import digitalJournalLogo from "@/assets/media/digital-journal-logo.png";
import chronicleJournalLogo from "@/assets/media/chronicle-journal-logo.png";
import ncnLogo from "@/assets/media/ncn-logo.png";

export const Hero = () => {
  const { openForm } = useMarketingForm();
  
  return <section className="relative isolate overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-background via-background to-muted/10">
      
      {/* Decorative Brand Icon - Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img 
          src={brandIconSubtle} 
          alt="" 
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] opacity-20 animate-[spin_25s_linear_infinite_reverse]"
        />
      </div>
      
      {/* Split Screen Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 lg:gap-20 items-center min-h-screen py-24 lg:py-32">
          
          {/* Left Side - Text Content */}
          <div className="space-y-8 lg:space-y-10 max-w-2xl">
            {/* Main Headline */}
            <div className="space-y-6 animate-fade-in">
              <h1 className="relative z-30 overflow-visible text-4xl md:text-5xl xl:text-6xl font-black text-charcoal leading-[0.95] tracking-tight">
                <span className="block mb-3 lg:mb-4 animate-fade-in">Accelerate Your</span>
                <span className="block bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent pb-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  Digital Growth
                </span>
                <span className="block mt-3 lg:mt-4 text-3xl md:text-4xl xl:text-5xl animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  With Strategic Marketing Excellence
                </span>
              </h1>
            </div>
            
            {/* Subtitle and Description */}
            <div className="space-y-6 lg:space-y-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <p className="text-xl md:text-2xl lg:text-2xl text-charcoal/90 font-bold leading-tight max-w-2xl">
                Data-Driven Digital Marketing Solutions That Deliver Measurable Business Results
              </p>
              
              <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed max-w-2xl font-light">
                At Odin Digital, we partner with ambitious businesses to develop and execute comprehensive digital marketing strategies that drive sustainable growth. Our evidence-based approach and proven methodologies have contributed to generating over $574 million in client revenue across diverse industries.
              </p>
            </div>
            
            {/* Action Button */}
            <div className="pt-2 animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-12 py-6 shadow-glow hover:shadow-primary hover:scale-105 transition-all duration-300"
                onClick={openForm}
              >
                Get Your FREE Marketing Strategy
              </Button>
            </div>
            
            {/* As Seen In Media Logos */}
            <div className="pt-8 mt-8 border-t border-charcoal/10 animate-fade-in" style={{ animationDelay: "1s" }}>
              <div className="text-center mb-6">
                <p className="text-sm font-semibold text-charcoal/70 uppercase tracking-wider mb-4">
                  As Featured In
                </p>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                <div className="flex items-center justify-center h-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={fox40Logo}
                    alt="FOX40 News - As featured in national media outlet"
                    className="h-6 w-auto max-w-[100px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    width="92"
                    height="24"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-center h-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={msnLogo}
                    alt="MSN - As featured in Microsoft news network"
                    className="h-6 w-auto max-w-[100px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    width="62"
                    height="24"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-center h-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={yahooFinanceLogo}
                    alt="Yahoo Finance - Featured business and finance news publication"
                    className="h-6 w-auto max-w-[100px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    width="65"
                    height="24"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-center h-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={businessInsiderLogo}
                    alt="Business Insider - Leading global business news publication"
                    className="h-6 w-auto max-w-[100px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    width="75"
                    height="24"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-center h-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={digitalJournalLogo}
                    alt="Digital Journal - International digital news and media outlet"
                    className="h-6 w-auto max-w-[100px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    width="58"
                    height="24"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-center h-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={chronicleJournalLogo}
                    alt="The Chronicle Journal - Canadian news publication"
                    className="h-6 w-auto max-w-[100px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    width="41"
                    height="24"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-center h-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={ncnLogo}
                    alt="NCN News - National communications network"
                    className="h-6 w-auto max-w-[100px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    width="52"
                    height="24"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Person Image */}
          <div className="relative flex items-center justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative w-full max-w-lg">
              {/* Gradient Ring */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl blur-2xl transform scale-105 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
              
              {/* Person Image */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-white shadow-2xl ring-1 ring-primary/10 transform hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src={heroPerson} 
                  alt="Professional digital marketing strategist working on successful campaign analytics and performance metrics" 
                  className="w-full h-full object-cover object-center"
                  width="600"
                  height="800"
                  fetchPriority="high"
                />
              </div>
              
              {/* Floating Glassy Banner */}
              <div className="absolute bottom-8 -left-4 right-8 bg-white/90 backdrop-blur-xl border border-white/60 rounded-xl shadow-2xl p-4 z-10 transform hover:scale-105 transition-all duration-300">
                <div className="text-charcoal">
                  <h3 className="font-bold text-lg bg-gradient-to-r from-charcoal to-charcoal/80 bg-clip-text">Alexa Blake</h3>
                  <p className="text-sm text-charcoal/70">Odin Digital General Manager</p>
                </div>
              </div>
              
              {/* Enhanced Decorative elements around image */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/40 rounded-lg animate-float shadow-lg" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/3 -left-8 w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg" style={{ animationDelay: '4s' }}></div>
              <div className="absolute top-16 -right-6 w-6 h-6 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg" style={{ animationDelay: '3s' }}></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>;
};