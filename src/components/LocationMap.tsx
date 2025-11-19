import { MapPin } from "lucide-react";

interface LocationMapProps {
  city: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  address?: string;
}

const LocationMap = ({ city, coordinates, address }: LocationMapProps) => {
  // Using Google Maps link instead of embed due to API key requirements
  const mapsUrl = `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}&z=13`;

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="w-5 h-5 text-primary" />
        <h3 className="text-xl font-semibold text-charcoal">Our {city} Service Area</h3>
      </div>
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-border shadow-sm bg-muted/10">
        <a 
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center h-full hover:bg-muted/20 transition-colors"
        >
          <MapPin className="w-16 h-16 text-primary mb-4" />
          <p className="text-lg font-semibold text-charcoal mb-2">View {city} Service Area</p>
          <p className="text-sm text-muted-foreground">Click to open in Google Maps</p>
        </a>
      </div>
      {address && (
        <p className="mt-4 text-sm text-muted-foreground flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          {address}
        </p>
      )}
    </div>
  );
};

export default LocationMap;
