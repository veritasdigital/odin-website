import { Card } from "@/components/ui/card";

// Import actual client logos - Row 1
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

// Import actual client logos - Row 2
import turbosoft from "@/assets/logos/turbosoft.png";
import hardmanCommunications from "@/assets/logos/hardman-communications.png";
import sphere from "@/assets/logos/sphere.png";
import adacsSecurity from "@/assets/logos/adacs-security.png";
import aletheiaAndPhos from "@/assets/logos/aletheia-phos.png";
import ycl from "@/assets/logos/ycl.png";
import chiropracticLife from "@/assets/logos/chiropractic-life.png";
import totallySmiles from "@/assets/logos/totally-smiles.png";
import doomJuice from "@/assets/logos/doom-juice.png";
import theBanyans from "@/assets/logos/the-banyans.png";

// Import actual client logos - Row 3
import elevateDental from "@/assets/logos/elevate-dental.png";
import adaptiveChiropractic from "@/assets/logos/adaptive-chiropractic.png";
import growthForum from "@/assets/logos/growth-forum.png";
import sal from "@/assets/logos/sal.png";
import removify from "@/assets/logos/removify.png";
import turbosoftAlt from "@/assets/logos/turbosoft-alt.png";
import gemcutterAnalytics from "@/assets/logos/gemcutter-analytics.png";
import duttonGroup from "@/assets/logos/dutton-group.png";
import poseidonEquine from "@/assets/logos/poseidon-equine.png";
import birthBeat from "@/assets/logos/birth-beat.png";

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
    // Row 2 - Real client logos
    [
      { logo: turbosoft, alt: "Turbosoft" },
      { logo: hardmanCommunications, alt: "Hardman Communications" },
      { logo: sphere, alt: "Sphere" },
      { logo: adacsSecurity, alt: "ADACS Security" },
      { logo: aletheiaAndPhos, alt: "Aletheia & Phos" },
      { logo: ycl, alt: "YCL" },
      { logo: chiropracticLife, alt: "Chiropractic Life" },
      { logo: totallySmiles, alt: "Totally Smiles" },
      { logo: doomJuice, alt: "Doom Juice" },
      { logo: theBanyans, alt: "The Banyans" },
    ],
    // Row 3 - Real client logos
    [
      { logo: elevateDental, alt: "Elevate Dental" },
      { logo: adaptiveChiropractic, alt: "Adaptive Chiropractic" },
      { logo: growthForum, alt: "Growth Forum" },
      { logo: sal, alt: "SAL" },
      { logo: removify, alt: "Removify" },
      { logo: turbosoftAlt, alt: "Turbosoft" },
      { logo: gemcutterAnalytics, alt: "Gemcutter Analytics" },
      { logo: duttonGroup, alt: "Dutton Group" },
      { logo: poseidonEquine, alt: "Poseidon Equine" },
      { logo: birthBeat, alt: "Birth Beat" },
    ],
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-slate-50 to-white border-b border-charcoal/5">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-black text-charcoal mb-4 leading-tight">
            Trusted by Leading Australian Businesses
          </h2>
          <p className="text-base text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
            Join 283+ companies that have transformed their marketing
          </p>
        </div>

        {/* Scrolling Logo Rows */}
        <div className="space-y-4 overflow-hidden">
          {clientLogos.map((row, rowIndex) => (
            <div key={rowIndex} className="relative">
              <div 
                className={`flex gap-4 ${rowIndex % 2 === 0 ? 'animate-scroll-right' : 'animate-scroll-left'}`}
                style={{
                  width: 'calc(200% + 2rem)',
                }}
              >
                {/* First set of logos */}
                {row.map((client, index) => (
                  <Card key={`${rowIndex}-${index}`} className="flex-shrink-0 p-4 bg-white/80 backdrop-blur-sm border border-charcoal/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group min-w-[160px] h-20">
                    <div className="flex items-center justify-center h-full">
                      <img 
                        src={client.logo} 
                        alt={client.alt}
                        className="w-24 h-12 object-contain grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-300"
                      />
                    </div>
                  </Card>
                ))}
                {/* Duplicate set for seamless loop */}
                {row.map((client, index) => (
                  <Card key={`${rowIndex}-${index}-duplicate`} className="flex-shrink-0 p-4 bg-white/80 backdrop-blur-sm border border-charcoal/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group min-w-[160px] h-20">
                    <div className="flex items-center justify-center h-full">
                      <img 
                        src={client.logo} 
                        alt={client.alt}
                        className="w-24 h-12 object-contain grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-300"
                      />
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