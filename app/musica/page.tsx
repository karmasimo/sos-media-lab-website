import type { Metadata } from "next";
import {
  LeadBlock,
  PageHero,
  SectionHeading,
  SplitFeature,
  VisualRail,
} from "../site-components";

export const metadata: Metadata = {
  title: "Produzioni musicali e live session",
  description:
    "Live session audio e video, registrazione musicale, mix e master online o in studio, arrangiamenti e colonne sonore.",
};

const musicServices = [
  {
    number: "01",
    title: "Registrazione",
    text: "Voci, strumenti e produzioni complete.",
    note: "In studio",
  },
  {
    number: "02",
    title: "Mix & master",
    text: "Impatto, profondità e loudness competitivo.",
    note: "In studio / online",
  },
  {
    number: "03",
    title: "Arrangiamenti originali",
    text: "Dalla demo a un sound completo e riconoscibile.",
    note: "Su misura",
  },
  {
    number: "04",
    title: "Colonne sonore & jingle",
    text: "Musiche, sigle, sonic logo e jingle originali.",
    note: "Artisti / brand",
  },
];

export default function MusicaPage() {
  return (
    <main>
      <PageHero
        eyebrow="Musica · Produzione + immagine"
        title={
          <>
            Il tuo suono.
            <br />
            <em>Senza compromessi.</em>
          </>
        }
        text="Dalla demo al master. Audio e video per artisti."
        image="/media/hero-live-session.jpg"
        imageAlt="Musicista durante una registrazione negli studi SOS Media Lab"
      />

      <VisualRail
        items={[
          {
            src: "/media/live-session.jpg",
            alt: "Artista durante una live session",
            label: "Live session",
          },
          {
            src: "/media/studio-a.jpg",
            alt: "Studio di registrazione musicale",
            label: "Recording",
          },
          {
            src: "/media/studio-regia.jpg",
            alt: "Regia di mix e mastering",
            label: "Mix & master",
          },
        ]}
      />

      <section className="section music-services">
        <div className="container">
          <SectionHeading
            index="01"
            eyebrow="Servizi musicali"
            title="Ogni fase del brano."
            text="Dalla registrazione al master finale."
          />
          <div className="music-service-grid">
            {musicServices.map((service) => (
              <article key={service.number}>
                <span className="music-number">{service.number}</span>
                <p className="kicker">{service.note}</p>
                <h2>{service.title}</h2>
                <p>{service.text}</p>
                <a href="#preventivo">Parliamo del brano ↗</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="container split-stack">
        <SplitFeature
          id="live-session"
          eyebrow="Live session audio + video"
          title="Cattura l’energia del live."
          text="Audio multitraccia e video raccontano la tua performance."
          bullets={[
            "Registrazione live multitraccia",
            "Riprese video professionali",
            "Mix e master della performance",
            "Montaggio video completo e clip social",
          ]}
          image="/media/live-session.jpg"
          imageAlt="Artista durante una live session registrata da SOS Media Lab"
        />
        <SplitFeature
          id="mix-master"
          eyebrow="Mix & master · Studio oppure online"
          title="Un brano che compete."
          text="Mix su misura per singoli, EP e album."
          bullets={[
            "Editing, pulizia e correzione",
            "Mix voce su base o multitraccia",
            "Master ottimizzato per streaming",
            "Revisioni guidate e consegna WAV",
          ]}
          image="/media/studio-regia.jpg"
          imageAlt="Mix e mastering nella regia SOS Media Lab"
          reverse
        />
        <SplitFeature
          id="musica-originale"
          eyebrow="Produzione e composizione"
          title="La tua idea diventa suono."
          text="Arrangiamenti e musica originale coerenti con la tua identità."
          bullets={[
            "Arrangiamento completo da demo",
            "Produzione e programmazione strumenti",
            "Colonne sonore e sonorizzazione video",
            "Jingle, sigle podcast e audio logo",
          ]}
          image="/media/studio-a.jpg"
          imageAlt="Studio di produzione musicale SOS Media Lab"
        />
      </div>

      <section className="section online-strip">
        <div className="container online-grid">
          <p className="section-index light">02 / LAVORIAMO OVUNQUE</p>
          <h2>Lavoriamo anche online.</h2>
          <p>Briefing, revisioni e consegna digitale.</p>
          <a className="button button-primary" href="#preventivo">
            Invia il tuo progetto <span>↗</span>
          </a>
        </div>
      </section>

      <LeadBlock
        id="preventivo"
        title="Facci ascoltare dove vuoi arrivare."
        text="Mandaci una demo o un riferimento. Costruiamo il percorso giusto."
      />
    </main>
  );
}
