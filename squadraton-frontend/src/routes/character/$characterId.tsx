import { fetchCharacterById } from '#/api/characters';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/character/$characterId')({
    head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Hero Details',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: '/styles.css',
      },
    ],
  }),
  component: HeroDetailsComponent,
  loader: async ({ params }) => {
    const characterId = Number(params.characterId);
    return fetchCharacterById(characterId);
  },
  errorComponent: ({ error }) => (
    <section>
      <h1>Ошибка</h1>
      <p>{error.message}</p>
    </section>
  ),
})

function HeroDetailsComponent() {
  const heroDetails = Route.useLoaderData();
  return (
    <section>
      <h2>{heroDetails.Name}</h2>
      <p>{heroDetails.Description}</p>
      <p>Role: {heroDetails.Role}</p>
    </section>
  );
}