import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/images/e-mobilite-logo-real.png"
            alt="E-Mobilite"
            width={1615}
            height={480}
            className="bg-white rounded-lg px-3 py-2 h-10 w-auto"
          />
          <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
            An AssetCo SPV owning and financing electric bicycles, tricycles,
            and 4-wheel EVs across Nigeria — backed by battery-swap and
            charging infrastructure with confirmed demand from Day 1.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-4 text-accent">
            Quick Links
          </h3>
          <ul className="space-y-2.5 text-sm text-white/60">
            <li><Link href="/fleet" className="hover:text-white transition-colors">Our Fleet</Link></li>
            <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
            <li><Link href="/network" className="hover:text-white transition-colors">Charging Network</Link></li>
            <li><Link href="/partners" className="hover:text-white transition-colors">Partners</Link></li>
            <li><Link href="/impact" className="hover:text-white transition-colors">Impact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-4 text-accent">
            Legal
          </h3>
          <ul className="space-y-2.5 text-sm text-white/60">
            <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link href="/cookies-policy" className="hover:text-white transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-4 text-accent">
            Contact Details
          </h3>
          <ul className="space-y-2.5 text-sm text-white/60">
            <li>1610 Adeola Hopewell Street,</li>
            <li>Victoria Island, Lagos</li>
            <li className="pt-1">
              <a href="mailto:info@e-mobilite.ng" className="hover:text-white transition-colors">
                info@e-mobilite.ng
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} E-Mobilite Limited. All Rights Reserved.
      </div>
    </footer>
  );
}
