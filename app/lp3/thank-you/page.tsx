export default async function ThankYouLP3({
  searchParams,
}: {
  searchParams: Promise<{ name?: string }>;
}) {
  const { name } = await searchParams;

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: `if(typeof fbq!=='undefined'){fbq('track','Lead');}` }} />

      <div className="lp3-root" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
        <div style={{ maxWidth: 560, width: '100%', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <div className="hero-bg" />
          <div className="hero-overlay" />

          <div style={{
            width: 88, height: 88, background: 'var(--primary)', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 32px', position: 'relative', zIndex: 2,
          }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: 14, position: 'relative', zIndex: 2 }}>
            Request Received
          </p>

          <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(32px, 6vw, 52px)', fontWeight: 800, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 20, position: 'relative', zIndex: 2 }}>
            {name ? `Thank You, ${name}!` : 'Thank You!'}
          </h1>

          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, maxWidth: 440, margin: '0 auto 36px', position: 'relative', zIndex: 2 }}>
            We've received your request and one of our roof coating specialists will be in touch within <strong style={{ color: '#fff' }}>24 hours</strong> to schedule your free inspection.
          </p>

          <div style={{
            background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
            padding: '28px 32px', marginBottom: 36, position: 'relative', zIndex: 2,
          }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 10 }}>
              Want to talk now?
            </p>
            <a href="tel:6172793357" style={{
              fontFamily: "'Poppins', sans-serif", fontSize: 28, fontWeight: 800,
              color: 'var(--primary)', letterSpacing: '-0.01em', textDecoration: 'none',
            }}>
              (617) 279-3357
            </a>
          </div>

          <a href="/lp3" style={{
            display: 'inline-block', padding: '14px 36px',
            background: 'var(--primary)', color: '#fff',
            fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 14,
            letterSpacing: '0.04em', textTransform: 'uppercase', textDecoration: 'none',
            position: 'relative', zIndex: 2,
          }}>
            Back to Home
          </a>
        </div>
      </div>
    </>
  );
}
