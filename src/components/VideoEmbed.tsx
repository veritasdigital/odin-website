import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

interface VideoEmbedProps {
  videoId: string;
  title: string;
  description?: string;
  className?: string;
}

export const VideoEmbed = ({ videoId, title, description, className = "" }: VideoEmbedProps) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Play className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-black">{title}</h2>
          </div>
          {description && (
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        <Card className="overflow-hidden bg-muted/30">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Card>
      </div>
    </section>
  );
};
