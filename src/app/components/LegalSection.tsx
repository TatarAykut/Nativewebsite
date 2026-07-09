interface LegalSectionProps {
  title: string;
  children: React.ReactNode;
}

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section aria-labelledby={`legal-${title.replace(/\s+/g, "-").toLowerCase()}`}>
      <h2 id={`legal-${title.replace(/\s+/g, "-").toLowerCase()}`}>{title}</h2>
      {children}
    </section>
  );
}
