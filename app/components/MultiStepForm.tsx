"use client";

import { useState, type FormEvent } from "react";

/**
 * Three-step lead form. Replaced the Jotform iframes, which were all returning
 * "Form is missing" on every landing page and brand subdomain.
 *
 * Submits to /api/lead. See that route for where leads actually go.
 */

export interface MultiStepFormProps {
  /** Which page the lead came from, so submissions can be told apart. */
  source?: string;
  /** Optional brand name, for the brand subdomains. */
  brand?: string;
}

const JOB_TYPES = [
  "Flat / low-slope roof coating",
  "Metal roof restoration",
  "Roof repair",
  "Full replacement quote",
  "Not sure yet",
];

const TIMELINES = [
  "As soon as possible",
  "Within 1–3 months",
  "3–6 months",
  "Just researching for now",
];

const STEPS = ["Contact", "Property", "The job"];

type Fields = {
  name: string;
  phone: string;
  email: string;
  zip: string;
  address: string;
  jobType: string;
  timeline: string;
};

const EMPTY: Fields = {
  name: "",
  phone: "",
  email: "",
  zip: "",
  address: "",
  jobType: "",
  timeline: "",
};

export default function MultiStepForm({ source = "lp", brand }: MultiStepFormProps) {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [failed, setFailed] = useState(false);

  const set = (key: keyof Fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (which: number) => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (which === 0) {
      if (!values.name.trim()) next.name = "Please tell us your name";
      if (!/^[\d\s()+.-]{7,}$/.test(values.phone.trim()))
        next.phone = "Enter a phone number we can reach you on";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
        next.email = "Enter a valid email address";
    }
    if (which === 1) {
      if (!/^\d{5}(-\d{4})?$/.test(values.zip.trim()))
        next.zip = "Enter a 5-digit ZIP code";
      if (!values.address.trim()) next.address = "Enter the property address";
    }
    if (which === 2) {
      if (!values.jobType) next.jobType = "Pick the closest option";
      if (!values.timeline) next.timeline = "Pick a timeline";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const next = () => {
    if (validate(step)) setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate(2)) return;
    setSending(true);
    setFailed(false);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, source, brand }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setSent(true);
    } catch {
      setFailed(true);
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="msf msf--done">
        <div className="msf-tick" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="30" height="30" fill="none">
            <path d="M4 12.5l5 5L20 6.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3>Got it, {values.name.split(" ")[0] || "thanks"}.</h3>
        <p>
          We&apos;ll call you on {values.phone} to arrange the free assessment.
          If it&apos;s urgent, call us and we&apos;ll get you in sooner.
        </p>
      </div>
    );
  }

  return (
    <form className="msf" onSubmit={submit} noValidate>
      <div className="msf-head">
        <ol className="msf-steps">
          {STEPS.map((label, i) => (
            <li
              key={label}
              className={i === step ? "is-current" : i < step ? "is-done" : ""}
            >
              <span className="msf-step-dot">{i < step ? "✓" : i + 1}</span>
              <span className="msf-step-label">{label}</span>
            </li>
          ))}
        </ol>
        <div className="msf-bar" aria-hidden="true">
          <span style={{ width: `${((step + 1) / STEPS.length) * 100}%` }} />
        </div>
      </div>

      {step === 0 && (
        <div className="msf-panel">
          <div className="msf-field">
            <label htmlFor="msf-name">Name</label>
            <input id="msf-name" value={values.name} onChange={set("name")} autoComplete="name" />
            {errors.name && <span className="msf-error">{errors.name}</span>}
          </div>
          <div className="msf-grid">
            <div className="msf-field">
              <label htmlFor="msf-phone">Phone number</label>
              <input id="msf-phone" type="tel" value={values.phone} onChange={set("phone")} autoComplete="tel" />
              {errors.phone && <span className="msf-error">{errors.phone}</span>}
            </div>
            <div className="msf-field">
              <label htmlFor="msf-email">Email</label>
              <input id="msf-email" type="email" value={values.email} onChange={set("email")} autoComplete="email" />
              {errors.email && <span className="msf-error">{errors.email}</span>}
            </div>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="msf-panel">
          <div className="msf-field msf-field--short">
            <label htmlFor="msf-zip">ZIP code</label>
            <input id="msf-zip" inputMode="numeric" value={values.zip} onChange={set("zip")} autoComplete="postal-code" />
            {errors.zip && <span className="msf-error">{errors.zip}</span>}
          </div>
          <div className="msf-field">
            <label htmlFor="msf-address">Property address</label>
            <input id="msf-address" value={values.address} onChange={set("address")} autoComplete="street-address" />
            {errors.address && <span className="msf-error">{errors.address}</span>}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="msf-panel">
          <div className="msf-field">
            <label htmlFor="msf-job">Job type</label>
            <select id="msf-job" value={values.jobType} onChange={set("jobType")}>
              <option value="">Select</option>
              {JOB_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
            {errors.jobType && <span className="msf-error">{errors.jobType}</span>}
          </div>
          <div className="msf-field">
            <label htmlFor="msf-timeline">Timeline</label>
            <select id="msf-timeline" value={values.timeline} onChange={set("timeline")}>
              <option value="">Select</option>
              {TIMELINES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
            {errors.timeline && <span className="msf-error">{errors.timeline}</span>}
          </div>
        </div>
      )}

      {failed && (
        <p className="msf-error msf-error--form">
          That didn&apos;t send. Please try again, or call us directly.
        </p>
      )}

      <div className="msf-actions">
        {step > 0 && (
          <button type="button" className="msf-back" onClick={back}>
            Back
          </button>
        )}
        {step < STEPS.length - 1 ? (
          <button type="button" className="msf-next" onClick={next}>
            Continue
          </button>
        ) : (
          <button type="submit" className="msf-next" disabled={sending}>
            {sending ? "Sending…" : "Get my free assessment"}
          </button>
        )}
      </div>

      <p className="msf-note">
        Free assessment. No obligation. We never sell your details.
      </p>
    </form>
  );
}
