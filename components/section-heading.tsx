export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  titleId,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  titleId?: string;
}) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <p className="eyebrow"><span aria-hidden="true" />{eyebrow}</p>
      <h2 id={titleId}>{title}</h2>
      {description ? <p className="section-heading__description">{description}</p> : null}
    </div>
  );
}
