import type { Metadata } from "next";
import {
  LeadBlock,
  PageHero,
  SectionHeading,
  SplitFeature,
  VisualRail,
} from "../site-components";

export const metadata: Metadata = {
  title: "Podcast, voiceover e audio per aziende",
  description:
    "Podcast aziendali, voiceover professionali, jingle, sound design e identità sonora per brand e agenzie.",
};

export default function AziendePage() {
  return (
    <main>
      <PageHero
        eyebrow="Audio per aziende · Brand + agenzie"
        title={
          <>
            Il tuo brand ha una voce.
            <br />
            <em>Facciamola riconoscere.</em>
          </>
        }
        text="Podcast, voiceover e identità sonore memorabili."
        image="/media/voiceover-booth.jpg"
        imageAlt="Sala voiceover professionale SOS Media Lab"
      />

      <VisualRail
        items={[
          {
            src: "/media/graphic-brand-audio.webp",
            alt: "Grafica dedicata a voiceover e identità sonora",
            label: "Brand audio",
          },
          {
            src: "/media/sala-eventi.jpg",
            alt: "Produzione podcast aziendale",
            label: "Branded podcast",
          },
          {
            src: "/media/studio-regia.jpg",
            alt: "Sound design in studio",
            label: "Sound design",
          },
        ]}
      />

      <section className="section business-services">
        <div className="container">
          <SectionHeading
            index="01"
            eyebrow="Soluzioni per il brand"
            title="Audio con una funzione."
            text="Messaggio, pubblico e canale guidano ogni produzione."
          />
          <div className="business-card-grid">
            <article>
              <span>01</span>
              <h2>Podcast aziendale</h2>
              <p>Un format proprietario che costruisce autorevolezza.</p>
              <ul>
                <li>Concept e struttura editoriale</li>
                <li>Produzione audio e video</li>
                <li>Clip social e distribuzione</li>
              </ul>
            </article>
            <article id="voiceover">
              <span>02</span>
              <h2>Voiceover</h2>
              <p>La voce giusta per spot, video e contenuti digitali.</p>
              <ul>
                <li>Selezione speaker professionisti</li>
                <li>Traduzioni e adattamenti</li>
                <li>Audio pronto per la pubblicazione</li>
              </ul>
            </article>
            <article>
              <span>03</span>
              <h2>Jingle & sound design</h2>
              <p>Un’identità sonora originale e riconoscibile.</p>
              <ul>
                <li>Jingle e audio logo</li>
                <li>Sigle podcast e branded content</li>
                <li>Sonorizzazione e UX sound</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <div className="container split-stack">
        <SplitFeature
          eyebrow="Podcast per aziende"
          title="Autorevolezza che si ascolta."
          text="Un format sostenibile, declinato su tutti i canali."
          bullets={[
            "Strategia e posizionamento",
            "Supporto autoriale e preparazione ospiti",
            "Produzione audio-video completa",
            "Puntata, trailer e contenuti social",
          ]}
          image="/media/sala-eventi.jpg"
          imageAlt="Produzione di contenuti aziendali nella sala SOS Media Lab"
        />
        <SplitFeature
          eyebrow="Workflow per agenzie"
          title="Il reparto audio che ti serve."
          text="Competenze verticali, tempi chiari e consegne organizzate."
          bullets={[
            "Produzione white-label",
            "Registrazioni in studio o da remoto",
            "Casting e direzione voiceover",
            "Revisioni e formati di consegna concordati",
          ]}
          image="/media/studio-regia.jpg"
          imageAlt="Regia di produzione audio SOS Media Lab"
          reverse
        />
      </div>

      <LeadBlock
        id="preventivo"
        title="Che cosa deve far sentire il tuo brand?"
        text="Condividi obiettivo, canale e scadenza. Al resto pensiamo noi."
      />
    </main>
  );
}
