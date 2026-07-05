import React from "react";

interface GalleryImageProps {
  src: string;
  label: string;
  category: string;
}

export const GalleryImage: React.FC<GalleryImageProps> = ({
  src,
  label,
  category,
}) => {
  return (
    <div className="relative group aspect-square rounded-[32px] overflow-hidden bg-zinc-950 border border-white/5 shadow-2xl cursor-pointer">
      {/* Imagem com cores reais desde o início */}
      <img
        src={src}
        alt={label}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      {/* Hover Dark Overlay and Content */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 z-20">
        <span className="text-[10px] font-bold text-gold-accent uppercase tracking-widest">
          {category}
        </span>
        <h3 className="text-white text-base font-bold tracking-tight mt-1">
          {label}
        </h3>
      </div>
    </div>
  );
};
export default GalleryImage;
