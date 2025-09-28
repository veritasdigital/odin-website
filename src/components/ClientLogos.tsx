import { Card } from "@/components/ui/card";

export const ClientLogos = () => {
  // Sample client logos - these would be replaced with actual logo images
  const clientLogos = [
    // Row 1
    [
      { name: "TechFlow Solutions", industry: "Technology" },
      { name: "Luxe Lifestyle", industry: "E-commerce" },
      { name: "Elite Consulting", industry: "Professional Services" },
      { name: "Industrial Solutions", industry: "Manufacturing" },
      { name: "Green Energy Co", industry: "Energy" },
      { name: "Financial Partners", industry: "Finance" },
      { name: "Health Plus", industry: "Healthcare" },
      { name: "Retail Giants", industry: "Retail" },
    ],
    // Row 2
    [
      { name: "Smart Analytics", industry: "Technology" },
      { name: "Premier Hotels", industry: "Hospitality" },
      { name: "Urban Development", industry: "Real Estate" },
      { name: "Fitness Revolution", industry: "Health & Fitness" },
      { name: "Legal Experts", industry: "Legal Services" },
      { name: "Auto Excellence", industry: "Automotive" },
      { name: "Food Network", industry: "Food & Beverage" },
      { name: "Education First", industry: "Education" },
    ],
    // Row 3
    [
      { name: "Creative Studios", industry: "Creative" },
      { name: "Construction Pro", industry: "Construction" },
      { name: "Travel Masters", industry: "Travel" },
      { name: "Security Solutions", industry: "Security" },
      { name: "Media Group", industry: "Media" },
      { name: "Transport Co", industry: "Logistics" },
      { name: "Beauty Brands", industry: "Beauty" },
      { name: "Sports Elite", industry: "Sports" },
    ],
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-white border-b border-charcoal/5">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-charcoal mb-6 leading-tight">
            Trusted by Leading Australian Businesses From Startups To Billion Dollar Companies
          </h2>
          <p className="text-lg md:text-xl text-charcoal/70 max-w-4xl mx-auto leading-relaxed">
            Join 283+ companies that have transformed their marketing with our proven strategies that produce tangible outcomes
          </p>
        </div>

        {/* Scrolling Logo Rows */}
        <div className="space-y-8 overflow-hidden">
          {clientLogos.map((row, rowIndex) => (
            <div key={rowIndex} className="relative">
              <div 
                className={`flex gap-8 ${rowIndex % 2 === 0 ? 'animate-scroll-right' : 'animate-scroll-left'}`}
                style={{
                  width: 'calc(200% + 2rem)',
                }}
              >
                {/* First set of logos */}
                {row.map((client, index) => (
                  <Card key={`${rowIndex}-${index}`} className="flex-shrink-0 p-6 bg-white/80 backdrop-blur-sm border border-charcoal/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group min-w-[280px]">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl font-black text-primary">
                          {client.name.split(' ').map(word => word.charAt(0)).join('')}
                        </span>
                      </div>
                      <h3 className="font-bold text-charcoal text-lg mb-1">{client.name}</h3>
                      <p className="text-sm text-charcoal/60">{client.industry}</p>
                    </div>
                  </Card>
                ))}
                {/* Duplicate set for seamless loop */}
                {row.map((client, index) => (
                  <Card key={`${rowIndex}-${index}-duplicate`} className="flex-shrink-0 p-6 bg-white/80 backdrop-blur-sm border border-charcoal/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group min-w-[280px]">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl font-black text-primary">
                          {client.name.split(' ').map(word => word.charAt(0)).join('')}
                        </span>
                      </div>
                      <h3 className="font-bold text-charcoal text-lg mb-1">{client.name}</h3>
                      <p className="text-sm text-charcoal/60">{client.industry}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};