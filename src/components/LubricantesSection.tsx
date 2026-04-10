import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { ChevronDown } from "lucide-react";

interface Category {
  title: string;
  image: string;
  description: string;
  subcategories?: { title: string; description: string }[];
}

const categories: Category[] = [
  {
    title: "Automoción",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=300&fit=crop",
    description: "Aceites de motor, lubricantes de moto, vehículos pesados y fluidos de transmisión.",
    subcategories: [
      { title: "Aceites de Motor — Synturo", description: "La gama de élite. Aceites 100% sintéticos de ultra-alto rendimiento para motores de última generación. Máxima protección en condiciones extremas de temperatura y presión." },
      { title: "Aceites de Motor — Titanium", description: "Gama semisintética de alto rendimiento para motores modernos. Excelente relación calidad-precio. Cumple todas las especificaciones ACEA y homologaciones de fabricante." },
      { title: "Aceites de Motor — Energy", description: "Gama económica sin renunciar a la calidad Sunoco. Aceites minerales y semisintéticos para vehículos de uso convencional." },
      { title: "Moto 2 Tiempos", description: "Aceites de mezcla para motores 2T. Fórmula de baja emisión de humo. Ideal para ciclomotores, karts y maquinaria de 2 tiempos." },
      { title: "Moto 4 Tiempos", description: "Aceites para motores 4T de motocicletas. Protegen simultáneamente motor, caja de cambios y embrague en húmedo." },
      { title: "Vehículos Pesados", description: "Lubricantes de motor para transporte pesado. Formulados para motores diésel de gran cilindrada. Cumplen especificaciones ACEA E6, E7, E9." },
      { title: "ATF — Transmisiones automáticas", description: "Fluidos para cajas automáticas, convertidores de par y dirección asistida hidráulica." },
      { title: "MTF — Transmisiones manuales", description: "Aceites de transmisión para cajas de cambios manuales. Protegen engranajes y sincronizadores." },
    ],
  },
  {
    title: "Maquinaria Agrícola",
    image: "https://i.imgur.com/AP561Jx.jpeg",
    description: "Lubricantes diseñados para la maquinaria agrícola moderna.",
    subcategories: [
      { title: "UTTO", description: "Aceite universal para tractores. Un solo producto protege motor, caja de cambios, puente trasero y sistema hidráulico." },
      { title: "STOU", description: "Aceite supertractor universal que protege motor, sistema hidráulico y transmisiones. La solución más completa." },
      { title: "TDTO", description: "Aceite especializado para transmisiones, ejes y frenos en baño de aceite de maquinaria agrícola pesada." },
    ],
  },
  {
    title: "Náutico / Naval",
    image: "https://i.imgur.com/4OYnk2J.jpeg",
    description: "Lubricantes específicos para motores marinos. Resistentes a la corrosión por humedad y agua salada. Compatibles con fuera borda, intraborda y motos acuáticas.",
  },
  {
    title: "Fluidos Hidráulicos",
    image: "https://www.lufilsur.es/wp-content/uploads/2021/05/viscosidad-del-aceite-hidraulico.jpg",
    description: "Aceites hidráulicos de alta performance para sistemas industriales y móviles. Excelente resistencia a la oxidación, protección antidesgaste y estabilidad térmica.",
  },
  {
    title: "Anticongelantes y Refrigerantes",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=300&fit=crop",
    description: "Fluidos refrigerantes y anticongelantes para motores de todo tipo. Protegen contra corrosión, heladas y sobrecalentamiento.",
  },
  {
    title: "Aire Acondicionado",
    image: "https://www.caloryfrio.com/images/articulos/aire-industrial/aceites-compresor-aire-refrigeracion.webp",
    description: "Aceites específicos para compresores de aire acondicionado y refrigeración. Compatibles con R134a y R1234yf.",
  },
  {
    title: "Industria Alimentaria",
    image: "https://www.lufilsur.es/wp-content/uploads/2022/03/lubricantes-para-la-industria-alimentaria.jpg",
    description: "Lubricantes de grado alimentario certificados NSF H1. Seguros para contacto accidental con alimentos. Normativa FDA y europea.",
  },
  {
    title: "Líquidos de Frenos",
    image: "https://www.gruplesseps.com/wp-content/uploads/2022/12/cambiar-liquido-de-los-frenos.jpg",
    description: "Líquidos de frenos DOT 4 y DOT 5.1. Alta temperatura de ebullición para evitar el vapor lock en frenadas de emergencia.",
  },
];

const CategoryCard = ({ cat }: { cat: Category }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-md card-hover border">
      <div className="relative h-40 overflow-hidden">
        <img src={cat.image} alt={cat.title} loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
        <h3 className="absolute bottom-3 left-4 font-heading font-bold text-xl text-primary-foreground uppercase tracking-wide">
          {cat.title}
        </h3>
      </div>
      <div className="p-5">
        <p className="text-muted-foreground text-sm mb-3">{cat.description}</p>
        {cat.subcategories && (
          <>
            <button onClick={() => setOpen(!open)} className="flex items-center gap-1 text-sm font-semibold text-sunoco-red hover:underline">
              {open ? "Ocultar detalles" : "Ver gamas"} <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            {open && (
              <div className="mt-4 space-y-3">
                {cat.subcategories.map(sub => (
                  <div key={sub.title} className="bg-secondary rounded-md p-3">
                    <h4 className="font-heading font-bold text-sm text-sunoco-red mb-1">{sub.title}</h4>
                    <p className="text-xs text-muted-foreground">{sub.description}</p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const LubricantesSection = () => (
  <section id="lubricantes" className="section-padding bg-section-gray">
    <div className="container mx-auto">
      <SectionTitle
        title="Lubricantes Sunoco — Calidad testada en competición"
        subtitle="Más de 130 años de experiencia. Distribuidor oficial de lubricantes y grasas Sunoco para automoción, industria, agricultura y náutica."
        accent="sunoco"
      />
      <p className="text-muted-foreground text-center max-w-4xl mx-auto mb-12">
        Sunoco es una de las marcas de lubricantes más prestigiosas del mundo, con presencia en la Fórmula 1 y en los circuitos de competición más exigentes. Distribuimos toda la gama Sunoco con entrega rápida y asesoramiento técnico personalizado.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map(cat => <CategoryCard key={cat.title} cat={cat} />)}
      </div>
    </div>
  </section>
);

export default LubricantesSection;
