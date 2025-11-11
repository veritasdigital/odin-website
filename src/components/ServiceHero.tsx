import { ReactNode } from "react";

interface ServiceHeroProps {
  h1: string | ReactNode;
  subheadline: string | ReactNode;
  className?: string;
}

export const ServiceHero = ({ h1, subheadline, className = "" }: ServiceHeroProps) => {
  return (
    <section className={`relative isolate overflow-hidden py-24 sm:py-32 bg-gradient-to-br from-white via-muted/30 to-muted/20 ${className}`}>
      {/* Animated Background Blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-muted/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-muted/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-muted/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "3s" }} />
      
      {/* Floating Particles */}
      <div className="absolute top-32 left-1/4 w-2 h-2 bg-muted/20 rounded-full animate-float"></div>
      <div className="absolute top-64 right-1/3 w-3 h-3 bg-muted/25 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-48 left-1/2 w-2 h-2 bg-muted/15 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      
      {/* Floating Circles */}
      <div className="absolute top-32 left-1/4 w-16 h-16 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg" />
      <div className="absolute top-64 right-1/3 w-20 h-20 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-48 left-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg" style={{ animationDelay: "2s" }} />
      
      {/* Geometric Shapes */}
      <div className="absolute top-40 right-1/4 w-24 h-24 bg-white/20 backdrop-blur-sm border border-white/40 rounded-lg rotate-45 animate-float shadow-lg" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg" style={{ animationDelay: "2.5s" }} />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-charcoal sm:text-6xl">
            {h1}
          </h1>
          <div className="hero-sub-headline mt-6 text-xl text-charcoal/70 leading-relaxed max-w-3xl mx-auto">
            {subheadline}
          </div>
        </div>
      </div>
    </section>
  );
};
