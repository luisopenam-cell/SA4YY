import { useState } from "react";
import { Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({
    nombre: "", empresa: "", telefono: "", email: "", tipo: "", mensaje: "", privacidad: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.nombre.trim()) e.nombre = "Obligatorio";
    if (!form.telefono.trim()) e.telefono = "Obligatorio";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Email no válido";
    if (!form.mensaje.trim()) e.mensaje = "Obligatorio";
    if (!form.privacidad) e.privacidad = "Debes aceptar";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) setSubmitted(true);
  };

  const inputClass = "w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent text-sm";

  return (
    <section id="contacto" className="section-padding bg-primary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-display text-3xl md:text-5xl text-primary-foreground mb-4">Contacta con nosotros</h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Estamos a tu disposición para ofrecerte el mejor asesoramiento sobre AdBlue® y lubricantes Sunoco.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-8">
            <a href="tel:+34682698794" className="flex items-center gap-4 text-primary-foreground hover:text-accent transition-colors">
              <Phone className="w-8 h-8 text-accent" />
              <div>
                <p className="text-sm text-primary-foreground/60">Teléfono 1</p>
                <p className="text-xl font-bold">+34 682 69 87 94</p>
              </div>
            </a>
            <a href="tel:+34699945565" className="flex items-center gap-4 text-primary-foreground hover:text-accent transition-colors">
              <Phone className="w-8 h-8 text-accent" />
              <div>
                <p className="text-sm text-primary-foreground/60">Teléfono 2</p>
                <p className="text-xl font-bold">+34 699 94 55 65</p>
              </div>
            </a>
            <a href="mailto:cargasygraneles@gmail.com" className="flex items-center gap-4 text-primary-foreground hover:text-accent transition-colors">
              <Mail className="w-8 h-8 text-accent" />
              <div>
                <p className="text-sm text-primary-foreground/60">Email</p>
                <p className="text-xl font-bold">cargasygraneles@gmail.com</p>
              </div>
            </a>
            <div className="flex items-center gap-4 text-primary-foreground/80">
              <Clock className="w-8 h-8 text-accent" />
              <p className="text-sm">Atención personalizada de lunes a viernes de 8:00 a 18:00h. Respuesta en menos de 24 horas.</p>
            </div>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="bg-accent/20 rounded-xl p-10 flex items-center justify-center">
              <p className="text-primary-foreground text-xl font-heading font-bold text-center">¡Gracias! Hemos recibido tu consulta. Te contactaremos pronto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input className={inputClass} placeholder="Nombre y apellidos *" value={form.nombre} onChange={e => setForm({...form, nombre: e.target.value})} />
                {errors.nombre && <p className="text-xs text-destructive mt-1">{errors.nombre}</p>}
              </div>
              <input className={inputClass} placeholder="Empresa (opcional)" value={form.empresa} onChange={e => setForm({...form, empresa: e.target.value})} />
              <div>
                <input className={inputClass} placeholder="Teléfono *" value={form.telefono} onChange={e => setForm({...form, telefono: e.target.value})} />
                {errors.telefono && <p className="text-xs text-destructive mt-1">{errors.telefono}</p>}
              </div>
              <div>
                <input className={inputClass} placeholder="Email *" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
              <select className={inputClass} value={form.tipo} onChange={e => setForm({...form, tipo: e.target.value})}>
                <option value="">Tipo de consulta</option>
                <option>AdBlue®</option>
                <option>Lubricantes Sunoco</option>
                <option>Sistemas de almacenamiento</option>
                <option>Presupuesto</option>
                <option>Otro</option>
              </select>
              <div>
                <textarea className={inputClass} rows={4} placeholder="Mensaje *" value={form.mensaje} onChange={e => setForm({...form, mensaje: e.target.value})} />
                {errors.mensaje && <p className="text-xs text-destructive mt-1">{errors.mensaje}</p>}
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm text-primary-foreground/70 cursor-pointer">
                  <input type="checkbox" checked={form.privacidad} onChange={e => setForm({...form, privacidad: e.target.checked})} className="rounded" />
                  He leído y acepto la política de privacidad
                </label>
                {errors.privacidad && <p className="text-xs text-destructive mt-1">{errors.privacidad}</p>}
              </div>
              <button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-4 rounded-lg font-heading font-bold text-lg uppercase tracking-wide transition-colors">
                Enviar consulta
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
