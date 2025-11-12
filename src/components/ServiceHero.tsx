import { ReactNode } from "react";

interface ServiceHeroProps {
  h1: string | ReactNode;
  subheadline: string | ReactNode;
  className?: string;
}

export const ServiceHero = ({ h1, subheadline, className = "" }: ServiceHeroProps) => {
  return (
    <section className={`relative isolate overflow-hidden py-24 sm:py-32 bg-gradient-to-br from-white via-muted/30 to-muted/20 ${className}`}>
      {/* Animated Background Blobs - Using primary/accent colors like homepage */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2.2s" }} />
      
      {/* Floating Particles */}
      <div className="absolute top-32 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float"></div>
      <div className="absolute top-64 right-1/3 w-3 h-3 bg-accent/30 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-48 left-1/2 w-2 h-2 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 right-1/2 w-2 h-2 bg-accent/25 rounded-full animate-float" style={{ animationDelay: "1.5s" }}></div>
      
      {/* Floating Circles - Using primary/accent colors like homepage */}
      <div className="absolute top-32 left-1/4 w-16 h-16 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full animate-float shadow-lg" />
      <div className="absolute top-64 right-1/3 w-20 h-20 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full animate-float shadow-lg" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-48 left-1/2 w-12 h-12 bg-primary/15 backdrop-blur-sm border border-primary/25 rounded-full animate-float shadow-lg" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-1/5 w-14 h-14 bg-accent/15 backdrop-blur-sm border border-accent/25 rounded-full animate-float shadow-lg" style={{ animationDelay: "2.8s" }} />
      
      {/* Geometric Shapes - Using primary/accent colors like homepage */}
      <div className="absolute top-40 right-1/4 w-24 h-24 bg-primary/15 backdrop-blur-sm border border-primary/25 rounded-lg rotate-45 animate-float shadow-lg" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-accent/15 backdrop-blur-sm border border-accent/25 rounded-full animate-float shadow-lg" style={{ animationDelay: "2.5s" }} />
      <div className="absolute top-1/4 left-1/5 w-20 h-20 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-lg rotate-12 animate-float shadow-lg" style={{ animationDelay: "3.2s" }} />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            {h1}
          </h1>
          <div className="hero-sub-headline mt-6 text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {subheadline}
          </div>
        </div>
      </div>
    </section>
  );
};
