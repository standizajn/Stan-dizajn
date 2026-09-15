"use client";

import { useState, type FormEvent } from "react";
import { lightItalic } from "@/lib/fonts";
import { useLanguage } from "@/lib/LanguageProvider";
import { siteMeta } from "@/lib/content";

export default function Contact() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.toString() ?? "";
    const contactInfo = formData.get("contact")?.toString() ?? "";
    const message = formData.get("message")?.toString() ?? "";

    const subject = encodeURIComponent(`Upit sa sajta — ${name}`);
    const body = encodeURIComponent(
      `Ime: ${name}\nKontakt: ${contactInfo}\n\n${message}`
    );
    window.location.href = `mailto:${siteMeta.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="bg-[#141414] px-6 py-24 text-white md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
        <div>
          <p className="text-xs font-medium tracking-[0.2em] text-white/50 uppercase">
            {t.contact.kicker}
          </p>
          <h2
            className={`${lightItalic.className} mt-4 text-3xl font-light leading-tight sm:text-4xl md:text-5xl`}
          >
            {t.contact.heading}
          </h2>
          <p className="mt-4 text-base text-white/70">{t.contact.subheading}</p>

          <dl className="mt-10 space-y-6">
            <div>
              <dt className="text-xs font-medium tracking-[0.15em] text-white/50 uppercase">
                {t.contact.phoneLabel}
              </dt>
              <dd className="mt-1 text-lg">
                <a href={`tel:${siteMeta.phone.replace(/\s/g, "")}`} className="hover:text-white/70">
                  {siteMeta.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium tracking-[0.15em] text-white/50 uppercase">
                {t.contact.emailLabel}
              </dt>
              <dd className="mt-1 text-lg">
                <a href={`mailto:${siteMeta.email}`} className="hover:text-white/70">
                  {siteMeta.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium tracking-[0.15em] text-white/50 uppercase">
                {t.contact.locationLabel}
              </dt>
              <dd className="mt-1 text-lg">{t.contact.locationValue}</dd>
            </div>
          </dl>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-xs font-medium tracking-wide text-white/60">
              {t.contact.form.name}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="border-b border-white/30 bg-transparent py-2 text-base outline-none transition-colors focus:border-white"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact" className="text-xs font-medium tracking-wide text-white/60">
              {t.contact.form.contact}
            </label>
            <input
              id="contact"
              name="contact"
              type="text"
              required
              className="border-b border-white/30 bg-transparent py-2 text-base outline-none transition-colors focus:border-white"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-xs font-medium tracking-wide text-white/60">
              {t.contact.form.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="resize-none border-b border-white/30 bg-transparent py-2 text-base outline-none transition-colors focus:border-white"
            />
          </div>
          <button
            type="submit"
            className="mt-4 inline-flex w-fit items-center rounded-full bg-white px-8 py-3 text-sm font-medium tracking-wide text-[#141414] transition-transform hover:scale-[1.03]"
          >
            {t.contact.form.submit}
          </button>
          {sent && (
            <p className="text-sm text-white/60">
              {t.contact.emailLabel === "Email" ? "Opening your email client…" : "Otvara se e-mail klijent…"}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
