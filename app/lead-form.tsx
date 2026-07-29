"use client";

import { type FormEvent, useState } from "react";

export default function LeadForm() {
  const [sent, setSent] = useState(false);

  function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "");
    const phone = String(data.get("phone") || "");
    const text = [
      "Ciao SOS Media Lab!",
      `Sono ${name}.`,
      `Mi interessa: ${service}.`,
      phone ? `Il mio contatto: ${phone}.` : "",
      message ? `Progetto: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    setSent(true);
    window.open(
      `https://wa.me/393518619374?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form className="lead-form" onSubmit={submitLead}>
      <div className="field-row">
        <label>
          <span>Nome *</span>
          <input name="name" type="text" placeholder="Come ti chiami?" required />
        </label>
        <label>
          <span>Telefono / email *</span>
          <input
            name="phone"
            type="text"
            placeholder="Come possiamo ricontattarti?"
            required
          />
        </label>
      </div>
      <label>
        <span>Di cosa hai bisogno? *</span>
        <select name="service" required defaultValue="">
          <option value="" disabled>
            Seleziona un servizio
          </option>
          <option>Podcast completo</option>
          <option>Affitto sala podcast</option>
          <option>Live session audio + video</option>
          <option>Registrazione musicale / voiceover</option>
          <option>Mix & master</option>
          <option>Arrangiamento / jingle / colonna sonora</option>
          <option>Altro progetto</option>
        </select>
      </label>
      <label>
        <span>Raccontaci il progetto</span>
        <textarea
          name="message"
          rows={4}
          placeholder="Obiettivo, tempistiche e ciò che hai già..."
        />
      </label>
      <label className="privacy-check">
        <input type="checkbox" required />
        <span>Acconsento al trattamento dei dati per essere ricontattato.</span>
      </label>
      <button className="button button-primary form-submit" type="submit">
        {sent ? "Apri WhatsApp per inviare" : "Richiedi una proposta"} <span>↗</span>
      </button>
      <p className="form-note">Nessun impegno. Risposta umana, niente spam.</p>
    </form>
  );
}
