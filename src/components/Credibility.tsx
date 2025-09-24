import { Card } from "@/components/ui/card";

export const Credibility = () => {
  const stats = [
    { value: "$50,000,000+", label: "in verified client revenue generated" },
    { value: "340%", label: "average return on advertising investment" },
    { value: "200+", label: "successful campaigns across diverse industries" },
    { value: "95%", label: "client retention rate over 24 months" }
  ];

  return (
    <section className="py-24 bg-accent text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            The All-Seeing Approach to Digital Dominance
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Like Odin's ravens Huginn and Muninn, we gather intelligence from every corner of the digital realm. 
            Our comprehensive analytics and strategic insights give you the wisdom to make decisions that drive real business growth.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">Our Track Record:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="p-8 text-center bg-white/10 backdrop-blur-sm border-white/20 shadow-card">
                <div className="text-3xl md:text-4xl font-black text-white mb-4">{stat.value}</div>
                <p className="text-white/80 text-sm leading-relaxed">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Ravens Visual Element */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-8 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🐦‍⬛</span>
              </div>
              <p className="text-sm font-semibold">Huginn</p>
              <p className="text-xs text-white/60">Thought & Strategy</p>
            </div>
            <div className="text-white/40">⚡</div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🐦‍⬛</span>
              </div>
              <p className="text-sm font-semibold">Muninn</p>
              <p className="text-xs text-white/60">Memory & Data</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};