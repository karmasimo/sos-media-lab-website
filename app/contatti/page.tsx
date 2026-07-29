import type { Metadata } from "next";
import { LeadBlock, VisualRail } from "../site-components";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta SOS Media Lab a Rimini per podcast, produzioni musicali, voiceover, live session, mix, master e sale.",
};

export default function ContattiPage() {
  return (
    <main className="contact-page">
      <section className="contact-intro">
        <div className="container contact-intro-grid">
          <div>
            <p className="kicker light">Contatti</p>
            <h1>
              Il prossimo progetto
              <br />
              può iniziare <em>adesso.</em>
            </h1>
          </div>
          <p>Hai un brief o solo un’idea? Scrivici.</p>
        </div>
      </section>
      <VisualRail
        items={[
          {
            src: "/media/studio-regia.jpg",
            alt: "Regia SOS Media Lab",
            label: "Rimini",
          },
          {
            src: "/media/live-session.jpg",
            alt: "Produzione musicale SOS Media Lab",
            label: "Musica",
          },
          {
            src: "/media/podcast-host.jpg",
            alt: "Produzione podcast SOS Media Lab",
            label: "Podcast",
          },
        ]}
      />
      <LeadBlock id="preventivo" />
      <section className="section contact-details">
        <div className="container contact-detail-grid">
          <article>
            <span>01</span>
            <p>Parla con noi</p>
            <a href="tel:+393518619374">+39 351 861 9374</a>
            <a href="https://wa.me/393518619374">WhatsApp ↗</a>
          </article>
          <article>
            <span>02</span>
            <p>Scrivici</p>
            <a href="mailto:info@sosmedialab.com">info@sosmedialab.com</a>
          </article>
          <article>
            <span>03</span>
            <p>Vieni in studio</p>
            <address>
              Via Flaminia 157/D
              <br />
              47923 Rimini (RN)
            </address>
            <a
              href="https://maps.app.goo.gl/Ba3tpwHaiC9o24EfA"
              target="_blank"
              rel="noreferrer"
            >
              Indicazioni ↗
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}
