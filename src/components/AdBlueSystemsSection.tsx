import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";

const exsExf = [
  { title: "SMART EXS SS", description: "Sistema de almacenamiento interior de AdBlue® con bomba eléctrica. Versión estándar para consumos de hasta 500 L/mes. Compacto y fácil de instalar en garajes o talleres.", image: "https://i.imgur.com/KVQqia2.jpeg" },
  { title: "SMART EXS PRO", description: "Versión avanzada con pantalla de control, contador de litros y gestión de acceso. Ideal para flotas que necesitan control preciso del consumo de AdBlue®.", image: "https://i.imgur.com/KVQqia2.jpeg" },
  { title: "SMART EXS ECO", description: "Solución eficiente para almacenamiento interior. Optimizada para reducir el consumo energético de la bomba. Perfecta para consumos entre 500 y 2.500 L/mes.", image: "https://i.imgur.com/KVQqia2.jpeg" },
  { title: "SMART EXF SS", description: "Sistema de almacenamiento exterior de AdBlue®, resistente a la intemperie y temperaturas extremas. Versión básica para instalaciones al aire libre.", image: "https://i.imgur.com/V7oyILq.jpeg" },
  { title: "SMART EXF PRO", description: "Depósito exterior con sistema de gestión avanzada: pantalla de control, acceso por tarjeta o PIN, registro de consumos y alarma de nivel bajo.", image: "https://i.imgur.com/V7oyILq.jpeg" },
  { title: "SMART EXF ECO", description: "Versión de alta eficiencia para exteriores. Diseñada para minimizar el consumo eléctrico y maximizar la vida útil del equipo en condiciones climáticas adversas.", image: "https://i.imgur.com/V7oyILq.jpeg" },
];

const granel = [
  { title: "SMART EXA SS", description: "Equipo de almacenamiento de AdBlue® fabricado según norma ISO 22241-3. Diseño adosado que ocupa el mínimo espacio. Ideal para instalaciones en muros o paredes de nave industrial.", image: "https://i.imgur.com/Uc8fI9P.jpeg" },
  { title: "Granel AdBlue®4you", description: "Suministro de AdBlue® a granel directamente en su instalación mediante camión cisterna. La solución más económica por litro para grandes consumidores. Servicio de entrega programada en toda España.", image: "https://i.imgur.com/ILv6csk.jpeg" },
  { title: "SMART Comercial Dual", description: "Sistema dispensador dual para estaciones de servicio o grandes flotas. Permite suministrar AdBlue® y combustible simultáneamente. Ideal para áreas de servicio con alto tráfico de vehículos pesados.", image: "https://i.imgur.com/tWk1G5I.jpeg" },
];

const cisternas = [
  { title: "Easy Blue ECO", description: "Cisterna de almacenamiento compacta y económica. La solución de entrada para empresas que desean disponer de su propio depósito de AdBlue®. Capacidad adaptable a las necesidades de la flota.", image: "https://i.imgur.com/oFwmCFz.jpeg" },
  { title: "Easy Blue", description: "Cisterna estándar de AdBlue® con bomba de suministro integrada y manguera retráctil. Sistema plug&play listo para usar. Incluye medidor de caudal y contador de litros.", image: "https://i.imgur.com/CSK5tQN.jpeg" },
  { title: "SMART Plus", description: "Cisterna inteligente de AdBlue® con sistema de gestión completo. Registro de usuarios, control de acceso, alertas de nivel y conectividad para gestión remota. Perfecta para flotas de 10-50 vehículos.", image: "https://i.imgur.com/ie1G7ho.jpeg" },
  { title: "SMART 5000", description: "La solución más potente para grandes flotas. Capacidad de 5.000 litros de AdBlue®. Sistema de gestión inteligente completo con telemetría, control remoto y registro detallado de consumos por vehículo y conductor.", image: "https://i.imgur.com/792s8my.jpeg" },
];

const img = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop";

const AdBlueSystemsSection = () => (
  <section id="adblue-sistemas" className="section-padding bg-background">
    <div className="container mx-auto">
      <SectionTitle
        title="Sistemas inteligentes de almacenamiento y suministro"
        subtitle="Soluciones profesionales para flotas de vehículos con gestión inteligente del consumo."
      />

      <p className="text-muted-foreground text-center max-w-4xl mx-auto mb-12">
        Para flotas que consumen grandes volúmenes de AdBlue®, ofrecemos sistemas de almacenamiento y suministro diseñados para optimizar la gestión del producto, reducir costes y garantizar disponibilidad 24/7. Todos los equipos están fabricados según la norma ISO 22241-3.
      </p>

      <h3 className="font-heading font-bold text-xl text-accent mb-6 uppercase tracking-wide">Sistemas compactos SMART EXS y EXF</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
        {exsExf.map(s => <ProductCard key={s.title} {...s} />)}
      </div>

      <h3 className="font-heading font-bold text-xl text-accent mb-6 uppercase tracking-wide">Sistemas SMART EXA y Granel</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
        {granel.map(s => <ProductCard key={s.title} {...s} />)}
      </div>

      <h3 className="font-heading font-bold text-xl text-accent mb-6 uppercase tracking-wide">Cisternas de gran capacidad</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cisternas.map(s => <ProductCard key={s.title} {...s} />)}
      </div>
    </div>
  </section>
);

export default AdBlueSystemsSection;
