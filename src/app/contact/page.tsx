import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact Us | E-Mobilite" };

export default function Contact() {
  return (
    <>
      <PageHero
        title="Let's Put an Asset to Work"
        subtitle="Fleet operator, logistics platform, investor, or driver — tell us what you're looking to finance or partner on."
      />

      <section className="mx-auto max-w-5xl px-6 py-14 sm:py-20 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-brand mb-2">Registered Office</h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            1610, Adeola Hopewell Street,
            <br />
            Victoria Island, Lagos, Nigeria
          </p>

          <h2 className="text-lg font-semibold text-brand mb-2">Email</h2>
          <p className="text-text-secondary mb-6">
            <a href="mailto:info@e-mobilite.ng" className="hover:text-brand">
              info@e-mobilite.ng
            </a>
          </p>

          <h2 className="text-lg font-semibold text-brand mb-2">Sponsor</h2>
          <p className="text-text-secondary">
            FundCo Capital Managers Limited
          </p>
        </div>

        <div>
          <p className="text-text-secondary mb-6">
            Fill out the form and a member of our team will respond.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
