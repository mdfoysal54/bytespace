import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-intro">
          <Logo dark />
          <p>Practical learning for people who want to keep moving.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link href="#courses">Courses</Link>
          <Link href="#categories">Categories</Link>
          <Link href="#instructors">Instructors</Link>
        </div>
        <div>
          <h4>Company</h4>
          <Link href="#community">About</Link>
          <Link href="#community">Community</Link>
          <Link href="#community">Contact</Link>
        </div>
        <div>
          <h4>Account</h4>
          <Link href="/login">Log in</Link>
          <Link href="/register">Create account</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 ByteSpace. All rights reserved.</span>
        <span>Made for curious people.</span>
      </div>
    </footer>
  );
}
