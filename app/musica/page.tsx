import type { Metadata } from "next";
import { LeadBlock, PageHero, SectionHeading, SplitFeature } from "../site-components";

export const metadata: Metadata = {
  title: "Produzioni musicali e live session",
  description:
    "Live session audio e video, registrazione musicale, mix e master online o in studio, arrangiamenti e colonne sonore.",
};

const musicServices = [
  {
    number: "01",
    title: "Registrazione",
    text: "Voci, strumenti e produzioni complete in un ambiente trattato, con direzione tecnica e cura di ogni take.",
    note: "In studio",
  },
  {
    number: "02",
    title: "Mix & master",
    text: "Bilanciamento, profondità, impatto e loudness competitivo, senza appiattire l’identità del brano.",
    note: "In studio / online",
  },
  {
    number: "03",
    title: "Arrangiamenti originali",
    text: "Partiamo da una demo o da una melodia e costruiamo struttura, parti, dinamiche e un sound riconoscibile.",
    note: "Su misura",
  },
  {
    number: "04",
    title: "Colonne sonore & jingle",
    text: "Musiche originali sincronizzate alle immagini, sigle, sonic logo e jingle memorabili per ogni formato.",
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
        text="Dalla prima demo al master finale. Registrazione, produzione e video per artisti che vogliono lasciare un segno."
        image="/media/hero-live-session.jpg"
        imageAlt="Musicista durante una registrazione negli studi SOS Media Lab"
      />

      <section className="section music-services">
        <div className="container">
          <SectionHeading
            index="01"
            eyebrow="Servizi musicali"
            title="Tutto ciò che serve, in ogni fase del brano."
            text="Puoi partire da zero, arrivare con una sessione già pronta o affidarci solo l’ultimo passaggio."
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
          title="Cattura l’energia. Mostra chi sei davvero."
          text="Una performance dal vivo prodotta come un contenuto editoriale. Registrazione multitraccia e immagini lavorano insieme per raccontare il tuo progetto senza filtri."
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
          title="Da una buona registrazione a un brano che compete."
          text="Lavoriamo sul carattere del pezzo, non su un preset. Voce su base, multitraccia, singolo, EP o album: il workflow si adatta al materiale."
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
          title="La tua idea, trasformata in un mondo sonoro."
          text="Arrangiamenti per artisti, musiche originali per immagini, jingle, sigle e sonic logo. Ogni elemento nasce per essere coerente con la tua identità."
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
          <h2>Non sei a Rimini? Il tuo progetto può arrivare comunque.</h2>
          <p>
            Per mix, master, arrangiamenti e composizioni lavoriamo anche completamente
            online, con briefing, revisioni e consegna digitale.
          </p>
          <a className="button button-primary" href="#preventivo">
            Invia il tuo progetto <span>↗</span>
          </a>
        </div>
      </section>

      <LeadBlock
        id="preventivo"
        title="Facci ascoltare dove vuoi arrivare."
        text="Mandaci una demo, un riferimento o anche solo una nota vocale. Ti aiutiamo a scegliere il percorso giusto per il brano."
      />
    </main>
  );
}
