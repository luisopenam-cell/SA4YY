import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ProductCardProps {
  id?: string;
  title: string | React.ReactNode;
  description: string;
  image: string;
  accent?: "adblue" | "sunoco";
  large?: boolean;
}

const ProductCard = ({ title, description, image, accent = "adblue", large }: ProductCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`bg-card rounded-lg overflow-hidden shadow-md card-hover border ${large ? "md:col-span-2 lg:col-span-full" : ""}`}>
      <div className={`relative overflow-hidden ${large ? "h-48 md:h-64" : "h-44 md:h-52"}`}>
        <img src={image} alt={typeof title === 'string' ? title : 'Producto'} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
      </div>
      <div className="p-5 md:p-6">
        <h3 className={`font-heading font-bold text-lg md:text-xl mb-2 ${accent === "sunoco" ? "text-sunoco-red" : "text-accent"}`}>
          {title}
        </h3>
        <p className={`text-muted-foreground text-sm leading-relaxed ${expanded ? "" : "line-clamp-3"}`}>
          {description}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className={`mt-3 flex items-center gap-1 text-sm font-semibold ${accent === "sunoco" ? "text-sunoco-red" : "text-accent"} hover:underline`}
        >
          {expanded ? "Ver menos" : "Más información"}
          <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
