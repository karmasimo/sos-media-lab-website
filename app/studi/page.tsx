import type { Metadata } from "next";
import Image from "next/image";
import { LeadBlock, PageHero, SectionHeading, VisualRail } from "../site-components";

export const metadata: Metadata = {
  title: "Sale podcast e produzione musicale",
  description:
    "Studio Podcast & Live e Studio Produzione Musicale per podcast, live session, registrazione, mix e mastering a Rimini.",
};

const rooms = [
  {
    name: "Studio Podcast & Live",
    use: "Podcast audio-video · live session · set",
    image: "/media/sala-eventi.jpg",
    text: "Una sala flessibile per conversazioni, performance e produzioni video.",
    features: [
      "Podcast audio e video",
      "Live session e performance",
      "Set per contenuti e shooting",
      "Noleggio con o senza tecnico",
    ],
  },
  {
    name: "Studio Produzione Musicale",
    use: "Recording · produzione · mix & mastering",
    image: "/media/studio-a.jpg",
    text: "Lo spazio dedicato alla musica, dalla prima take al master finale.",
    features: [
      "Registrazione voci e strumenti",
      "Produzione e arrangiamento",
      "Mix e mastering",
      "Lavorazioni in studio o online",
    ],
  },
];

export default function StudiPage() {
  return (
    <main>
      <PageHero
        eyebrow="Le sale · Via Flaminia, Rimini"
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
            src: "/media/sala-eventi.jpg",
            alt: "Studio Podcast e Live di SOS Media Lab",
            label: "Podcast & Live",
          },
          {
            src: "/media/studio-a.jpg",
            alt: "Studio Produzione Musicale di SOS Media Lab",
            label: "Produzione musicale",
          },
        ]}
      />

      <section className="section rooms-section">
        <div className="container">
          <SectionHeading
            index="01"
            eyebrow="Due sale"
            title="Una sala per ogni progetto."
            text="Podcast e set da una parte. Produzione musicale dall’altra."
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
