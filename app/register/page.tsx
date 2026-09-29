import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";

export default function RegisterPage() {
  return (
    <main className="auth-page">
      <div className="auth-visual register-visual">
        <Link href="/" className="auth-back"><ArrowLeft size={16} /> Back to home</Link>
        <div className="auth-visual-content">
          <p className="eyebrow">Start something useful</p>
          <h1>Make room for a skill you'll actually use.</h1>
          <p>Join a focused learning space built around practical progress.</p>
        </div>
      </div>
      <div className="auth-form-side">
        <Logo />
        <div className="auth-form-wrap">
          <p className="eyebrow">Create account</p>
          <h2>Join ByteSpace</h2>
          <p className="auth-muted">It only takes a minute to get started.</p>
          <form className="auth-form">
            <label>Full name<input type="text" placeholder="Your name" /></label>
            <label>Email address<input type="email" placeholder="you@example.com" /></label>
            <label>Password<input type="password" placeholder="At least 8 characters" /></label>
            <label className="check-label"><input type="checkbox" /> I agree to the terms and privacy policy.</label>
            <button type="submit" className="button button-dark button-full">Create account <ArrowRight size={17} /></button>
          </form>
          <p className="auth-switch">Already have an account? <Link href="/login">Log in</Link></p>
        </div>
      </div>
    </main>
  );
}
