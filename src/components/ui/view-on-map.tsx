import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Loader2 } from 'lucide-react';

interface ViewOnMapProps {
  locationName?: string;
  address?: string;
  mapImageUrl?: string;
  className?: string;
}

export const ViewOnMap: React.FC<ViewOnMapProps> = ({
  address = '123 Performance Way, Los Angeles, CA 90210',
  className = '',
}) => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const publicMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className={`w-full max-w-[550px] aspect-square relative ${className}`}>
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent blur-3xl rounded-3xl -z-10 animate-pulse duration-[6000ms]"></div>
      
      {/* Outer Map Card */}
      <div 
        className="w-full h-full relative overflow-hidden bg-[#0c141c]/95 border border-white/10 rounded-[2rem] shadow-[0_0_50px_rgba(42,183,255,0.15)] hover:shadow-[0_0_60px_rgba(42,183,255,0.25)] transition-all duration-500"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 h-full w-full"
        >
          <iframe
            title="Google Map"
            width="100%"
            height="100%"
            style={{
              border: 0,
              // Dark mode filter for Google Maps iframe to match the premium theme
              filter: 'invert(90%) hue-rotate(180deg) contrast(1.1) brightness(0.9)',
            }}
            src={publicMapUrl}
            allowFullScreen
            onLoad={() => setIsMapLoaded(true)}
            className={`transition-opacity duration-1000 ${isMapLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        </motion.div>

        {/* High-tech custom loader for matching theme */}
        {!isMapLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#070b10] border border-white/5 rounded-[2rem]">
            <Loader2 className="h-10 w-10 animate-spin text-primary shadow-[0_0_15px_rgba(42,183,255,0.5)] mb-3" />
            <span className="text-xs uppercase tracking-widest text-white/50 font-semibold font-label-md">
              Configuring Coordinates...
            </span>
          </div>
        )}
      </div>
    </div>
  );
};