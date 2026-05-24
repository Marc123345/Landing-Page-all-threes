import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thanks for reaching out",
  description: "Information about who we serve and what to do next.",
  robots: { index: false, follow: false },
};

export default function NotAFitPage() {
  return (
    <main className="naf-page">
      <section className="naf-card">
        <span className="naf-eyebrow">PROJECT REVIEW</span>
        <h1 className="naf-h1">Thanks for reaching out.</h1>
        <p className="naf-lede">
          Based on what you shared, your project isn&apos;t a fit for the work
          we do. Here&apos;s why:
        </p>

        <ul className="naf-list">
          <li>
            <span className="naf-bullet" aria-hidden="true">
              <i className="fas fa-check" />
            </span>
            <div>
              <strong>We focus exclusively on commercial and industrial properties.</strong>
              <p>Warehouses, retail, manufacturing, multi-tenant, and similar facilities.</p>
            </div>
          </li>
          <li>
            <span className="naf-bullet" aria-hidden="true">
              <i className="fas fa-check" />
            </span>
            <div>
              <strong>Our coating systems are engineered for flat and low-slope roofs.</strong>
              <p>Silicone restoration isn&apos;t designed for steep-slope or shingled roofs.</p>
            </div>
          </li>
          <li>
            <span className="naf-bullet" aria-hidden="true">
              <i className="fas fa-check" />
            </span>
            <div>
              <strong>We don&apos;t currently service residential homes.</strong>
              <p>Single-family and small residential roofs fall outside our specialty.</p>
            </div>
          </li>
        </ul>

        <div className="naf-next">
          <p>
            <strong>What we&apos;d suggest:</strong> A local residential roofing
            contractor will be far better equipped to help with your project.
            Most reputable companies offer free estimates as well.
          </p>
        </div>

        <div className="naf-actions">
          <Link href="/" className="btn-o">Return to homepage</Link>
        </div>

        <p className="naf-foot">Thanks again for considering us.</p>
      </section>
    </main>
  );
}
