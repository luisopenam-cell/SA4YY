import { Phone, MessageCircle } from "lucide-react";

const FloatingCTA = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 md:hidden">
    <a
      href="https://wa.me/34682698794"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 hover:bg-green-600 text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
    <a
      href="tel:+34682698794"
      className="bg-accent hover:bg-accent/90 text-accent-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors"
      aria-label="Llamar"
    >
      <Phone className="w-6 h-6" />
    </a>
  </div>
);

export default FloatingCTA;
