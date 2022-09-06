type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export const Section = ({ title, children }: SectionProps) => (
  <div className="flex flex-col gap-3 mt-5">
    <h2 className="text-2xl font-semibold mt-3">{title}</h2>
    {children}
  </div>
);
