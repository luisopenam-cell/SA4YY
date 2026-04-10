import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";

const sectors = [
  {
    title: "Camiones y transporte de mercancías",
    description: "El AdBlue® es imprescindible para todos los camiones diésel Euro 5 y Euro 6. Reduce las emisiones de óxidos de nitrógeno (NOx) hasta un 90%, cumpliendo con la normativa europea de emisiones. Ofrecemos suministro a granel, en cisterna y en bidones para grandes flotas.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop",
  },
  {
    title: "Turismos",
    description: "Los vehículos diésel particulares con motor SCR necesitan AdBlue® para funcionar correctamente. Disponemos de garrafas de 5L, 10L y 20L perfectas para el conductor particular. Sin AdBlue®, el motor puede reducir potencia o incluso no arrancar.",
    image: "https://i.imgur.com/trUB83Y.jpeg",
  },
  {
    title: "Vehículos Agrícolas",
    description: "Los tractores y maquinaria agrícola moderna con tecnología SCR requieren AdBlue® para cumplir los estándares de emisiones Stage IV y Stage V. Ofrecemos soluciones específicas para el sector agrícola, incluyendo sistemas de suministro para grandes explotaciones.",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop",
  },
  {
    title: "Industria",
    description: "Los generadores y motores estacionarios diésel utilizados en entornos industriales necesitan AdBlue® de calidad certificada. Ofrecemos soluciones de almacenamiento y suministro adaptadas a las necesidades industriales más exigentes.",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&h=400&fit=crop",
  },
  {
    title: "Vehículos de obras públicas",
    description: "La maquinaria de construcción, excavadoras, grúas y vehículos todoterreno de uso profesional precisan AdBlue® para cumplir las normativas de emisiones en obra. Nuestras soluciones de suministro se adaptan a los entornos más exigentes.",
    image: "https://www.revei2000.com/wp-content/uploads/2019/01/maquinaria-de-obra-publica-640x429.jpg",
  },
  {
    title: "Trenes",
    description: "Los trenes con motor diésel también emiten NOx que deben ser reducidos mediante sistemas SCR con AdBlue®. Suministramos urea de calidad adecuada para los sistemas internos de locomotoras y trenes de vía estrecha.",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&h=400&fit=crop",
  },
  {
    title: "Barcos",
    description: "Las embarcaciones con motor diésel marino están sujetas a las normativas IMO Tier III de emisiones. Ofrecemos AdBlue® marino con la calidad certificada necesaria para los sistemas SCR de motores marinos, tanto en grandes buques como en embarcaciones de recreo.",
    image: "https://es.boats.com/boat-content/files/Barcos-a-motor-1.jpg",
  },
];

const AdBlueVehiclesSection = () => (
  <section id="adblue-vehiculos" className="section-padding bg-background">
    <div className="container mx-auto">
      <SectionTitle
        title="AdBlue® para cada sector"
        subtitle="Solución de reducción de emisiones NOx certificada, disponible para cualquier tipo de motor diésel."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sectors.map((s) => (
          <ProductCard key={s.title} {...s} />
        ))}
      </div>
    </div>
  </section>
);

export default AdBlueVehiclesSection;
