import React from "react";
import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";
import HighlightEffinox from "./HighlightEffinox";

const garrafas = [
  { id: "garrafa-5l", title: "Garrafa 5L", description: "Ideal para turismos y vehículos particulares. Fácil de manejar y transportar. Compatible con todos los depósitos de AdBlue® de turismo.", image: "https://i.imgur.com/NblVB7D.png" },
  { id: "garrafa-10l", title: "Garrafa 10L", description: "Formato más popular para conductores particulares y pequeñas flotas. Relación calidad-precio óptima para uso doméstico.", image: "https://i.imgur.com/sbOSUcv.png" },
  { id: "effinox-10l", title: <HighlightEffinox text="EFFINOX 10L" />, description: "AdBlue® Premium con fórmula anticristalizante EFFINOX®. Protege el sistema SCR de cristalizaciones que dañan los componentes del motor. Recomendado para uso intensivo.", image: "https://i.imgur.com/WugTo2C.png" },
  { id: "garrafa-20l", title: "Garrafa 20L", description: "Formato económico para pequeñas empresas y autónomos. Reduce el coste por litro y la frecuencia de reposición.", image: "https://i.imgur.com/9flVOAi.png" },
];

const bidones = [
  { id: "bidon-210l-palet2", title: "Bidón 210L", description: "Solución para medianas empresas y talleres. AdBlue® certificado ISO 22241-1. Suministro con bomba de extracción disponible. Venta en palets de 2 bidones.", image: "https://i.imgur.com/wwUy79v.jpeg" },
  { id: "effinox-200l-palet2", title: <HighlightEffinox text="EFFINOX 200L" />, description: "Bidón de 200L con la fórmula anticristalizante EFFINOX® Premium. Protección avanzada para flotas que buscan máxima fiabilidad en sus sistemas SCR. Venta en palets de 2 bidones.", image: "https://i.imgur.com/wwUy79v.jpeg" },
  { id: "bidon-210l-palet4", title: "Bidón 210L", description: "Solución para medianas empresas y talleres. AdBlue® certificado ISO 22241-1. Suministro con bomba de extracción disponible. Venta en palets de 4 bidones.", image: "https://i.imgur.com/kRU4KqD.jpeg" },
  { id: "effinox-200l-palet4", title: <HighlightEffinox text="EFFINOX 200L" />, description: "Bidón de 200L con la fórmula anticristalizante EFFINOX® Premium. Protección avanzada para flotas que buscan máxima fiabilidad en sus sistemas SCR. Venta en palets de 4 bidones.", image: "https://i.imgur.com/kRU4KqD.jpeg" },
];

const ibcStandard = {
  id: "ibc-1000l",
  title: "IBC 1000L",
  description: "Solución de gran capacidad para grandes consumidores de AdBlue®. 1000 litros de AdBlue® certificado ISO 22241-1. Ideal para flotas grandes, estaciones de servicio y centros de distribución. Incluye sistema de conexión directo a la bomba de suministro.",
  image: "https://i.imgur.com/jpg8Y8K.jpeg",
};

const ibcEffinox = {
  id: "ibc-effinox-1000l",
  title: <HighlightEffinox text="IBC EFFINOX 1000L" />,
  description: "La solución definitiva para grandes flotas y empresas de transporte. 1000 litros de AdBlue® EFFINOX® Premium anticristalizante. Máxima eficiencia logística y menor coste por litro. Incluye sistema de conexión directo a la bomba de suministro.",
  image: "https://i.imgur.com/jpg8Y8K.jpeg",
};

const equiposSuministro = [
  { 
    id: "piusi-delphin-pro-230-50", 
    title: "PIUSI DELPHIN PRO 230/50", 
    description: "Carro porta bidones de 210 litros con bomba y contador para el suministro profesional en taller. Incluye contador de litros.", 
    image: "https://i.imgur.com/RbrSR5v.jpeg" 
  },
  { 
    id: "piusi-delphin-pro-dc", 
    title: "PIUSI DELPHIN PRO DC", 
    description: "Carro porta bidones de 210 litros con bomba y contador para el suministro profesional en taller. Incluye contador de litros. Funciona con batería autónoma recargable.", 
    image: "https://i.imgur.com/RbrSR5v.jpeg" 
  },
  { 
    id: "ts-s-00044", 
    title: "TS-S-00044", 
    description: "Bomba de aspiración piusi con contador en el boquerel. Estructura robusta de acero inoxidable. 4 metros de manguera. Pistola automática con contador.", 
    image: "https://i.imgur.com/GN5E7os.jpeg" 
  },
  { 
    id: "ts-s-00046", 
    title: "TS-S-00046", 
    description: "Bomba manual rotativa ibc. Conexión sec rápida y estanca. Acero inoxidable en cuerpo bomba y cánula. Ergonómica de fácil uso y alta calidad.", 
    image: "https://i.imgur.com/2C1bBHf.jpeg" 
  },
  { 
    id: "ts-s-00049", 
    title: "TS-S-00049", 
    description: "Bomba manual rotativa bidón. Conexión sec rápida y estanca. Acero inoxidable en cuerpo bomba y cánula. Ergonómica de fácil uso y alta calidad.", 
    image: "https://i.imgur.com/KVfO6a9.jpeg" 
  },
];

const AdBlueFormatsSection = () => (
  <section id="adblue-formatos" className="section-padding bg-secondary">
    <div className="container mx-auto">
      <SectionTitle
        title="Elige el formato que mejor se adapta a tus necesidades"
        subtitle="Desde garrafas individuales para el conductor particular hasta IBC de 1000L para grandes consumidores."
      />

      <h3 className="font-heading font-bold text-xl text-accent mb-6 uppercase tracking-wide">Garrafas</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {garrafas.map(g => <ProductCard key={g.id} {...g} />)}
      </div>

      <h3 className="font-heading font-bold text-xl text-accent mb-6 uppercase tracking-wide">Bidones</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
        {bidones.map(b => <ProductCard key={b.id} {...b} />)}
      </div>

      <h3 className="font-heading font-bold text-xl text-accent mb-6 uppercase tracking-wide">IBC — Gran volumen</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        <ProductCard key={ibcStandard.id} {...ibcStandard} large />
        <ProductCard key={ibcEffinox.id} {...ibcEffinox} large />
      </div>

      <h3 className="font-heading font-bold text-xl text-accent mb-6 uppercase tracking-wide">Equipos de suministro</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
        {equiposSuministro.map(e => <ProductCard key={e.id} {...e} />)}
      </div>
    </div>
  </section>
);

export default AdBlueFormatsSection;
