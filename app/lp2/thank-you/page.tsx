export default async function ThankYouLP2({
  searchParams,
}: {
  searchParams: Promise<{ name?: string }>;
}) {
  const { name } = await searchParams;

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: `if(typeof fbq!=='undefined'){fbq('track','Lead');}` }} />

      <div className="lp2-root" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
        <div style={{ maxWidth: 560, width: '100%', textAlign: 'center' }}>

          <div style={{
            width: 88, height: 88, background: 'var(--primary)', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 32px',
          }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <p style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: 14 }}>
            Request Received
          </p>

          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 6vw, 52px)', fontWeight: 800, color: 'var(--dark)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 20 }}>
            {name ? `Thank You, ${name}!` : 'Thank You!'}
          </h1>

          <p style={{ fontSize: 17, color: 'var(--gray)', lineHeight: 1.7, maxWidth: 440, margin: '0 auto 36px' }}>
            We've received your request and one of our roof coating specialists will be in touch within <strong style={{ color: 'var(--dark)' }}>24 hours</strong> to schedule your free inspection.
          </p>

          <div style={{
            background: 'var(--bg-alt)', border: '1px solid var(--border)',
            padding: '28px 32px', marginBottom: 36,
          }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gray)', marginBottom: 10 }}>
              Want to talk now?
            </p>
            <a href="tel:6172793357" style={{
              fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 800,
              color: 'var(--primary)', letterSpacing: '-0.01em', textDecoration: 'none',
            }}>
              (617) 279-3357
            </a>
          </div>

          <a href="/lp2" style={{
            display: 'inline-block', padding: '14px 36px',
            background: 'var(--dark)', color: '#fff',
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14,
            letterSpacing: '0.04em', textTransform: 'uppercase', textDecoration: 'none',
            clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)',
          }}>
            Back to Home
          </a>
        </div>
      </div>
    </>
  );
}
