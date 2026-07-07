interface LegalSectionProps {
  title: string;
  children: React.ReactNode;
}

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
