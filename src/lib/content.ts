export type Locale = "sr" | "en";

export const locales: Locale[] = ["sr", "en"];

export interface Service {
  title: string;
  description: string;
  bullets?: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface PortfolioProject {
  title: string;
  category: string;
  description: string;
}

export interface SiteContent {
  nav: {
    services: string;
    process: string;
    about: string;
    portfolio: string;
    contact: string;
    cta: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  services: {
    heading: string;
    kicker: string;
    items: Service[];
  };
  process: {
    heading: string;
    kicker: string;
    steps: ProcessStep[];
  };
  about: {
    heading: string;
    kicker: string;
    paragraphs: string[];
  };
  portfolio: {
    heading: string;
    kicker: string;
    comingSoon: string;
    projects: PortfolioProject[];
  };
  contact: {
    heading: string;
    kicker: string;
    subheading: string;
    phoneLabel: string;
    emailLabel: string;
    locationLabel: string;
    locationValue: string;
    form: {
      name: string;
      contact: string;
      message: string;
      submit: string;
    };
  };
  footer: {
    tagline: string;
    rights: string;
  };
}

export const content: Record<Locale, SiteContent> = {
  sr: {
    nav: {
      services: "Usluge",
      process: "Kako radimo",
      about: "O nama",
      portfolio: "Portfolio",
      contact: "Kontakt",
      cta: "Zatražite ponudu",
    },
    hero: {
      title: "Vaš prostor — od ideje do ugradnje, na jednom mestu.",
      subtitle:
        "Dizajniramo, vizuelizujemo i izrađujemo nameštaj po meri — sve pod jednim krovom, bez trke između izvođača i dizajnera.",
      cta: "Zatražite ponudu",
    },
    services: {
      kicker: "Usluge",
      heading: "Sve što je potrebno da prostor postane vaš.",
      items: [
        {
          title: "Dizajn i projektovanje enterijera",
          description:
            "Kompletna razrada prostora — od rasporeda do realističnog prikaza, pre nego što bilo šta počne da se gradi ili kupuje. U okviru usluge dobijate:",
          bullets: [
            "2D osnovu prostora sa rasporedom nameštaja",
            "Materijalizaciju nameštaja",
            "Predlog zidnih obloga i keramike",
            "Predlog rasvete u prostoru",
            "3D model i perspektivne poglede iz više uglova",
            "Detaljnu specifikaciju materijala sa svim potrebnim merama",
            "Tehničke crteže za stolara, ukoliko ne birate našu izradu nameštaja po meri",
            "Listu za kupovinu svih artikala i gotovog nameštaja, sa konkretnim prodavnicama i linkovima",
            "Revizije predloga, dok rešenje ne bude potpuno usklađeno sa vašim željama",
          ],
        },
        {
          title: "3D vizuelizacija",
          description:
            "Fotorealistični prikaz vašeg prostora, uključen u paket dizajna enterijera, ali dostupan i kao samostalna usluga — za sve koje zanima samo render, bez kompletnog projektovanja. Idealno za predstavljanje ideje pre gradnje, prodaju nekretnine ili proveru kako će odabrani materijali i raspored izgledati u prostoru.",
        },
        {
          title: "Nameštaj po meri",
          description: "Izrada nameštaja prilagođenog tačno vašem prostoru:",
          bullets: [
            "Kuhinje po meri",
            "Nameštaj od terraca",
            "Komadi nameštaja (stolovi, stolice, klub stolovi)",
          ],
        },
      ],
    },
    process: {
      kicker: "Proces",
      heading: "Kako radimo",
      steps: [
        {
          number: "01",
          title: "Besplatne konsultacije",
          description:
            "Uživo ili telefonom razgovaramo o vašem prostoru, budžetu i potrebama. Pošaljite nam opis, slike, dimenzije prostora i materijale koje imate na umu. Dobijate okvirnu procenu projekta i rok za finalnu ponudu.",
        },
        {
          number: "02",
          title: "Vizuelizacija (po potrebi)",
          description:
            "Radimo 3D vizuelizaciju vašeg projekta, tako da ne morate da zamišljate kako bi izgledao, već možete videti na uverljivim renderima.",
        },
        {
          number: "03",
          title: "Ponuda",
          description:
            "Nakon konsultacija i vizuelizacije utvrđujemo način rada, materijale, vremenski rok isporuke i cenu.",
        },
        {
          number: "04",
          title: "Uzimanje mera i razrada projekta",
          description:
            "Izlazimo na teren i uzimamo realne mere prostora. Tu po potrebi donosimo ključne odluke i eventualne izmene koje se jave u razradi projekta.",
        },
        {
          number: "05",
          title: "Proizvodnja",
          description:
            "Proizvodnja se odvija u radionici u Nišu. Radimo sa modernom opremom i materijalima koje izaberete u ponudi. Pre isporuke detaljno proveravamo svaki komad posebno.",
        },
        {
          number: "06",
          title: "Kontrola kvaliteta i montaža",
          description:
            "Vršimo isporuku i ugradnju nameštaja. Montiramo sve po planu, proveravamo svaki element i mehanizam i ostavljamo prostor čistim. Ako nešto zahteva doradu, rešavamo na licu mesta, dok ne bude završeno.",
        },
      ],
    },
    about: {
      kicker: "O nama",
      heading: "Sve u jednom timu. Dizajn, tehnička razrada, izrada nameštaja, ugradnja.",
      paragraphs: [
        "Naš tim čine arhitekta i dizajner enterijera, u saradnji sa proverenim izvođačima radova. Spajamo projektovanje, 3D vizuelizaciju i izradu nameštaja po meri u jedan proces, tako da imate kontakt sa jednom osobom od prve ideje do useljenja.",
        "Radionica naših izvođača se nalazi u Nišu, gde proizvodimo nameštaj po meri uz modernu opremu i pažljivu kontrolu kvaliteta svakog komada.",
      ],
    },
    portfolio: {
      kicker: "Portfolio",
      heading: "Izabrani projekti",
      comingSoon:
        "Fotografije i renderi izvedenih projekata stižu uskoro. Ovde će se nalaziti galerija naših radova, grupisana po projektima.",
      projects: [
        {
          title: "Stan na Pantelejskom bulevaru",
          category: "Stambeni enterijer",
          description: "Dizajn i izrada nameštaja po meri za dvosoban stan.",
        },
        {
          title: "Kuhinja sa ostrvom",
          category: "Nameštaj po meri",
          description: "Kuhinja po meri sa terraco radnom površinom.",
        },
        {
          title: "Porodična kuća, Niš",
          category: "Kompletan enterijer",
          description: "Projektovanje i realizacija enterijera od nule.",
        },
      ],
    },
    contact: {
      kicker: "Kontakt",
      heading: "Hajde da razgovaramo o tvom prostoru",
      subheading: "Zakaži poziv, konsultacije su besplatne.",
      phoneLabel: "Telefon",
      emailLabel: "E-mail",
      locationLabel: "Lokacija",
      locationValue: "Sedište u Nišu, radimo širom Srbije.",
      form: {
        name: "Ime",
        contact: "Email ili telefon",
        message: "Poruka",
        submit: "Pošaljite upit",
      },
    },
    footer: {
      tagline: "Dizajn enterijera, nameštaj po meri, 3D vizuelizacija.",
      rights: "Sva prava zadržana.",
    },
  },
  en: {
    nav: {
      services: "Services",
      process: "How we work",
      about: "About",
      portfolio: "Portfolio",
      contact: "Contact",
      cta: "Request a quote",
    },
    hero: {
      title: "Your space — from idea to installation, in one place.",
      subtitle:
        "We design, visualize and build custom furniture — all under one roof, without the back-and-forth between contractors and designers.",
      cta: "Request a quote",
    },
    services: {
      kicker: "Services",
      heading: "Everything it takes to make a space truly yours.",
      items: [
        {
          title: "Interior design & planning",
          description:
            "A complete plan for your space — from layout to a realistic preview, before anything is built or bought. This service includes:",
          bullets: [
            "2D floor plan with furniture layout",
            "Furniture materialization",
            "Wall finishes and tile proposal",
            "Lighting design proposal",
            "3D model and perspective views from multiple angles",
            "Detailed material specification with all required measurements",
            "Technical drawings for your carpenter, if you don't choose our custom furniture production",
            "A shopping list for all items and ready-made furniture, with specific stores and links",
            "Revisions, until the solution fully matches what you want",
          ],
        },
        {
          title: "3D visualization",
          description:
            "A photorealistic view of your space, included in the interior design package but also available as a standalone service — for anyone who just wants a render, without full design work. Ideal for presenting an idea before construction, selling a property, or checking how chosen materials and layout will look in the space.",
        },
        {
          title: "Custom furniture",
          description: "Furniture made to fit your space exactly:",
          bullets: [
            "Custom kitchens",
            "Terrazzo furniture",
            "Individual pieces (tables, chairs, coffee tables)",
          ],
        },
      ],
    },
    process: {
      kicker: "Process",
      heading: "How we work",
      steps: [
        {
          number: "01",
          title: "Free consultation",
          description:
            "We talk in person or by phone about your space, budget and needs. Send us a description, photos, room dimensions and any materials you have in mind. You get a rough project estimate and a timeline for the final quote.",
        },
        {
          number: "02",
          title: "Visualization (if needed)",
          description:
            "We create a 3D visualization of your project, so you don't have to imagine the result — you can see it in convincing renders.",
        },
        {
          number: "03",
          title: "Quote",
          description:
            "After the consultation and visualization, we define the way of working, materials, delivery timeline and price.",
        },
        {
          number: "04",
          title: "Measuring & detailed planning",
          description:
            "We visit the site and take precise measurements. This is where key decisions and any changes to the project are made, if needed.",
        },
        {
          number: "05",
          title: "Production",
          description:
            "Production takes place in our workshop in Niš. We work with modern equipment and the materials you chose in the quote. Every piece is carefully checked before delivery.",
        },
        {
          number: "06",
          title: "Quality control & installation",
          description:
            "We deliver and install the furniture. Everything is assembled according to plan, every element and mechanism is checked, and the space is left clean. If anything needs adjustment, we handle it on site until it's done.",
        },
      ],
    },
    about: {
      kicker: "About us",
      heading: "Everything under one team. Design, technical planning, furniture production, installation.",
      paragraphs: [
        "Our team consists of an architect and an interior designer, working with trusted contractors. We combine design, 3D visualization and custom furniture production into a single process, so you have one point of contact from the first idea to move-in.",
        "Our contractors' workshop is located in Niš, where we produce custom furniture using modern equipment and careful quality control of every piece.",
      ],
    },
    portfolio: {
      kicker: "Portfolio",
      heading: "Selected projects",
      comingSoon:
        "Photos and renders of completed projects are coming soon. This is where the gallery of our work, grouped by project, will live.",
      projects: [
        {
          title: "Apartment on Pantelejski Boulevard",
          category: "Residential interior",
          description: "Design and custom furniture for a two-room apartment.",
        },
        {
          title: "Kitchen with island",
          category: "Custom furniture",
          description: "Custom kitchen with a terrazzo countertop.",
        },
        {
          title: "Family house, Niš",
          category: "Full interior",
          description: "Interior design and execution from scratch.",
        },
      ],
    },
    contact: {
      kicker: "Contact",
      heading: "Let's talk about your space",
      subheading: "Schedule a call — the consultation is free.",
      phoneLabel: "Phone",
      emailLabel: "Email",
      locationLabel: "Location",
      locationValue: "Based in Niš, working across Serbia.",
      form: {
        name: "Name",
        contact: "Email or phone",
        message: "Message",
        submit: "Send inquiry",
      },
    },
    footer: {
      tagline: "Interior design, custom furniture, 3D visualization.",
      rights: "All rights reserved.",
    },
  },
};

export const siteMeta = {
  brand: "STAN.design",
  phone: "+381 61 6079337",
  email: "stan.enterijer.dizajn@gmail.com",
};
