import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thanks — your request is in",
  description: "Confirmation that your roof assessment request was received.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="ty-page">
      <section className="ty-card">
        <div className="ty-icon" aria-hidden="true">
          <i className="fas fa-check" />
        </div>
        <h1 className="ty-h1">Thanks — your request is in.</h1>
        <p className="ty-lede">
          We&apos;ve got your details. A roof coating specialist will reach
          out shortly to schedule your free assessment.
        </p>

        <div className="ty-next">
          <span className="ty-next-label">What happens next</span>
          <ol className="ty-steps">
            <li>
              <span className="ty-step-num">1</span>
              <div>
                <strong>Within 1 business day</strong>
                <p>A specialist will call or email to set a time that works for you.</p>
              </div>
            </li>
            <li>
              <span className="ty-step-num">2</span>
              <div>
                <strong>The inspection</strong>
                <p>A 30-minute walk-on at your property. No obligation, no pressure.</p>
              </div>
            </li>
            <li>
              <span className="ty-step-num">3</span>
              <div>
                <strong>Your quote</strong>
                <p>A clear, written scope with photos and pricing — usually within 48 hours.</p>
              </div>
            </li>
          </ol>
        </div>

        <p className="ty-closing">
          Watch your inbox and phone — we&apos;ll reach out on whichever you
          prefer.
        </p>

        <div className="ty-actions">
          <Link href="/" className="btn-o">Back to homepage</Link>
        </div>
      </section>
    </main>
  );
}
