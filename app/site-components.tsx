import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import LeadForm from "./lead-form";

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="SOS Media Lab, home">
          <Image
            src="/logo-white.png"
            alt="SOS Media Lab"
            width={146}
            height={80}
            priority
          />
        </Link>
        <nav className="desktop-nav" aria-label="Navigazione principale">
          <Link href="/podcast">Podcast</Link>
          <Link href="/musica">Musica</Link>
          <Link href="/aziende">Per aziende</Link>
          <Link href="/studi">Gli studi</Link>
          <Link href="/contatti">Contatti</Link>
        </nav>
        <Link className="header-cta" href="/contatti">
          Parliamone <span>↗</span>
        </Link>
        <details className="mobile-menu">
          <summary aria-label="Apri il menu">
            <span />
            <span />
          </summary>
          <nav aria-label="Navigazione mobile">
            <Link href="/podcast">Podcast</Link>
            <Link href="/musica">Musica</Link>
            <Link href="/aziende">Per aziende</Link>
            <Link href="/studi">Gli studi</Link>
            <Link href="/contatti">Contatti</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Image src="/logo-white.png" alt="SOS Media Lab" width={180} height={99} />
          <p>Diamo voce alle idee che meritano di essere ascoltate.</p>
        </div>
        <div className="footer-column">
          <p className="footer-label">Esplora</p>
          <Link href="/podcast">Podcast</Link>
          <Link href="/musica">Musica & artisti</Link>
          <Link href="/aziende">Audio per aziende</Link>
          <Link href="/studi">Studi & sale</Link>
        </div>
        <div className="footer-column">
          <p className="footer-label">Contatti</p>
          <a href="tel:+393518619374">+39 351 861 9374</a>
          <a href="mailto:info@sosmedialab.com">info@sosmedialab.com</a>
          <a
            href="https://maps.app.goo.gl/Ba3tpwHaiC9o24EfA"
            target="_blank"
            rel="noreferrer"
          >
            Via Flaminia 157/D, Rimini
          </a>
        </div>
        <div className="footer-column">
          <p className="footer-label">Seguici</p>
          <a
            href="https://www.instagram.com/sosmedialab/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram ↗
          </a>
          <a href="https://www.tiktok.com/@sosmedialab/" target="_blank" rel="noreferrer">
            TikTok ↗
          </a>
          <a
            href="https://it.linkedin.com/company/sosmedialab"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} SOS Media Lab</span>
        <span>Audio · Video · Strategia</span>
      </div>
    </footer>
  );
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  text,
}: {
  index: string;
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="section-heading">
      <p className="section-index">
        {index} / {eyebrow}
      </p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link className="arrow-link" href={href}>
      <span>{children}</span>
      <b>↗</b>
    </Link>
  );
}

export function ServiceCard({
  eyebrow,
  title,
  text,
  href,
  image,
}: {
  eyebrow: string;
  title: string;
  text: string;
  href: string;
  image: string;
}) {
  return (
    <article className="service-card">
      <Link className="service-image" href={href} aria-label={`Scopri ${title}`}>
        <Image src={image} alt="" fill sizes="(max-width: 700px) 100vw, 50vw" />
        <span>↗</span>
      </Link>
      <p className="kicker">{eyebrow}</p>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export function ClientLogos() {
  const logos = [
    ["Comune di Rimini", "/clients/comune-rimini.png"],
    ["SIGEP", "/clients/sigep.png"],
    ["Terranova", "/clients/terranova.png"],
    ["Angelo Po", "/clients/angelo-po.png"],
    ["Teddy Group", "/clients/teddy-group.png"],
    ["Calliope", "/clients/calliope.png"],
  ];

  return (
    <section className="clients-section section">
      <div className="container">
        <p className="clients-title">Hanno scelto di lavorare con noi</p>
        <div className="client-logos">
          {logos.map(([name, src]) => (
            <div key={name}>
              <Image src={src} alt={name} width={170} height={80} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LeadBlock({
  id,
  title = "Hai un’idea? Facciamola suonare bene.",
  text = "Raccontaci cosa vuoi realizzare. Ti rispondiamo con le domande giuste e una proposta su misura.",
}: {
  id?: string;
  title?: string;
  text?: string;
}) {
  return (
    <section className="lead-section section" id={id}>
      <div className="container lead-grid">
        <div className="lead-copy">
          <p className="kicker light">Inizia da qui</p>
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="direct-contacts">
            <a href="tel:+393518619374">
              <span>Telefono / WhatsApp</span>
              +39 351 861 9374
            </a>
            <a href="mailto:info@sosmedialab.com">
              <span>Email</span>
              info@sosmedialab.com
            </a>
          </div>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  imageAlt,
  primary = "Richiedi una proposta",
}: {
  eyebrow: string;
  title: ReactNode;
  text: string;
  image: string;
  imageAlt: string;
  primary?: string;
}) {
  return (
    <section className="page-hero">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="page-hero-image"
      />
      <div className="hero-shade" />
      <div className="container page-hero-content">
        <p className="kicker light">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
        <div className="button-row">
          <Link className="button button-primary" href="#preventivo">
            {primary} <span>↗</span>
          </Link>
          <a
            className="button button-ghost"
            href="https://wa.me/393518619374"
            target="_blank"
            rel="noreferrer"
          >
            Scrivici su WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export function VisualRail({
  items,
}: {
  items: { src: string; alt: string; label: string }[];
}) {
  return (
    <section className="visual-rail" aria-label="SOS Media Lab in studio">
      <div className="visual-rail-track">
        {items.map((item) => (
          <figure key={item.src}>
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 820px) 78vw, 34vw"
            />
            <figcaption>{item.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function SplitFeature({
  eyebrow,
  title,
  text,
  bullets,
  image,
  imageAlt,
  reverse = false,
  id,
}: {
  eyebrow: string;
  title: string;
  text: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  id?: string;
}) {
  return (
    <section className={`split-feature ${reverse ? "reverse" : ""}`} id={id}>
      <div className="split-image">
        <Image src={image} alt={imageAlt} fill sizes="(max-width: 900px) 100vw, 50vw" />
      </div>
      <div className="split-copy">
        <p className="kicker">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{text}</p>
        <ul className="check-list">
          {bullets.map((bullet) => (
            <li key={bullet}>
              <span>✓</span>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
