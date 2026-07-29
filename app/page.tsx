import Image from "next/image";
import Link from "next/link";
import {
  ArrowLink,
  ClientLogos,
  LeadBlock,
  SectionHeading,
  ServiceCard,
} from "./site-components";

const podcastSolutions = [
  {
    number: "01",
    title: "Podcast chiavi in mano",
    text: "Strategia, format, registrazione, editing, sigla, grafiche e distribuzione: un unico team, dall’idea alla pubblicazione.",
    tags: ["Audio + video", "In studio"],
  },
  {
    number: "02",
    title: "Video podcast & social",
    text: "Puntate multicamera e contenuti verticali già montati per trasformare ogni registrazione in settimane di comunicazione.",
    tags: ["Multi-camera", "Reel & shorts"],
  },
  {
    number: "03",
    title: "Affitto sala podcast",
    text: "Uno spazio pronto all’uso per creator, aziende e agenzie che vogliono gestire in autonomia la propria produzione.",
    tags: ["Solo sala", "Con assistenza"],
  },
  {
    number: "04",
    title: "Post-produzione online",
    text: "Ci invii i file: puliamo, editiamo, mixiamo e consegniamo episodi pronti per Spotify, YouTube e social.",
    tags: ["Da remoto", "Consegna digitale"],
  },
];

const services = [
  {
    eyebrow: "Per artisti",
    title: "Live Session",
    text: "Performance dal vivo con registrazione multitraccia, riprese video e montaggio: il tuo suono, con tutta l’energia del live.",
    href: "/musica#live-session",
    image: "/media/live-session.jpg",
  },
  {
    eyebrow: "Studio & online",
    title: "Mix & Master",
    text: "Profondità, impatto e traduzione su ogni impianto. Lavoriamo in studio oppure a distanza sui tuoi file.",
    href: "/musica#mix-master",
    image: "/media/studio-regia.jpg",
  },
  {
    eyebrow: "Per aziende",
    title: "Voiceover & spot",
    text: "Voci selezionate, registrazione, adattamento ed audio pronto per campagne, formazione e contenuti digitali.",
    href: "/aziende#voiceover",
    image: "/media/voiceover-booth.jpg",
  },
  {
    eyebrow: "Musica originale",
    title: "Arrangiamenti, colonne sonore & jingle",
    text: "Dalla demo al brano finito, dalla sigla al sonic logo: componiamo un’identità sonora che appartiene solo a te.",
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
            Podcast, produzioni musicali e contenuti audio-video progettati per
            distinguerti, coinvolgere e convertire.
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
              Non produciamo semplicemente contenuti.
              <br />
              <span>Costruiamo qualcosa che resta.</span>
            </h2>
            <p className="manifesto-copy">
              SOS Media Lab riunisce competenza audio, produzione video e visione
              strategica. Un solo interlocutore per trasformare un’idea in un contenuto
              professionale, riconoscibile e pronto a performare.
            </p>
          </div>
        </div>
      </section>

      <section className="section podcast-section" id="podcast">
        <div className="container">
          <SectionHeading
            index="02"
            eyebrow="Servizio in primo piano"
            title="Il tuo podcast. Dalla prima idea al primo play."
            text="Scegli il livello di supporto che ti serve: dallo spazio attrezzato alla produzione completa audio e video."
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
              <p>
                Dalla puntata lunga ai reel verticali: progettiamo ogni sessione per
                moltiplicare la resa editoriale del tuo tempo in studio.
              </p>
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
            title="Tutto il suono che serve al tuo progetto."
            text="Servizi verticali, un approccio sartoriale e lo stesso standard professionale, in studio o online."
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
            <h2>Tu porti l’idea. Al resto pensiamo insieme.</h2>
          </div>
          <ol className="process-list">
            <li>
              <span>01</span>
              <div>
                <h3>Ci racconti il progetto</h3>
                <p>Obiettivi, pubblico, riferimenti e tempi: partiamo da te.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Disegniamo la soluzione</h3>
                <p>Un preventivo chiaro, senza servizi inutili o sorprese.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Produciamo</h3>
                <p>Sessione guidata e workflow agile, in studio o da remoto.</p>
              </div>
            </li>
            <li>
              <span>04</span>
              <div>
                <h3>Consegniamo pronto all’uso</h3>
                <p>File ottimizzati per le piattaforme e assistenza finale.</p>
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
              alt="Regia dello Studio A di SOS Media Lab"
              fill
              sizes="(max-width: 900px) 100vw, 52vw"
            />
          </div>
          <div className="studio-copy">
            <p className="kicker">Gli studi · Rimini</p>
            <h2>Spazi progettati per lavorare bene e suonare meglio.</h2>
            <p>
              Due studi di registrazione e una sala versatile per podcast, workshop e
              piccoli eventi. Acustica curata, setup professionale e un team che sa
              metterti a tuo agio.
            </p>
            <ArrowLink href="/studi">Visita gli spazi</ArrowLink>
          </div>
        </div>
      </section>

      <ClientLogos />
      <LeadBlock id="contatti" />
    </main>
  );
}
