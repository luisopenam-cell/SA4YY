import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logoSa4y from "@/assets/logo-sa4y.png";

const adblueLinks = [
  { label: "Por vehículo", href: "#adblue-vehiculos" },
  { label: "Formatos", href: "#adblue-formatos" },
  { label: "Sistemas de almacenamiento", href: "#adblue-sistemas" },
];

const lubricanteLinks = [
  { label: "Automoción", href: "#lubricantes" },
  { label: "Maquinaria agrícola", href: "#lubricantes" },
  { label: "Náutico", href: "#lubricantes" },
  { label: "Industria", href: "#lubricantes" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [adblueOpen, setAdblueOpen] = useState(false);
  const [lubOpen, setLubOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-sm transition-shadow">
      <div className="container mx-auto flex items-center justify-between py-3">
        <a href="#inicio">
          <img src={logoSa4y} alt="SA4Y - El mejor AdBlue y los mejores lubricantes" className="h-12 md:h-14 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8 font-body text-sm font-semibold uppercase tracking-wide">
          <a href="#inicio" className="text-foreground hover:text-accent transition-colors">Inicio</a>

          <div className="relative group">
            <button className="flex items-center gap-1 text-foreground hover:text-accent transition-colors">
              AdBlue® <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="bg-background rounded-lg shadow-xl border p-2 min-w-[220px]">
                {adblueLinks.map(l => (
                  <a key={l.href} href={l.href} className="block px-4 py-2 text-sm rounded-md hover:bg-accent/10 hover:text-accent transition-colors">{l.label}</a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center gap-1 text-foreground hover:text-accent transition-colors">
              Lubricantes <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="bg-background rounded-lg shadow-xl border p-2 min-w-[220px]">
                {lubricanteLinks.map(l => (
                  <a key={l.label} href={l.href} className="block px-4 py-2 text-sm rounded-md hover:bg-sunoco-red/10 hover:text-sunoco-red transition-colors">{l.label}</a>
                ))}
              </div>
            </div>
          </div>

          <a href="#contacto" className="text-foreground hover:text-accent transition-colors">Contacto</a>

          <a href="#contacto" className="bg-accent text-accent-foreground px-5 py-2.5 rounded-lg font-bold hover:bg-accent/90 transition-colors">
            Solicitar presupuesto
          </a>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-foreground p-2">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t shadow-lg">
          <div className="container mx-auto py-4 flex flex-col gap-2 font-body text-sm font-semibold">
            <a href="#inicio" onClick={() => setMobileOpen(false)} className="py-2 px-4">Inicio</a>
            <button onClick={() => setAdblueOpen(!adblueOpen)} className="py-2 px-4 text-left flex items-center justify-between">
              AdBlue® <ChevronDown className={`w-4 h-4 transition-transform ${adblueOpen ? 'rotate-180' : ''}`} />
            </button>
            {adblueOpen && adblueLinks.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="py-2 px-8 text-muted-foreground">{l.label}</a>
            ))}
            <button onClick={() => setLubOpen(!lubOpen)} className="py-2 px-4 text-left flex items-center justify-between">
              Lubricantes <ChevronDown className={`w-4 h-4 transition-transform ${lubOpen ? 'rotate-180' : ''}`} />
            </button>
            {lubOpen && lubricanteLinks.map(l => (
              <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)} className="py-2 px-8 text-muted-foreground">{l.label}</a>
            ))}
            <a href="#contacto" onClick={() => setMobileOpen(false)} className="py-2 px-4">Contacto</a>
            <a href="#contacto" onClick={() => setMobileOpen(false)} className="bg-accent text-accent-foreground px-5 py-2.5 rounded-lg font-bold text-center mx-4 mt-2">
              Solicitar presupuesto
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
