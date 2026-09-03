"use client";

import MultiStepForm from "../components/MultiStepForm";

export default function LP3Page() {
  return (
    <div className="lp3-root">
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-eyebrow">Free Roof Assessment</span>
          <h1>
            Restore Your Roof for <span className="accent">75% Less</span>{" "}
            with a Roof Coating.
          </h1>
          <div className="hero-arrow-wrap" aria-hidden="true">
            <div className="hero-arrow">
              <svg width="38" height="24" viewBox="0 0 38 24" fill="none">
                <path d="M3 3L19 21L35 3" stroke="white" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div className="form-embed">
            <MultiStepForm source="lp3" />
          </div>
        </div>
        <div className="footer-strip">
          © 2026 All Rights Reserved &nbsp;·&nbsp;
          <a href="#">Privacy Policy</a>
          <a href="#">Terms &amp; Conditions</a>
        </div>
      </section>
    </div>
  );
}
