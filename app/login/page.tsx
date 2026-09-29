import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";

export default function LoginPage() {
  return (
    <main className="auth-page">
      <div className="auth-visual">
        <Link href="/" className="auth-back"><ArrowLeft size={16} /> Back to home</Link>
        <div className="auth-visual-content">
          <p className="eyebrow">Welcome back</p>
          <h1>Keep building from where you left off.</h1>
          <p>Your saved courses and learning progress will be waiting for you.</p>
        </div>
      </div>
      <div className="auth-form-side">
        <Logo />
        <div className="auth-form-wrap">
          <p className="eyebrow">Account</p>
          <h2>Log in to ByteSpace</h2>
          <p className="auth-muted">Enter your details to continue.</p>
          <form className="auth-form">
            <label>Email address<input type="email" placeholder="you@example.com" /></label>
            <label>Password<input type="password" placeholder="Your password" /></label>
            <div className="auth-row"><label className="check-label"><input type="checkbox" /> Remember me</label><a href="#">Forgot password?</a></div>
            <button type="submit" className="button button-dark button-full">Log in <ArrowRight size={17} /></button>
          </form>
          <p className="auth-switch">Don't have an account? <Link href="/register">Create one</Link></p>
        </div>
      </div>
    </main>
  );
}
