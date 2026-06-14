import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BCS — Roof Coating Specialists | Free Inspection",
  description:
    "Save 50-70% vs roof replacement with professional silicone roof coating. Manufacturer warranty up to 20 years. Free inspection.",
};

export default function BCSLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
