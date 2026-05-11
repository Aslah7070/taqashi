import GSAPTextReveal from "@/components/animations/GSAPTextReveal";

export default function SectionHeading({ label, title, subtitle }: { label?: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-16 max-w-3xl mx-auto">
      {label && <p className="accent-label mb-4">{label}</p>}
      <GSAPTextReveal text={title} className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brand-gold mb-6" />
      {subtitle && <p className="text-brand-cream/70 text-lg">{subtitle}</p>}
    </div>
  );
}