interface SectionTitleProps {
  title: string;
  subtitle?: string;
  accent?: "adblue" | "sunoco";
}

const SectionTitle = ({ title, subtitle, accent = "adblue" }: SectionTitleProps) => (
  <div className="text-center mb-12 md:mb-16">
    <h2 className={`heading-display text-3xl md:text-5xl mb-4 ${accent === "sunoco" ? "text-sunoco-red" : "text-primary"}`}>
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground text-lg max-w-3xl mx-auto font-body">{subtitle}</p>
    )}
  </div>
);

export default SectionTitle;
