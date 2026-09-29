import Link from "next/link";

type Props = {
  eyebrow?: string;
  title: string;
  text?: string;
  href?: string;
  linkLabel?: string;
};

export function SectionHeading({ eyebrow, title, text, href, linkLabel = "View all" }: Props) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
        {text && <p className="section-description">{text}</p>}
      </div>
      {href && <Link href={href} className="text-link">{linkLabel} <span>↗</span></Link>}
    </div>
  );
}
