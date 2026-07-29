import type { Metadata } from "next";
import { LeadBlock, PageHero, SectionHeading, SplitFeature } from "../site-components";

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
        text="Podcast, voiceover, jingle e sound design progettati per consolidare autorevolezza e rendere la comunicazione più memorabile."
        image="/media/voiceover-booth.jpg"
        imageAlt="Sala voiceover professionale SOS Media Lab"
      />

      <section className="section business-services">
        <div className="container">
          <SectionHeading
            index="01"
            eyebrow="Soluzioni per il brand"
            title="Non solo audio ben fatto. Audio con una funzione."
            text="Ogni produzione parte dal messaggio, dal pubblico e dal canale in cui verrà ascoltata."
          />
          <div className="business-card-grid">
            <article>
              <span>01</span>
              <h2>Podcast aziendale</h2>
              <p>
                Un format proprietario per divulgare competenze, creare relazione e dare
                continuità al posizionamento del brand.
              </p>
              <ul>
                <li>Concept e struttura editoriale</li>
                <li>Produzione audio e video</li>
                <li>Clip social e distribuzione</li>
              </ul>
            </article>
            <article id="voiceover">
              <span>02</span>
              <h2>Voiceover</h2>
              <p>
                La voce giusta, registrata e lavorata per spot, corporate video,
                e-learning, presentazioni, audioguide e contenuti digitali.
              </p>
              <ul>
                <li>Selezione speaker professionisti</li>
                <li>Traduzioni e adattamenti</li>
                <li>Audio pronto per la pubblicazione</li>
              </ul>
            </article>
            <article>
              <span>03</span>
              <h2>Jingle & sound design</h2>
              <p>
                Un’identità sonora originale per rendere riconoscibili campagne, podcast,
                app, eventi e contenuti video.
              </p>
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
          title="Autorevolezza che si ascolta, contenuti che continuano a lavorare."
          text="Progettiamo un format sostenibile nel tempo e trasformiamo ogni episodio in contenuti adatti ai canali del brand."
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
          title="Un reparto audio affidabile, quando ti serve."
          text="Affianchiamo agenzie creative e video production con competenze verticali, tempi chiari e consegne organizzate."
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
        text="Condividi obiettivo, canale e scadenza. Costruiamo una proposta scalabile per la campagna o per un progetto continuativo."
      />
    </main>
  );
}
