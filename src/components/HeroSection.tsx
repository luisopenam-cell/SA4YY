import heroBg from "@/assets/hero-bg.jpg";
import { Shield, Truck, Trophy, Phone } from "lucide-react";

const trustItems = [
  { icon: Shield, text: "Certificado ISO 22241" },
  { icon: Truck, text: "Entrega en toda España" },
  { icon: Trophy, text: "Distribuidor oficial Sunoco" },
  { icon: Phone, text: "Asesoramiento técnico" },
];

const HeroSection = () => (
  <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <img src={heroBg} alt="Fondo de sección hero con imagen industrial" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
    <div className="absolute inset-0 bg-primary/75" />

    <div className="relative z-10 container mx-auto text-center px-4 py-32">
      <h1 className="heading-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6 animate-fade-in-up">
        El mejor AdBlue®<br />y los mejores lubricantes
      </h1>
      <p className="text-primary-foreground/80 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-body" style={{ animationDelay: '0.2s' }}>
        Distribución profesional de AdBlue® certificado ISO 22241 y lubricantes Sunoco de alto rendimiento para todos los sectores.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '0.4s' }}>
        <a href="#adblue-vehiculos" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-heading font-bold text-lg uppercase tracking-wide transition-colors">
          Ver productos AdBlue®
        </a>
        <a href="#lubricantes" className="bg-sunoco-red hover:bg-sunoco-red/90 text-sunoco-red-foreground px-8 py-4 rounded-lg font-heading font-bold text-lg uppercase tracking-wide transition-colors">
          Ver lubricantes Sunoco
        </a>
      </div>
    </div>

    {/* Trust bar */}
    <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t">
      <div className="container mx-auto py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {trustItems.map((item) => (
          <div key={item.text} className="flex items-center justify-center gap-2 text-sm font-semibold text-foreground">
            <item.icon className="w-5 h-5 text-accent shrink-0" />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
