import { BarChart3, Code2, Megaphone, Palette, PenTool, BriefcaseBusiness } from "lucide-react";

const icons = {
  Design: Palette,
  Development: Code2,
  Data: BarChart3,
  Marketing: Megaphone,
  Business: BriefcaseBusiness,
  "Personal growth": PenTool,
};

export function CategoryCard({ name, count }: { name: keyof typeof icons; count: string }) {
  const Icon = icons[name];
  return (
    <a href="#courses" className="category-card">
      <span className="category-icon"><Icon size={20} strokeWidth={1.7} /></span>
      <span>
        <strong>{name}</strong>
        <small>{count} courses</small>
      </span>
      <span className="category-arrow">↗</span>
    </a>
  );
}
