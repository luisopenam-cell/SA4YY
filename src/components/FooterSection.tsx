import logoSa4y from "@/assets/logo-sa4y.png";
import logoSunoco from "@/assets/logo-sunoco.png";
import logoGreenchem from "@/assets/logo-greenchem.png";

const FooterSection = () => (
  <footer className="bg-footer-bg text-primary-foreground">
    <div className="container mx-auto py-14 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1 */}
        <div>
          <img src={logoSa4y} alt="SA4Y" className="h-12 mb-4" />
          <p className="text-sm text-primary-foreground/60 mb-4">
            Distribuidores profesionales de AdBlue® certificado y lubricantes Sunoco de alto rendimiento.
          </p>
          <p className="text-sm text-primary-foreground/60">📞 +34 682 69 87 94</p>
          <p className="text-sm text-primary-foreground/60">📞 +34 699 94 55 65</p>
          <p className="text-sm text-primary-foreground/60">✉️ cargasygraneles@gmail.com</p>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="font-heading font-bold uppercase tracking-wide text-accent mb-4">AdBlue®</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li><a href="#adblue-vehiculos" className="hover:text-accent transition-colors">Camiones y transporte</a></li>
            <li><a href="#adblue-vehiculos" className="hover:text-accent transition-colors">Turismos</a></li>
            <li><a href="#adblue-vehiculos" className="hover:text-accent transition-colors">Vehículos agrícolas</a></li>
            <li><a href="#adblue-vehiculos" className="hover:text-accent transition-colors">Industria</a></li>
            <li><a href="#adblue-vehiculos" className="hover:text-accent transition-colors">Obras públicas</a></li>
            <li><a href="#adblue-vehiculos" className="hover:text-accent transition-colors">Trenes | Barcos</a></li>
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="font-heading font-bold uppercase tracking-wide text-sunoco-red mb-4">Lubricantes</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li><a href="#lubricantes" className="hover:text-sunoco-red transition-colors">Aceites de motor</a></li>
            <li><a href="#lubricantes" className="hover:text-sunoco-red transition-colors">Lubricantes moto</a></li>
            <li><a href="#lubricantes" className="hover:text-sunoco-red transition-colors">Vehículos pesados</a></li>
            <li><a href="#lubricantes" className="hover:text-sunoco-red transition-colors">Agrícola</a></li>
            <li><a href="#lubricantes" className="hover:text-sunoco-red transition-colors">Náutico | Hidráulicos</a></li>
          </ul>
        </div>

        {/* Col 4 - Partners */}
        <div>
          <h4 className="font-heading font-bold uppercase tracking-wide text-primary-foreground mb-4">Nuestros partners</h4>
          <div className="flex items-center gap-4 mb-4">
            <img src={logoSunoco} alt="Sunoco" className="h-12 w-auto" />
            <img src={logoGreenchem} alt="GreenChem AdBlue4you" className="h-12 w-auto" />
          </div>
          <p className="text-xs text-primary-foreground/50">
            Distribuidores oficiales de las marcas líderes en lubricantes y AdBlue® del mercado europeo.
          </p>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="bg-footer-dark border-t border-primary-foreground/10">
      <div className="container mx-auto py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/40">
        <p>© 2025 El mejor AdBlue y los mejores lubricantes. Todos los derechos reservados.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-primary-foreground transition-colors">Política de Privacidad</a>
          <a href="#" className="hover:text-primary-foreground transition-colors">Aviso Legal</a>
          <a href="#" className="hover:text-primary-foreground transition-colors">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSection;
