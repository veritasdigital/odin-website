import { Card } from "@/components/ui/card";

export const Credibility = () => {
  const stats = [
    {
      number: "$574 Million +",
      label: "in verified client revenue contribution"
    },
    {
      number: "540%",
      label: "average return on advertising investment"
    },
    {
      number: "283+",
      label: "successful campaigns across multiple industries"
    },
    {
      number: "95%",
      label: "client retention rate (our clients stay because they love us, we have NO lock in contracts)"
    }
  ];

  return (
    <section className="py-24 bg-accent/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-6">
            Comprehensive Digital Marketing Intelligence
          </h2>
          <p className="text-xl text-charcoal/70 max-w-4xl mx-auto leading-relaxed">
            Our approach to digital marketing success is built on thorough market analysis, competitive intelligence, and continuous performance optimization. We leverage advanced analytics and strategic insights to help you make informed decisions that drive meaningful business growth.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-charcoal text-center mb-12">Our Performance Metrics:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="p-8 text-center bg-white border border-charcoal/10 hover:border-primary/20 transition-colors">
                <div className="text-3xl md:text-4xl font-black text-primary mb-4">
                  {stat.number}
                </div>
                <div className="text-charcoal/70 font-medium leading-tight">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};