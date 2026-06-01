import type { Metadata } from 'next';
import '../lp2/lp2.css';

export const metadata: Metadata = {
  title: 'Brightshield — Commercial Roof Coating Specialists | Free Inspection',
  description:
    "Brightshield restores commercial roofs with professional silicone coatings — save up to 75% vs full replacement. 20-year manufacturer warranty. Book a free on-site inspection.",
};

export default function BrightshieldLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
