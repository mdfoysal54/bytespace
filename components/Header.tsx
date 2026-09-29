import Link from "next/link";
import { Search, Menu } from "lucide-react";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className="main-nav" aria-label="Primary navigation">
          <Link href="#courses">Courses</Link>
          <Link href="#categories">Categories</Link>
          <Link href="#instructors">Become an instructor</Link>
          <Link href="#community">Community</Link>
        </nav>
        <div className="header-actions">
          <button className="icon-button" aria-label="Search">
            <Search size={19} strokeWidth={1.8} />
          </button>
          <Link href="/login" className="login-link">Log in</Link>
          <Link href="/register" className="button button-small">Get started</Link>
        </div>
        <button className="mobile-menu" aria-label="Open menu">
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}
