import type { Metadata } from "next";
import Image from "next/image";
import { LeadBlock, PageHero, SectionHeading } from "../site-components";

export const metadata: Metadata = {
  title: "Studi di registrazione e sale",
  description:
    "Studio A per musica, mix e master, Studio B per voiceover e sala versatile per podcast, corsi e piccoli eventi a Rimini.",
};

const rooms = [
  {
    name: "Studio A",
    use: "Musica · produzione · mix & master",
    image: "/media/studio-a.jpg",
    text: "La sala principale per registrazione, produzione e post-produzione musicale. Regia trattata, ascolto preciso e setup professionale.",
    features: [
      "Registrazione voci e strumenti",
      "Produzione e arrangiamento",
      "Mix e mastering",
      "Noleggio con o senza tecnico",
    ],
  },
  {
    name: "Studio B",
    use: "Voiceover · podcast · contenuti",
    image: "/media/voiceover-booth.jpg",
    text: "Uno spazio controllato e focalizzato sulla voce, ideale per spot, doppiaggio, audiolibri, podcast e materiali formativi.",
    features: [
      "Voiceover e doppiaggio",
      "Podcast audio",
      "Audiolibri ed e-learning",
      "Sessioni anche da remoto",
    ],
  },
  {
    name: "Sala eventi",
    use: "Podcast video · workshop · speech",
    image: "/media/sala-eventi.jpg",
    text: "Uno spazio flessibile per produzioni multicamera, talk, corsi, proiezioni, workshop e piccoli eventi.",
    features: [
      "Podcast audio e video",
      "Corsi e workshop",
      "Speech e presentazioni",
      "Setup personalizzabile",
    ],
  },
];

export default function StudiPage() {
  return (
    <main>
      <PageHero
        eyebrow="Gli studi · Via Flaminia, Rimini"
        title={
          <>
            Entra con un’idea.
            <br />
            <em>Esci con un progetto.</em>
          </>
        }
        text="Spazi acusticamente curati, attrezzatura professionale e supporto tecnico. Puoi affidarti al team oppure gestire la sessione in autonomia."
        image="/media/studio-regia.jpg"
        imageAlt="Regia professionale SOS Media Lab a Rimini"
        primary="Verifica disponibilità"
      />

      <section className="section rooms-section">
        <div className="container">
          <SectionHeading
            index="01"
            eyebrow="Spazi"
            title="Ogni progetto ha la sua stanza."
            text="Scegli lo spazio in base al lavoro, al numero di persone e al livello di assistenza che desideri."
          />
          <div className="rooms-list">
            {rooms.map((room, index) => (
              <article className="room" key={room.name}>
                <div className="room-image">
                  <Image
                    src={room.image}
                    alt={`${room.name} SOS Media Lab`}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                  <span>0{index + 1}</span>
                </div>
                <div className="room-copy">
                  <p className="kicker">{room.use}</p>
                  <h2>{room.name}</h2>
                  <p>{room.text}</p>
                  <ul className="check-list">
                    {room.features.map((feature) => (
                      <li key={feature}>
                        <span>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="#preventivo">Richiedi la sala ↗</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section location-section">
        <div className="container location-grid">
          <div>
            <p className="section-index light">02 / DOVE SIAMO</p>
            <h2>A pochi minuti dal centro di Rimini.</h2>
            <p>
              Via Flaminia 157/D, 47923 Rimini. Scrivici prima di passare: ti accogliamo e
              ti mostriamo lo spazio più adatto.
            </p>
          </div>
          <a
            className="button button-primary"
            href="https://maps.app.goo.gl/Ba3tpwHaiC9o24EfA"
            target="_blank"
            rel="noreferrer"
          >
            Apri su Google Maps <span>↗</span>
          </a>
        </div>
      </section>

      <LeadBlock
        id="preventivo"
        title="Quando vuoi entrare in studio?"
        text="Indicaci lo spazio, la durata e se ti serve assistenza tecnica. Verifichiamo la disponibilità e ti rispondiamo con una proposta chiara."
      />
    </main>
  );
}
