import type { Metadata } from "next";
import Image from "next/image";
import { LeadBlock, PageHero, SectionHeading, VisualRail } from "../site-components";

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
    text: "Registrazione e produzione con ascolto preciso.",
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
    text: "Uno spazio controllato, progettato intorno alla voce.",
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
    text: "Spazio flessibile per video, talk e piccoli eventi.",
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
        text="Spazi curati, setup professionale e supporto quando serve."
        image="/media/studio-regia.jpg"
        imageAlt="Regia professionale SOS Media Lab a Rimini"
        primary="Verifica disponibilità"
      />

      <VisualRail
        items={[
          {
            src: "/media/studio-a.jpg",
            alt: "Studio A SOS Media Lab",
            label: "Studio A",
          },
          {
            src: "/media/voiceover-booth.jpg",
            alt: "Studio B SOS Media Lab",
            label: "Studio B",
          },
          {
            src: "/media/sala-eventi.jpg",
            alt: "Sala eventi SOS Media Lab",
            label: "Sala eventi",
          },
        ]}
      />

      <section className="section rooms-section">
        <div className="container">
          <SectionHeading
            index="01"
            eyebrow="Spazi"
            title="Scegli il tuo spazio."
            text="Sala, durata e assistenza: componi la sessione."
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
            <h2>Nel cuore di Rimini.</h2>
            <p>Via Flaminia 157/D. Scrivici e vieni a vedere gli spazi.</p>
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
        text="Indicaci sala, durata e assistenza. Verifichiamo subito."
      />
    </main>
  );
}
