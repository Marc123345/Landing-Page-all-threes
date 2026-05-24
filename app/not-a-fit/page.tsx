import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "We're not the right fit",
  description: "About who we serve and what to do next.",
  robots: { index: false, follow: false },
};

export default function NotAFitPage() {
  return (
    <main className="naf-page">
      <section className="naf-card">
        <h1 className="naf-h1">We&apos;re not the right fit for this project.</h1>
        <p className="naf-lede">
          Thanks for filling out our form — we appreciate you taking the time
          and we want to be straight with you.
        </p>

        <div className="naf-body">
          <p>
            We specialize in silicone restoration coatings for{" "}
            <strong>commercial flat and low-slope roofs</strong> — warehouses,
            retail centers, manufacturing plants, and similar facilities.
            Residential and steep-slope roofs need a different specialty
            than ours.
          </p>
        </div>

        <div className="naf-next">
          <span className="naf-next-label">What to do next</span>
          <p>
            A local residential roofing contractor will be a much better fit
            for your project. Most offer free estimates, so it&apos;s worth
            getting two or three before you decide.
          </p>
        </div>

        <p className="naf-closing">
          If you ever oversee a commercial property that could use our help,
          we&apos;d love to hear from you.
        </p>

        <div className="naf-actions">
          <Link href="/" className="btn-o">Back to homepage</Link>
        </div>
      </section>
    </main>
  );
}
