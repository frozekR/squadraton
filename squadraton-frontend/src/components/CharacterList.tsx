import { fetchCharacters } from "#/api/characters";

export default function CharacterList() {
  const characters = fetchCharacters();
  return (
    <section>
      <h2>Characters</h2>
      <ul>
      </ul>
    </section>
  )
}