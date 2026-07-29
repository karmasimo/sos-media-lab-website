import type { Metadata } from "next";
import {
  LeadBlock,
  PageHero,
  SectionHeading,
  SplitFeature,
  VisualRail,
} from "../site-components";

export const metadata: Metadata = {
  title: "Podcast audio e video",
  description:
    "Produzione podcast completa, video podcast, affitto sala podcast e post-produzione online a Rimini.",
};

const solutions = [
  {
    tier: "01",
    name: "Solo sala",
    forWho: "Per chi ha già un team",
    description: "Spazio trattato e pronto all’uso.",
    features: [
      "Sala podcast attrezzata",
      "Microfoni e cuffie",
      "Connessione e monitoraggio",
      "Possibilità di assistenza tecnica",
    ],
  },
  {
    tier: "02",
    name: "Studio assistito",
    forWho: "Per creator e professionisti",
    description: "Tecnico dedicato e audio pronto.",
    features: [
      "Setup e tecnico dedicato",
      "Registrazione multitraccia",
      "Editing e mix essenziale",
      "File pronto alla pubblicazione",
    ],
  },
  {
    tier: "03",
    name: "Audio + video",
    forWho: "Per chi vuole crescere",
    description: "Puntata multicamera e clip social.",
    features: [
      "Registrazione audio professionale",
      "Riprese multicamera",
      "Montaggio puntata completa",
      "Clip verticali per i social",
    ],
  },
  {
    tier: "04",
    name: "Chiavi in mano",
    forWho: "Per brand e aziende",
    description: "Strategia, identità e produzione completa.",
    features: [
      "Strategia e concept",
      "Scaletta e supporto editoriale",
      "Sigla, grafiche e sonic identity",
      "Pubblicazione e piano contenuti",
    ],
  },
];

export default function PodcastPage() {
  return (
    <main>
      <PageHero
        eyebrow="Podcast · Audio + video"
        title={
          <>
            Non limitarti a parlare.
            <br />
            <em>Fatti ascoltare.</em>
          </>
        }
        text="Produzione completa oppure solo lo spazio che ti serve."
        image="/media/podcast-host.jpg"
        imageAlt="Host con microfono durante una produzione podcast SOS Media Lab"
      />

      <VisualRail
        items={[
          {
            src: "/media/podcast-host.jpg",
            alt: "Host durante una registrazione podcast",
            label: "Podcast",
          },
          {
            src: "/media/sala-eventi.jpg",
            alt: "Sala per video podcast SOS Media Lab",
            label: "Video",
          },
          {
            src: "/media/studio-regia.jpg",
            alt: "Regia per la post-produzione podcast",
            label: "Post-produzione",
          },
        ]}
      />

      <section className="section packages-section">
        <div className="container">
          <SectionHeading
            index="01"
            eyebrow="Soluzioni podcast"
            title="Scegli come iniziare."
            text="Quattro livelli, un unico standard."
          />
          <div className="package-grid">
            {solutions.map((solution, index) => (
              <article
                className={`package-card ${index === 2 ? "featured" : ""}`}
                key={solution.name}
              >
                {index === 2 && <span className="popular">Più scelto</span>}
                <div className="package-head">
                  <span>{solution.tier}</span>
                  <p>{solution.forWho}</p>
                </div>
                <h2>{solution.name}</h2>
                <p>{solution.description}</p>
                <ul>
                  {solution.features.map((feature) => (
                    <li key={feature}>
                      <span>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#preventivo">
                  Richiedi disponibilità <b>↗</b>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="container split-stack">
        <SplitFeature
          eyebrow="Video podcast"
          title="Una puntata. Tanti contenuti."
          text="Registriamo pensando già a YouTube e ai social."
          bullets={[
            "Riprese multicamera e regia video",
            "Montaggio completo per YouTube",
            "Clip verticali con sottotitoli",
            "Grafiche, intro e outro coordinate",
          ]}
          image="/media/sala-eventi.jpg"
          imageAlt="Sala versatile SOS Media Lab per produzioni video e podcast"
        />
        <SplitFeature
          eyebrow="Post-produzione online"
          title="Hai già i file? Li finiamo noi."
          text="Editing, pulizia e consegna pronta per ogni piattaforma."
          bullets={[
            "Pulizia, editing e montaggio",
            "Mix, loudness e master podcast",
            "Montaggio video e color correction",
            "Consegna pronta per ogni piattaforma",
          ]}
          image="/media/studio-regia.jpg"
          imageAlt="Post-produzione audio nella regia SOS Media Lab"
          reverse
        />
      </div>

      <section className="section faq-section">
        <div className="container faq-grid">
          <div>
            <p className="section-index">02 / FAQ</p>
            <h2>Domande rapide.</h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>Posso venire solo ad affittare la sala?</summary>
              <p>
                Sì. Puoi usare la sala in autonomia oppure aggiungere l’assistenza di un
                tecnico per setup e registrazione.
              </p>
            </details>
            <details>
              <summary>Realizzate anche podcast video?</summary>
              <p>
                Sì, dalla semplice ripresa fino a produzioni multicamera con montaggio
                della puntata e clip verticali per i social.
              </p>
            </details>
            <details>
              <summary>Potete aiutarci a costruire il format?</summary>
              <p>
                Certo. Per aziende e brand sviluppiamo concept, tono, struttura, rubriche,
                identità sonora e piano di distribuzione.
              </p>
            </details>
            <details>
              <summary>Lavorate anche da remoto?</summary>
              <p>
                Sì. Puoi inviarci i file già registrati per editing, mix, mastering
                podcast, montaggio video e contenuti social.
              </p>
            </details>
          </div>
        </div>
      </section>

      <LeadBlock
        id="preventivo"
        title="Il tuo podcast può iniziare da qui."
        text="Dicci persone, formato e frequenza. Ti proponiamo il setup giusto."
      />
    </main>
  );
}
