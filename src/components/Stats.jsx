import { FACEBOOK_MAX_CHARACTERS, INSTAGRAM_MAX_CHARACTERS } from "../lib/constants";

export default function Stats({ text }) {
  const numberOfWords = text.split(/\s/).filter((word) => word !== "").length;
  const numberOfCharacters = text.length;
  const instagramCharactersLeft = INSTAGRAM_MAX_CHARACTERS - text.length;
  const facebookCharactersLeft = FACEBOOK_MAX_CHARACTERS - text.length;

  return (
    <section className="stats">
      <Stat number={numberOfWords} label="Words" />
      <Stat number={numberOfCharacters} label="Characters" />
      <Stat number={instagramCharactersLeft} label="Instagram" />
      <Stat number={facebookCharactersLeft} label="Facebook" />
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <section className="stat">
      <span className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}>{number}</span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
