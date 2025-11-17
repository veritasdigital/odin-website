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
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tuwX_JO3KD7jYqPdXg&q=${coordinates.lat},${coordinates.lng}&zoom=13`;

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="w-5 h-5 text-primary" />
        <h3 className="text-xl font-semibold text-charcoal">Our {city} Service Area</h3>
      </div>
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-border shadow-sm">
        <iframe
          title={`${city} Location Map`}
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
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
