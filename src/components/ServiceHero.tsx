import { ReactNode } from "react";

interface ServiceHeroProps {
  h1: string | ReactNode;
  subheadline: string | ReactNode;
  className?: string;
}

export const ServiceHero = ({ h1, subheadline, className = "" }: ServiceHeroProps) => {
  return (
    <section className={`relative isolate overflow-hidden mt-20 py-12 sm:py-16 md:py-24 bg-gradient-to-br from-white via-muted/30 to-muted/20 ${className}`}>
      {/* Large animated background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-muted/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: '4s' }}></div>
      
      {/* Floating circles - multiple sizes */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute top-32 right-32 w-12 h-12 bg-primary/15 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-1/4 w-14 h-14 bg-accent/15 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 left-10 w-10 h-10 bg-primary/25 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/3 right-10 w-12 h-12 bg-accent/25 rounded-full animate-float" style={{ animationDelay: '5s' }}></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-1/4 left-1/3 w-24 h-24 border-2 border-primary/10 rounded-lg rotate-12 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/3 w-28 h-28 border-2 border-accent/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 border-2 border-primary/15 rounded-lg -rotate-12 animate-float" style={{ animationDelay: '3s' }}></div>
      <div className="absolute bottom-1/3 left-1/4 w-20 h-20 border-2 border-accent/15 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
      
      {/* Small floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-float"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-accent/40 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-2/3 w-2 h-2 bg-primary/35 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50 pointer-events-none"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl md:text-5xl lg:text-6xl animate-fade-in">
            {h1}
          </h1>
          <div className="hero-sub-headline mt-6 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {subheadline}
          </div>
        </div>
      </div>
    </section>
  );
};
