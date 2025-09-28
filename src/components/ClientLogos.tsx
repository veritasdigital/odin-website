import { Card } from "@/components/ui/card";

// Import actual client logos
import lifeInsuranceDirect from "@/assets/logos/life-insurance-direct.png";
import onyaThinkReusable from "@/assets/logos/onya-think-reusable.png";
import mCube from "@/assets/logos/m-cube.png";
import pw from "@/assets/logos/pw.png";
import smilesOfRyde from "@/assets/logos/smiles-of-ryde.png";
import renudeLaserClinic from "@/assets/logos/renude-laser-clinic.png";
import derwentValleyCouncil from "@/assets/logos/derwent-valley-council.png";
import bulkBuys from "@/assets/logos/bulk-buys.png";
import astonLegalGroup from "@/assets/logos/aston-legal-group.png";
import adriatic from "@/assets/logos/adriatic.png";

export const ClientLogos = () => {
  // Client logos with actual images
  const clientLogos = [
    // Row 1 - Real client logos
    [
      { logo: lifeInsuranceDirect, alt: "Life Insurance Direct" },
      { logo: onyaThinkReusable, alt: "Onya Think Reusable" },
      { logo: mCube, alt: "M Cube" },
      { logo: pw, alt: "PW" },
      { logo: smilesOfRyde, alt: "Smiles of Ryde" },
      { logo: renudeLaserClinic, alt: "Renude Laser Clinic" },
      { logo: derwentValleyCouncil, alt: "Derwent Valley Council" },
      { logo: bulkBuys, alt: "Bulk Buys" },
      { logo: astonLegalGroup, alt: "Aston Legal Group" },
      { logo: adriatic, alt: "Adriatic" },
    ],
    // Row 2 - Placeholder colored boxes
    [
      { placeholder: "Tech Solutions", color: "bg-blue-500" },
      { placeholder: "Premier Hotels", color: "bg-green-500" },
      { placeholder: "Urban Dev", color: "bg-purple-500" },
      { placeholder: "Fitness Rev", color: "bg-red-500" },
      { placeholder: "Legal Experts", color: "bg-indigo-500" },
      { placeholder: "Auto Excellence", color: "bg-yellow-500" },
      { placeholder: "Food Network", color: "bg-pink-500" },
      { placeholder: "Education First", color: "bg-teal-500" },
    ],
    // Row 3 - Placeholder colored boxes
    [
      { placeholder: "Creative Studios", color: "bg-orange-500" },
      { placeholder: "Construction Pro", color: "bg-gray-500" },
      { placeholder: "Travel Masters", color: "bg-cyan-500" },
      { placeholder: "Security Sol", color: "bg-emerald-500" },
      { placeholder: "Media Group", color: "bg-violet-500" },
      { placeholder: "Transport Co", color: "bg-rose-500" },
      { placeholder: "Beauty Brands", color: "bg-fuchsia-500" },
      { placeholder: "Sports Elite", color: "bg-lime-500" },
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
                  <Card key={`${rowIndex}-${index}`} className="flex-shrink-0 p-6 bg-white/80 backdrop-blur-sm border border-charcoal/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group min-w-[200px] h-24">
                    <div className="flex items-center justify-center h-full">
                      {client.logo ? (
                        <img 
                          src={client.logo} 
                          alt={client.alt}
                          className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      ) : (
                        <div className={`w-16 h-16 ${client.color} rounded-lg flex items-center justify-center`}>
                          <span className="text-white font-bold text-sm">
                            {client.placeholder?.substring(0, 2)}
                          </span>
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
                {/* Duplicate set for seamless loop */}
                {row.map((client, index) => (
                  <Card key={`${rowIndex}-${index}-duplicate`} className="flex-shrink-0 p-6 bg-white/80 backdrop-blur-sm border border-charcoal/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group min-w-[200px] h-24">
                    <div className="flex items-center justify-center h-full">
                      {client.logo ? (
                        <img 
                          src={client.logo} 
                          alt={client.alt}
                          className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      ) : (
                        <div className={`w-16 h-16 ${client.color} rounded-lg flex items-center justify-center`}>
                          <span className="text-white font-bold text-sm">
                            {client.placeholder?.substring(0, 2)}
                          </span>
                        </div>
                      )}
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