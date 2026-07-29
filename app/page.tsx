import Image from "next/image";
import Link from "next/link";
import {
  ArrowLink,
  ClientLogos,
  GraphicNavigation,
  LeadBlock,
  SectionHeading,
  ServiceCard,
} from "./site-components";

const podcastSolutions = [
  {
    number: "01",
    title: "Podcast chiavi in mano",
    text: "Dall’idea alla pubblicazione, con un unico team.",
    tags: ["Audio + video", "In studio"],
  },
  {
    number: "02",
    title: "Video podcast & social",
    text: "Puntate multicamera e clip verticali pronte per i social.",
    tags: ["Multi-camera", "Reel & shorts"],
  },
  {
    number: "03",
    title: "Affitto sala podcast",
    text: "Spazio attrezzato, in autonomia oppure con assistenza.",
    tags: ["Solo sala", "Con assistenza"],
  },
  {
    number: "04",
    title: "Post-produzione online",
    text: "Invia i file. Ricevi episodi puliti, mixati e pronti.",
    tags: ["Da remoto", "Consegna digitale"],
  },
];

const services = [
  {
    eyebrow: "Per artisti",
    title: "Live Session",
    text: "Performance live, audio multitraccia e video professionale.",
    href: "/musica#live-session",
    image: "/media/live-session.jpg",
  },
  {
    eyebrow: "Studio & online",
    title: "Mix & Master",
    text: "Impatto e definizione, in studio oppure online.",
    href: "/musica#mix-master",
    image: "/media/studio-regia.jpg",
  },
  {
    eyebrow: "Per aziende",
    title: "Voiceover & spot",
    text: "Voci professionali per campagne e contenuti digitali.",
    href: "/aziende#voiceover",
    image: "/media/voiceover-booth.jpg",
  },
  {
    eyebrow: "Musica originale",
    title: "Arrangiamenti, colonne sonore & jingle",
    text: "Musica originale e identità sonora su misura.",
    href: "/musica#musica-originale",
    image: "/media/hero-live-session.jpg",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <Image
          className="hero-media"
          src="/media/hero-live-session.jpg"
          alt="Artista durante una sessione di registrazione negli studi SOS Media Lab"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-shade" />
        <div className="container hero-content">
          <p className="kicker light">Media house · Rimini + online</p>
          <h1>
            Il tuo progetto
            <br />
            merita di <em>farsi sentire.</em>
          </h1>
          <p className="hero-copy">
            Podcast, musica e contenuti audio-video che lasciano il segno.
          </p>
          <div className="button-row">
            <Link className="button button-primary" href="#contatti">
              Raccontaci il progetto <span>↗</span>
            </Link>
            <Link className="button button-ghost" href="/podcast">
              Scopri il podcast
            </Link>
          </div>
          <div className="hero-proof">
            <span>Audio</span>
            <i />
            <span>Video</span>
            <i />
            <span>Strategia</span>
            <i />
            <span>Post-produzione</span>
          </div>
        </div>
        <a className="hero-scroll" href="#podcast" aria-label="Scorri ai servizi">
          SCOPRI <span>↓</span>
        </a>
      </section>

      <section className="intro-section section">
        <div className="container intro-grid">
          <p className="section-index">01 / COSA FACCIAMO</p>
          <div>
            <h2 className="manifesto">
              Audio e immagini
              <br />
              <span>che restano.</span>
            </h2>
            <p className="manifesto-copy">
              Un solo team per trasformare un’idea in un contenuto professionale,
              riconoscibile e pronto da pubblicare.
            </p>
          </div>
        </div>
      </section>

      <GraphicNavigation />

      <section className="section podcast-section" id="podcast">
        <div className="container">
          <SectionHeading
            index="02"
            eyebrow="Servizio in primo piano"
            title="Il tuo podcast, come ti serve."
            text="Dalla sola sala alla produzione completa audio e video."
          />
          <div className="solution-grid">
            {podcastSolutions.map((solution) => (
              <article className="solution-card" key={solution.number}>
                <span className="solution-number">{solution.number}</span>
                <div>
                  <h3>{solution.title}</h3>
                  <p>{solution.text}</p>
                  <div className="tag-row">
                    {solution.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="feature-banner">
            <Image
              src="/media/podcast-host.jpg"
              alt="Registrazione di un podcast con microfono professionale"
              fill
              sizes="(max-width: 900px) 100vw, 55vw"
            />
            <div className="feature-banner-copy">
              <p className="kicker light">Produzione completa</p>
              <h3>Una registrazione. Decine di contenuti.</h3>
              <p>Una sessione diventa puntata, reel e contenuti verticali.</p>
              <ArrowLink href="/podcast">Esplora tutte le soluzioni</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <SectionHeading
            index="03"
            eyebrow="Non solo podcast"
            title="Tutto il suono del tuo progetto."
            text="Lo stesso standard professionale, in studio o online."
          />
          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container process-grid">
          <div>
            <p className="section-index light">04 / IL METODO</p>
            <h2>Dall’idea al file pronto.</h2>
          </div>
          <ol className="process-list">
            <li>
              <span>01</span>
              <div>
                <h3>Ci racconti il progetto</h3>
                <p>Obiettivi, riferimenti e tempi.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Disegniamo la soluzione</h3>
                <p>Una proposta chiara e su misura.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Produciamo</h3>
                <p>In studio oppure da remoto.</p>
              </div>
            </li>
            <li>
              <span>04</span>
              <div>
                <h3>Consegniamo pronto all’uso</h3>
                <p>Ottimizzato per ogni piattaforma.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="section studio-teaser">
        <div className="container studio-teaser-grid">
          <div className="studio-image">
            <Image
              src="/media/studio-a.jpg"
              alt="Studio Produzione Musicale di SOS Media Lab"
              fill
              sizes="(max-width: 900px) 100vw, 52vw"
            />
          </div>
          <div className="studio-copy">
            <p className="kicker">Le sale · Rimini</p>
            <h2>Spazi che fanno suonare meglio.</h2>
            <p>
              Studio Podcast & Live e Studio Produzione Musicale. Due sale, setup
              professionale e supporto quando serve.
            </p>
            <ArrowLink href="/studi">Scopri le sale</ArrowLink>
          </div>
        </div>
      </section>

      <ClientLogos />
      <LeadBlock id="contatti" />
    </main>
  );
}
