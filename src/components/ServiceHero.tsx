import { ReactNode } from "react";

interface ServiceHeroProps {
  h1: string | ReactNode;
  subheadline: string | ReactNode;
  className?: string;
}

export const ServiceHero = ({ h1, subheadline, className = "" }: ServiceHeroProps) => {
  return (
    <section className={`relative isolate overflow-hidden py-12 sm:py-16 md:py-24 bg-gradient-to-br from-background via-background to-muted/10 ${className}`}>
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
